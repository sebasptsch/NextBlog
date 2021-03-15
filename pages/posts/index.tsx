import BlogPost from "@/components/BlogPost";
import { getAllFilesFrontMatter } from "@/utils/mdx";
import { Box, Divider, Heading, Stack } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import React from "react";
import Layout from "../../components/Layout";

export default function Home({ posts }) {
  return (
    <Layout>
      <NextSeo title={`Blog | Seb's Blog`} />
      <Box mt={10} mb={10}>
        <Heading as="h1" size="2xl">
          Blog
        </Heading>
        <Divider mt={5} />
      </Box>

      <Stack>
        {posts
          .sort(
            (a, b) =>
              Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
          )
          .map((frontMatter) => {
            return <BlogPost {...frontMatter} key={frontMatter.title} />;
          })}
      </Stack>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");
  return { props: { posts } };
}
