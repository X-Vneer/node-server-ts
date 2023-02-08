import http from "node:http";
import fsPromises from "node:fs/promises";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import LogEvent from "./LogEvent.js";
import EventEmitter from "events";
import { TypedEventEmitter } from "./types";
import { logEmitter } from "./types/index.js";

const PORT = parseInt(process.env.port || "") || 3500;

// createing an instance of the  eventemitter class
class MyEmitter extends EventEmitter {}

const Emitter = new MyEmitter() as TypedEventEmitter<logEmitter>;

Emitter.on("log", LogEvent);

// server file
const serverFile = async (
  filePath: string,
  contentType: string,
  response: http.ServerResponse<http.IncomingMessage>,
  message?: string
) => {
  try {
    const rowData = await fsPromises.readFile(filePath, {
      encoding: !contentType.includes("image") ? "utf-8" : null,
    });
    response.writeHead(200, { "Content-Type": contentType });
    const data = contentType.includes("json")
      ? JSON.parse(rowData as string)
      : rowData;
    response.end(contentType.includes("json") ? JSON.stringify(data) : data);
    if (contentType.includes("html"))
      Emitter.emit("log", filePath, message || "served!");
  } catch (err) {
    response.statusCode = 500;
    response.end("error");
  }
};

// creating server
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  const extention = path.extname(req.url || "");

  let contentType: string;

  switch (extention) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".jpg":
      contentType = "image/jpeg";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".svg":
      contentType = "image/svg+xml";
      break;
    case ".txt":
      contentType = "text/plane";
      break;
    case ".ico":
      contentType = "image/ico";
      break;
    default:
      contentType = "text/html";
  }

  // setting file path
  const filePath =
    contentType == "text/html" && req.url == "/"
      ? path.join(__dirname, "../views", "index.html")
      : contentType == "text/html" && req.url?.slice(-1) == "/"
      ? path.join(__dirname, "../views", req.url, "index.html")
      : path.join(__dirname, "../views", req.url as string);
  // making sure file exist
  const fileExists = fs.existsSync(filePath);

  if (fileExists) {
    serverFile(filePath, contentType, res);
  } else {
    if (contentType.includes("html")) {
      serverFile(
        path.join(__dirname, "../views", "404.html"),
        contentType,
        res,
        `This URL is NOT Found!`
      );
    } else {
      res.end();
    }
  }
});

server.listen(PORT, () => {
  console.log("listening to port " + PORT);
});
