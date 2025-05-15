interface Env {
  // Add your environment variables here
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const response = await context.next();
  
  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()');
  
  // Add caching headers for static assets
  const url = new URL(context.request.url);
  if (url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|css|js|woff|woff2)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000');
  }
  
  return response;
} 