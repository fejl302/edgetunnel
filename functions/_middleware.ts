export const onRequest = async ({ request, next }) => {
  const host = request.headers.get("host");

  if (host && host.endsWith("pages.dev")) {
    return new Response("Not Allowed", { status: 403 });
  }

  return next();
};
