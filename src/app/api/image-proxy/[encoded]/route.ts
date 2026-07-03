import { NextRequest } from 'next/server';

// GET /api/image-proxy/:encoded
export async function GET(_request: NextRequest, context: { params: { encoded: string } | Promise<{ encoded: string }> }) {
  const params = await context.params;
  const { encoded } = params;

  if (!encoded) {
    return new Response('Missing encoded parameter', { status: 400 });
  }

  let decodedUrl: string;
  try {
    // Decode base64 (server-side Buffer is available)
    decodedUrl = Buffer.from(encoded, 'base64').toString('utf-8');
  } catch (err) {
    return new Response('Invalid encoded parameter', { status: 400 });
  }

  // Basic validation
  if (!decodedUrl.startsWith('http://') && !decodedUrl.startsWith('https://')) {
    return new Response('Invalid URL', { status: 400 });
  }

  try {
    const res = await fetch(decodedUrl, {
      // Don't send cookies from the incoming request; this is a simple server-side proxy.
      headers: {
        // Some hosts may block requests without a user-agent; set a benign one.
        'User-Agent': 'next-image-proxy/1.0',
      },
      // Allow streaming the response body
      // credentials: 'omit' is default for fetch in Node, so we omit it explicitly for clarity
    });

    if (!res.ok) {
      return new Response(`Upstream request failed (${res.status})`, { status: 404 });
    }

    const contentType = res.headers.get('content-type') || '';
    if (!contentType.startsWith('image/')) {
      return new Response("The requested resource isn't a valid image", { status: 404 });
    }

    // Re-stream the image to the client with the original content-type.
    const headers = new Headers();
    headers.set('Content-Type', contentType);
    // Cache for one day and allow stale while revalidate for a few days
    headers.set('Cache-Control', 'public, max-age=86400, stale-while-revalidate=259200');

    // forward content-length if present
    const contentLength = res.headers.get('content-length');
    if (contentLength) headers.set('Content-Length', contentLength);

    return new Response(res.body, {
      status: 200,
      headers,
    });
  } catch (err) {
    // Network or unexpected error
    return new Response('Error fetching remote image', { status: 502 });
  }
}

export const dynamic = 'force-dynamic';
