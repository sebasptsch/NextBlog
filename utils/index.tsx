import axios from "axios";
import { useState } from "react";
import { useSWRInfinite } from "swr";

axios.defaults.baseURL = "https://blog.sebasptsch.dev";
// axios.defaults.params = {
//   key: "d9b31df3bebf8277d200f38dd2",
// };
export const fetcher = (url) =>
  axios
    .get(url)
    .then((res) => {
      // console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      throw error;
    });

export function usePosts(limit?) {
  const itemLimit = limit || 20;
  const { data, error, mutate, size, setSize } = useSWRInfinite(
    (pageIndex) => {
      if (pageIndex === 0) return `/posts?_limit=${itemLimit}`;
      return `/posts?_start=${pageIndex * itemLimit}&_limit=${itemLimit}`;
    },
    fetcher
  );
  const [more, setMore] = useState(null)
  axios.get(`/posts/count`).then((res) => {
    var total = data?.flatMap((customerLists) => customerLists)
    setMore(total?.length !== res.data)
  })
  // console.log(data)
  return {
    mutate,
    posts: data?.flatMap((customerLists) => customerLists),
    isLoading: !error && !data,
    isLoadingMore: data?.length !== size,
    isError: error,
    more,
    size,
    setSize,
  };
}

export function usePostsWithTag(limit?) {
  const itemLimit = limit || 20;
  const { data, error, mutate, size, setSize } = useSWRInfinite(
    (pageIndex) => {
      if (pageIndex === 0) return `/posts?_limit=${itemLimit}`;
      return `/posts?_start=${pageIndex * itemLimit}&_limit=${itemLimit}`;
    },
    fetcher
  );
  const [more, setMore] = useState(null)
  axios.get(`/posts/count`).then((res) => {
    var total = data?.flatMap((customerLists) => customerLists)
    setMore(total?.length !== res.data)
  })
  // console.log(data)
  return {
    mutate,
    posts: data?.flatMap((customerLists) => customerLists),
    isLoading: !error && !data,
    isLoadingMore: data?.length !== size,
    isError: error,
    more,
    size,
    setSize,
  };
}
