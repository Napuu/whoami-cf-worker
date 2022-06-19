export function onRequestGet(context) {
  return new Response(context.request.headers.get('x-real-ip'), { headers: {'content-type': 'text/html; charset=UTF-8'} });
}
