export function onRequestGet(context) {
  return new Response(JSON.stringify({
    headers: Object.fromEntries(context.request.headers),
    cf: context.request.cf
  }), {
    headers: {'content-type': 'application/json'}
  });
}
