import BlogPost from "@/components/BlogPost";
import { getAllFilesFrontMatter } from "@/utils/mdx";
import {
  Box,
  Divider,
  Heading,
  Input,
  InputGroup,
  Stack,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import React, { useState } from "react";
import Layout from "../../components/Layout";

export default function Home({ posts }) {
  const [search, setSearch] = useState("");
  return (
    <Layout>
      <NextSeo title={`Blog | Seb's Blog`} />
      <Box mt={10} mb={10}>
        <Heading as="h1" size="2xl">
          Blog
        </Heading>
        <Divider mt={5} />
      </Box>
      <InputGroup>
        {/* <InputRightElement children={<SearchIcon />} /> */}
        <Input
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          variant="filled"
          size="lg"
        />
      </InputGroup>
      <Stack>
        {posts
          .sort(
            (a, b) =>
              Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
          )
          .filter((frontMatter) =>
            frontMatter.title.toLowerCase().includes(search.toLowerCase())
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
