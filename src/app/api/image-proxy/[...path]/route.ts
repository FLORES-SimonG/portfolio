
import type { NextRequest } from 'next/server';

// Simple in-memory cache (suitable for single-instance deployments)
const cache = new Map<string, { expires: number; buffer: ArrayBuffer; contentType: string }>();
const CACHE_TTL = Number(process.env.IMAGE_PROXY_TTL_MS ?? 1000 * 60 * 60); // default 1 hour
const MAX_BYTES = Number(process.env.IMAGE_PROXY_MAX_BYTES ?? 5 * 1024 * 1024); // default 5 MB

// Allowed hosts can be configured with IMAGE_PROXY_ALLOWED_HOSTS (comma separated)
const allowedHostsEnv = process.env.IMAGE_PROXY_ALLOWED_HOSTS;
const ALLOWED_HOSTS = new Set(
  (allowedHostsEnv ? allowedHostsEnv.split(',') : ['platzi.com']).map((h) => h.trim())
);

export async function GET(_request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  try {
    const params = await context.params;
    const pathSegments = params?.path || [];
    if (pathSegments.length === 0) {
      return new Response('Missing path', { status: 400 });
    }

    // join segments and decode
    const encoded = pathSegments.join('/');
    let urlStr: string;
    // Try decodeURIComponent first (if client sent encoded URL). If that
    // doesn't produce an absolute URL, try base64 decode using atob (edge-safe).
    try {
      urlStr = decodeURIComponent(encoded);
    } catch (e) {
      urlStr = encoded;
    }

    if (!/^https?:\/\//.test(urlStr)) {
      try {
        // atob is available in edge runtime
        urlStr = typeof atob === 'function' ? atob(encoded) : Buffer.from(encoded, 'base64').toString('utf-8');
      } catch (e) {
        return new Response('Invalid encoding', { status: 400 });
      }
    }

    let remoteUrl: URL;
    try {
      remoteUrl = new URL(urlStr);
    } catch (e) {
      return new Response('Invalid url', { status: 400 });
    }

    if (!ALLOWED_HOSTS.has(remoteUrl.hostname)) {
      return new Response('Host not allowed', { status: 403 });
    }

    const cacheKey = remoteUrl.toString();
    const now = Date.now();
    const cached = cache.get(cacheKey);
    if (cached && cached.expires > now) {
      // Serve from in-memory cache and instruct CDN to cache as well
      return new Response(cached.buffer, {
        status: 200,
        headers: {
          'Content-Type': cached.contentType,
          // s-maxage allows CDNs to cache; stale-while-revalidate reduces latency
          'Cache-Control': `public, s-maxage=${Math.floor(CACHE_TTL / 1000)}, stale-while-revalidate=${Math.floor(CACHE_TTL / 1000)}`,
        },
      });
    }

    const resp = await fetch(remoteUrl.toString(), {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Portfolio-Image-Proxy/1.0)'
      }
    });

    if (!resp.ok) {
      return new Response(`Upstream returned ${resp.status}`, { status: 502 });
    }

    const contentLength = resp.headers.get('content-length');
    if (contentLength && Number(contentLength) > MAX_BYTES) {
      return new Response('Image too large', { status: 413 });
    }

    const contentType = resp.headers.get('content-type');
    if (!contentType || !contentType.startsWith('image/')) {
      return new Response('The requested resource is not an image', { status: 502 });
    }

    // Stream into memory (not ideal for very large images) but we still enforce a MAX_BYTES cap
    const buffer = await resp.arrayBuffer();
    if (buffer.byteLength > MAX_BYTES) {
      return new Response('Image too large', { status: 413 });
    }

    // Cache in memory for quick subsequent responses
    cache.set(cacheKey, { expires: now + CACHE_TTL, buffer, contentType });

    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        // Let CDNs cache the response for the same TTL and allow stale while revalidate
        'Cache-Control': `public, s-maxage=${Math.floor(CACHE_TTL / 1000)}, stale-while-revalidate=${Math.floor(CACHE_TTL / 1000)}`,
      },
    });
  } catch (err) {
    return new Response(String(err), { status: 500 });
  }
}

export const runtime = 'edge';
