import { useState } from "react";
import useSWR from "swr";
import { fetcher } from "../utils";

export default function Home() {
  const [pageIndex, setPageIndex] = useState(0);
  const { data } = useSWR(`/posts?page=${pageIndex}`, fetcher);
  return (
    <div>
      <h1>Hello</h1>
      {data?.posts.map((post) => (
        <>
          <a href={`/${post.slug}`} key={post.id}>
            {post.title}
          </a>
          <br />
        </>
      ))}
    </div>
  );
}
