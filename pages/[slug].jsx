import useSWR from "swr";
import { fetcher } from "../utils";

export default function BlogPost(props) {
  const { post } = props;
  return (
    <>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
  );
}

export async function getStaticProps(context) {
  // `getStaticProps` is invoked on the server-side,
  // so this `fetcher` function will be executed on the server-side.
  const { slug } = context.params;
  const { posts } = await fetcher(`/posts/slug/${slug}`);
  return { props: { post: posts[0], slug } };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetcher("/posts?limit=all");
  const { posts } = await res;
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
