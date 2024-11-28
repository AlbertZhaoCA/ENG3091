"use server";

import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

export async function getMarkdownFile(filePath) {
  const fileContent = fs.readFileSync(
    path.join(process.cwd(), filePath),
    "utf8",
  );
  return fileContent;
}

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  console.log(result.toString());

  // Modify image paths if necessary
  let htmlContent = result.toString();

  // Regex to replace image paths with the correct public URL
  htmlContent = htmlContent.replace(/<img src="([^"]+)"/g, (match, p1) => {
    if (!p1.startsWith("http") && !p1.startsWith("/")) {
      return `<img src="/${p1}"`;
    }
    return match;
  });

  return htmlContent;
}
