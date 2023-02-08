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

// creating server
const server = http.createServer(async (req, res) => {
  const extention = path.extname(req.url || "");

  let contentType: string;

  switch (extention) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/js";
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
    default:
      contentType = "text/html";
  }

  // setting file path
  const filePath =
    contentType == "text/html" && req.url == "/"
      ? path.join(__dirname, "../views", "index.html")
      : contentType == "text/html" && req.url?.endsWith("/")
      ? path.join(__dirname, "../views", "index.html")
      : contentType == "text/html"
      ? path.join(__dirname, "../views", req.url + ".html")
      : path.join(__dirname, "../views", req.url as string);
  // making sure file exist
  const fileExists = fs.existsSync(filePath);

  if (fileExists) {
  }
});

server.listen(PORT, () => {
  console.log("listening to port " + PORT);
});
