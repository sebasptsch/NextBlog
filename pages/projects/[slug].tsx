import MDXComponents from "@/components/MDXComponents";
import BlogLayout from "@/layouts/blog";
import { getFileBySlug, getFiles } from "@/utils/mdx";
import hydrate from "next-mdx-remote/hydrate";
import React from "react";

export default function Post({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });
  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("projects", params.slug);
  return { props: post };
}

export async function getStaticPaths() {
  const posts = await getFiles("projects");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}
