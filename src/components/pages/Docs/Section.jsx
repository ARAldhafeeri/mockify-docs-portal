import React, {useState, useEffect} from 'react'
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

export default function Section({link}) {
const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      const response = await fetch(link);
      const markdownContent = await response.text();
      setMarkdown(markdownContent);
    };

    fetchMarkdown();
  }, []);

  return (
      <ReactMarkdown
        children={markdown}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
      />
  );
}
