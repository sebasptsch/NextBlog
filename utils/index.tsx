import axios from "axios";
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
    (pageIndex, previousPageData) => {
      // console.log(pageIndex)
      // reached the end
      // console.log(previousPageData.length)
      // if (previousPageData.length < itemLimit) return null;
      // first page, we don't have `previousPageData`
      if (pageIndex === 0) return `/posts?_limit=${itemLimit}`;
      // add the cursor to the API endpoint
      console.log(previousPageData[previousPageData.length - 1].id)
      return `/posts?_start=${pageIndex * itemLimit}&_limit=${itemLimit}`;
    },
    fetcher
  );
  // console.log(data)
  return {
    mutate,
    posts: data?.flatMap((customerLists) => customerLists),
    //   has_more: data && data[data?.length - 1]?.has_more,
    isLoading: !error && !data,
    isLoadingMore: data?.length !== size,
    isError: error,
    size,
    setSize,
  };
}
