import MDXComponents from "@/components/MDXComponents";
import BlogLayout from "@/layouts/blog";
import { getFileBySlug, getFiles } from "@/utils/mdx";
import { MDXRemote } from "next-mdx-remote";
import React from "react";

export default function Post({ mdxSource, frontMatter }) {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </BlogLayout>
  );
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("blog", params.slug);
  return { props: post };
}

export async function getStaticPaths() {
  const posts = await getFiles("blog");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}
