import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import fsPromises from "node:fs/promises";
import fs from "node:fs";
import path from "node:path";
import { v4 as uuid } from "uuid";
import { format } from "date-fns";
import { logFun } from "./types/index.js";

const LogEvent: logFun = async (url, message) => {
  const dateTime = `${format(new Date(), "yyyy-MMM-do\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t ${uuid()}\t ${url}\t ${message}\n`;
  const logsDir = path.join(__dirname, "logs");
  try {
    if (!fs.existsSync(logsDir)) await fsPromises.mkdir(logsDir);
    fsPromises.appendFile(path.join(logsDir, "eventlogs.txt"), logItem);
  } catch (err: any) {
    // console.log(err);
    if (!fs.existsSync(logsDir)) await fsPromises.mkdir(logsDir);
    fsPromises.appendFile(
      path.join(logsDir, "ErrorsEventlogs.txt"),
      err?.message
    );
  }
};

export default LogEvent;
