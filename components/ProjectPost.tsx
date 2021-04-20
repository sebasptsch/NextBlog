import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectPost({
  title,
  summary,
  slug,
  image,
  publishedAt,
  readingTime,
}) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="flex">
        {image ? <Image src={image} layout="fill" objectFit="contain" /> : null}
        <div className="w-max">
          <div className="flex">
            <h3>{title}</h3>
          </div>
          <div className="flex-1 self-stretch" />
          <p className="font-semibold capitalize">{publishedAt}</p>
          <p>{summary}</p>
        </div>
      </div>
    </Link>
  );
}
