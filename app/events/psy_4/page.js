import React from "react";
import { getMarkdownFile, markdownToHtml } from "@/lib/markdowntohtml";
import ReactMarkdown from "react-markdown";

let content = getMarkdownFile(
  "public/Psy_Event_Autumn_Poetry/Psy_Event_Autumn_Poetry.md",
);
content = await markdownToHtml(content);

const MarkdownPage = () => {
  return (
    <div>
      <div className="event markdown-body p-24 flex flex-col container mx-auto">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default MarkdownPage;
