import React from "react";
import { getMarkdownFile, markdownToHtml } from "@/lib/markdowntohtml";
import ReactMarkdown from "react-markdown";

let content = getMarkdownFile("public/Psy_Event_Worry_Free/worry free.md");

const MarkdownPage = () => {
  return (
    <div>
      <ReactMarkdown className="event markdown-body p-24 flex flex-col container mx-auto">
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownPage;
