export const onRequestGet = async ({request}) => {
  return Response(JSON.stringify([...request.headers]), {
  //  headers: Object.fromEntries(request.headers),
    // cf: request.cf
  //}), {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  });
}

