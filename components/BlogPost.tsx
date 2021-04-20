import Link from "next/link";
import React from "react";

export default function BlogPost({
  title,
  summary,
  slug,
  image,
  publishedAt,
  readingTime,
  ...props
}): JSX.Element {
  return (
    <Link href={`/posts/${slug}`}>
      <div className="p-6">
        <div className="flex">
          <h2>{title}</h2>
          <div className="flex-1 self-stretch" />
          <p>{publishedAt}</p>
        </div>
      </div>
      <p className="font-semibold">{summary}</p>
    </Link>
  );
}
