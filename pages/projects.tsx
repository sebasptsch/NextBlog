import MDXComponents from "@/components/MDXComponents";
import GithubRepos from "@/components/metrics/GithubRepos";
import fetcher from "@/utils/fetcher";
import { getFileBySlug } from "@/utils/mdx";
import { Box, Divider, Heading } from "@chakra-ui/react";
import { getMDXComponent } from "mdx-bundler/client";
import { NextSeo } from "next-seo";
import React, { useMemo } from "react";
import Layout from "../components/Layout";

export default function Home({ projects, githubrepos }) {
  const { code, frontMatter } = projects;
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <Layout>
      <NextSeo title={`Projects | Seb's Blog`} />
      <Box mt={10} mb={10}>
        <Heading as="h1" size="2xl">
          Projects
        </Heading>
        <Divider mt={5} mb={5} />
        <Component components={MDXComponents} />
        <Divider mt={5} mb={5} />
        <Heading as="h1" size="2xl">
          Github Repositories
        </Heading>
        <br />
        <GithubRepos initial={githubrepos} />
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getFileBySlug("projects");
  const githubrepos = await fetcher("https://sebasptsch.dev/api/repositories");
  return { props: { projects, githubrepos } };
}
