import MDXComponents from "@/components/MDXComponents";
import ProjectLayout from "@/layouts/project";
import { getFileBySlug, getFiles } from "@/utils/mdx";
import hydrate from "next-mdx-remote/hydrate";
import React from "react";

export default function Post({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });
  return <ProjectLayout frontMatter={frontMatter}>{content}</ProjectLayout>;
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
