import { lists } from ".keystone/api";
import BlogLayout from "@/layouts/blog";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <BlogLayout post={post}></BlogLayout>;
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const posts = await lists.Post.findMany({
    query: `slug`,
  });

  const paths = posts
    .map((post) => post.slug)
    .filter((slug): slug is string => !!slug)
    .map((slug) => `/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const post = await lists.Post.findOne({
    where: { slug: params!.slug as string },
    query:
      "id title content { document } image { src width height } published_at summary",
  });
  return { props: { post } };
}
