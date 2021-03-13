import axios from "axios";
import { useState } from "react";
import { useSWRInfinite } from "swr";

axios.defaults.baseURL = "https://blog.sebasptsch.dev";
// axios.defaults.params = {
//   key: "d9b31df3bebf8277d200f38dd2",
// };

/**
 * A simple fetcher function for use with <pre>next-swr</pre>
 * @param url the url of the item to get
 */
export const fetcher = (url) =>
  axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });

/**
 * A <pre>useSWRInfinite</pre> hook for fetching posts
 * @param limit the amount of Posts to fetch each time
 */
export function usePosts(limit?) {
  const itemLimit = limit || 20;
  const { data, error, mutate, size, setSize } = useSWRInfinite((pageIndex) => {
    if (pageIndex === 0) return `/posts?_limit=${itemLimit}`;
    return `/posts?_start=${pageIndex * itemLimit}&_limit=${itemLimit}`;
  }, fetcher);
  const [more, setMore] = useState(null);
  axios.get(`/posts/count`).then((res) => {
    var total = data?.flatMap((customerLists) => customerLists);
    setMore(total?.length !== res.data);
  });
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

/**
 * A <pre>useSWRInfinite</pre> hook for fetching projects
 * @param limit the amount of Projects to fetch each time
 */
export function useProjects(limit?) {
  const itemLimit = limit || 20;
  const { data, error, mutate, size, setSize } = useSWRInfinite((pageIndex) => {
    if (pageIndex === 0) return `/projects?_limit=${itemLimit}`;
    return `/projects?_start=${pageIndex * itemLimit}&_limit=${itemLimit}`;
  }, fetcher);
  const [more, setMore] = useState(null);
  axios.get(`/projects/count`).then((res) => {
    var total = data?.flatMap((customerLists) => customerLists);
    setMore(total?.length !== res.data);
  });
  return {
    mutate,
    projects: data?.flatMap((customerLists) => customerLists),
    isLoading: !error && !data,
    isLoadingMore: data?.length !== size,
    isError: error,
    more,
    size,
    setSize,
  };
}
