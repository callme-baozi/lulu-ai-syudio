const fs = require("fs");
const http = require("http");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mp4": "video/mp4",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

const cacheableExtensions = new Set([".css", ".js", ".jpg", ".jpeg", ".png", ".webp", ".mp4"]);

function sendFile(req, res, file) {
  fs.stat(file, (error, stat) => {
    if (error || !stat.isFile()) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    const type = types[path.extname(file).toLowerCase()] || "application/octet-stream";
    const range = req.headers.range;

    if (range && type === "video/mp4") {
      const [startText, endText] = range.replace(/bytes=/, "").split("-");
      const start = Number(startText);
      const end = endText ? Number(endText) : stat.size - 1;

      res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${stat.size}`,
        "Accept-Ranges": "bytes",
        "Content-Length": end - start + 1,
        "Content-Type": type,
        "Cache-Control": "public, max-age=31536000, immutable",
      });
      fs.createReadStream(file, { start, end }).pipe(res);
      return;
    }

    const headers = {
      "Content-Length": stat.size,
      "Accept-Ranges": "bytes",
      "Content-Type": type,
    };
    if (cacheableExtensions.has(path.extname(file).toLowerCase())) {
      headers["Cache-Control"] = "public, max-age=31536000, immutable";
    }
    res.writeHead(200, headers);
    fs.createReadStream(file).pipe(res);
  });
}

const server = http.createServer((req, res) => {
  const cleanUrl = decodeURIComponent(req.url.split("?")[0]);
  const route = cleanUrl === "/" ? "/index.html" : cleanUrl;
  const file = path.normalize(path.join(root, route));

  if (!file.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  sendFile(req, res, file);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`LULU AI STUDIO running at http://127.0.0.1:${port}`);
});
