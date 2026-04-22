export const onRequest = async ({ request, next }) => {
  const host = new URL(request.url).hostname;

  // 拦截 pages.dev 域名
  if (host.endsWith("pages.dev")) {
    return new Response("Access Denied", {
      status: 403,
      headers: {
        "content-type": "text/plain"
      }
    });
  }

  return next();
};
