import { useState } from "react";
import useSWR from "swr";
import { fetcher } from "../utils";

export default function Home(test) {
  const [pageIndex, setPageIndex] = useState(0);
  const { data } = useSWR(`/posts?page=${pageIndex}`, fetcher);
  return (
    <div>
      <h1>Hello</h1>
      {data?.posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
