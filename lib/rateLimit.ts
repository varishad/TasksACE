// Simple in-memory rate limiting for development/production
const requests = new Map<string, number[]>();

export function simpleRateLimit(ip: string, limit = 5, window = 60000): boolean {
  const now = Date.now();
  const userRequests = requests.get(ip) || [];
  
  // Remove old requests outside the window
  const validRequests = userRequests.filter(time => now - time < window);
  
  if (validRequests.length >= limit) {
    return false; // Rate limit exceeded
  }
  
  validRequests.push(now);
  requests.set(ip, validRequests);
  return true;
}

// Cleanup old entries periodically
setInterval(() => {
  const now = Date.now();
  const window = 60000; // 1 minute
  
  Array.from(requests.entries()).forEach(([ip, timestamps]) => {
    const validTimestamps = timestamps.filter((time: number) => now - time < window);
    if (validTimestamps.length === 0) {
      requests.delete(ip);
    } else {
      requests.set(ip, validTimestamps);
    }
  });
}, 60000); // Cleanup every minute 