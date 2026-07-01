import type { NextRequest } from 'next/server';

// Simple in-memory cache
const cache = new Map<string, { expires: number; buffer: ArrayBuffer; contentType: string }>();
const CACHE_TTL = 1000 * 60 * 60; // 1 hour
const MAX_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_HOSTS = new Set(['platzi.com']);

export async function GET(req: NextRequest) {
  try {
    const urlParam = req.nextUrl.searchParams.get('url');
    if (!urlParam) {
      return new Response('Missing url param', { status: 400 });
    }

    let remoteUrl: URL;
    try {
      remoteUrl = new URL(urlParam);
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
      return new Response(cached.buffer, {
        status: 200,
        headers: {
          'Content-Type': cached.contentType,
          'Cache-Control': `public, max-age=${Math.floor(CACHE_TTL / 1000)}`,
        },
      });
    }

    const resp = await fetch(remoteUrl.toString(), {
      // include credentials? usually no
      method: 'GET',
      headers: {
        // present a common user-agent to reduce blocking
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

    const contentType = resp.headers.get('content-type') || 'application/octet-stream';
    const buffer = await resp.arrayBuffer();
    if (buffer.byteLength > MAX_BYTES) {
      return new Response('Image too large', { status: 413 });
    }

    // store in cache
    cache.set(cacheKey, { expires: now + CACHE_TTL, buffer, contentType });

    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': `public, max-age=${Math.floor(CACHE_TTL / 1000)}`,
      },
    });
  } catch (err) {
    return new Response(String(err), { status: 500 });
  }
}

export const runtime = 'edge';
