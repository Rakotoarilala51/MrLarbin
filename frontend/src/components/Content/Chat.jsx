import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Chat({ discussions }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [discussions]);

  return (
    <div className="overflow-auto flex-1 m-8">
      {discussions.map((discussion) => (
        <div key={discussion.promptId}>
          <div className="flex justify-end">
            <div className="bg-stone-200 rounded-xl max-w-[60%] m-2">
              <p className="text-xs m-1 break-words">{discussion.prompt}</p>
            </div>
          </div>
          <div className="text-xs bg-stone-100 rounded-xl max-w-[80%] m-2 p-3 whitespace-pre-wrap prose prose-sm dark:prose-invert">
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={darcula}
                      language={match[1]}
                      PreTag="div"
                      className="rounded-lg text-xs"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className="bg-gray-200 text-red-600 px-1 py-0.5 rounded" {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {discussion.response}
            </ReactMarkdown>
          </div>
          <div ref={bottomRef}></div>
        </div>
      ))}
    </div>
  );
}
