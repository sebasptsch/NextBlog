import MDXComponents from "@/components/MDXComponents";
import BlogLayout from "@/layouts/blog";
import { getFileBySlug, getFiles } from "@/utils/mdx";
import { getMDXComponent } from "mdx-bundler/client";
import React, { useMemo } from "react";

export default function Post({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <BlogLayout frontMatter={frontMatter}>
      <Component components={MDXComponents} />
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
