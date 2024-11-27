import React, { useEffect, useState } from "react";
import { getMarkdownFile, markdownToHtml } from "@/lib/markdowntohtml";
import ReactMarkdown from "react-markdown";
import getHtml from "@/actions/getHtml";
import { cn } from "@/lib/utils";

const Plugin = ({ path, type, className }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      if (type === "md") {
        getMarkdownFile(`public/${path}`).then((data) => {
          setContent(data);
        });
      } else if (type === "html") {
        const htmlContent = await getHtml(`public/${path}`);
        setContent(htmlContent);
      }
    };

    fetchContent();
  }, [path, type]);

  if (type === "md") {
    return (
      <div>
        <ReactMarkdown
          urlTransform={(url) => {
            return url.startsWith("/") ? url : `/${url}`;
          }}
          className="event markdown-body p-24 flex flex-col container mx-auto"
        >
          {content}
        </ReactMarkdown>
      </div>
    );
  } else if (type === "html") {
    return (
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="event markdown-body p-24 flex flex-col container mx-auto"
        />
      </div>
    );
  } else {
    return (
      <iframe
        src={path}
        className={cn("w-full h-full min-h-screen", className)}
      />
    );
  }
};

export default Plugin;
