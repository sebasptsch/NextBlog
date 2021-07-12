import MDXComponents from "@/components/MDXComponents";
import GithubRepos from "@/components/metrics/GithubRepos";
import { getFileBySlug } from "@/utils/mdx";
import { Box, Divider, Heading } from "@chakra-ui/react";
import hydrate from "next-mdx-remote/hydrate";
import { NextSeo } from "next-seo";
import React from "react";
import Layout from "../components/Layout";

export default function Home({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });
  return (
    <Layout>
      <NextSeo title={`Projects | Seb's Blog`} />
      <Box mt={10} mb={10}>
        <Heading as="h1" size="2xl">
          Projects
        </Heading>
        <Divider mt={5} mb={5} />
        {content}
        <Divider mt={5} mb={5} />
        <Heading as="h1" size="2xl">
          Github Repositories
        </Heading>
        <br />
        <GithubRepos />
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getFileBySlug("projects");
  return { props: projects };
}
