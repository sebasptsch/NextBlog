import { useState } from "react";
import useSWR from "swr";
import { fetcher } from "../utils";

export default function Home() {
  const { data } = useSWR(`/posts`, fetcher);
  console.log(data);
  return (
    <div>
      <h1>Hello</h1>
      {data?.map((post) => (
        <a href={`/${post.slug}`} key={post.id}>
          {post.title}
        </a>
      ))}
    </div>
  );
}
