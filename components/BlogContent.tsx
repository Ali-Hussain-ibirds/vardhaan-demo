import DOMPurify from "isomorphic-dompurify";

interface BlogContentProps {
  html: string;
}

export default function BlogContent({ html }: BlogContentProps) {
  return (
    <div
      className="blogPara prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(html),
      }}
    />
  );
}

