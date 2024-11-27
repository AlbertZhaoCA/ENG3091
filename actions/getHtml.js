"use server";
const fs = require("fs");
const path = require("path");

export default async function getHtml(reqPath) {
  const _path = path.join(process.cwd(), reqPath);
  const fileContent = fs.readFileSync(_path);
  return fileContent.toString("utf-8");
}
