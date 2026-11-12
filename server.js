const path = require("path");

const publicDirectory = path.join(__dirname, "public");
const port = Number(process.env.APP_PORT || 3000);

const server = Bun.serve({
  port,
  async fetch(request) {
    const url = new URL(request.url);
    let pathname;

    try {
      pathname = decodeURIComponent(url.pathname);
    } catch {
      return new Response("Bad Request", { status: 400 });
    }

    const requestedPath = pathname === "/" ? "/index.html" : pathname;
    const filePath = path.resolve(publicDirectory, `.${requestedPath}`);

    if (filePath !== publicDirectory && !filePath.startsWith(`${publicDirectory}${path.sep}`)) {
      return new Response("Not Found", { status: 404 });
    }

    const file = Bun.file(filePath);
    if (!(await file.exists())) {
      return new Response("Not Found", { status: 404 });
    }

    return new Response(file);
  },
});

console.log(`Server is listening on http://localhost:${server.port}`);
