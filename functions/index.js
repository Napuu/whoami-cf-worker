export function onRequestGet(context) {
  return new Response(context.request.headers.get('x-real-ip'));
}
