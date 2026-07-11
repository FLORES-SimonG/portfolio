export function encodeBase64(input: string): string {
  // In Node (server) Buffer is available; in browser use btoa
  if (typeof Buffer !== 'undefined' && typeof Buffer.from === 'function') {
    return Buffer.from(input, 'utf-8').toString('base64');
  }

  if (typeof btoa === 'function') {
    return btoa(input);
  }

  // Fallback: encodeURIComponent + replace (worst case)
  return encodeURIComponent(input);
}
