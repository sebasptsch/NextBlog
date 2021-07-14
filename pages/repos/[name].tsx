import Layout from "@/components/Layout";
import MDXComponents from "@/components/MDXComponents";
import { Heading } from "@chakra-ui/react";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";

export default function Repo({ source, name }) {
  return (
    <Layout>
      <NextSeo title={name} nofollow noindex />
      <Heading>{name}</Heading>
      <MDXRemote {...source} components={MDXComponents} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://${process.env.GITHUB_CLIENT}:${process.env.GITHUB_SECRET}@api.github.com/repos/sebasptsch/${params.name}/readme`
  );
  const readme = await res.json();
  let buff = Buffer.from(readme.content, "base64");
  let content = buff.toString("utf-8");
  const repo = matter(content);
  const mdxSource = await serialize(repo.content);
  return { props: { source: mdxSource, name: params.name } };
}

export async function getStaticPaths() {
  const res = await fetch(
    `https://${process.env.GITHUB_CLIENT}:${process.env.GITHUB_SECRET}@api.github.com/users/sebasptsch/repos?per_page=100`
  );
  const repos = await res.json();

  const paths = repos.map((repo) => ({
    params: { name: repo.name },
  }));

  return { paths, fallback: "blocking" };
}
