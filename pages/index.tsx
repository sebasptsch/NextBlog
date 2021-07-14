import BlogPost from "@/components/BlogPost";
import Layout from "@/components/Layout";
import { getAllFilesFrontMatter } from "@/utils/mdx";
import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import React, { useState } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Home({ posts }) {
  const [search, setSearch] = useState("");
  return (
    <Layout>
      <NextSeo title={`Seb's Blog`} />
      <Stack>
        <Box textAlign="center">
          <Heading as="h1" mt={2} mb={2}>
            Sebastian Pietschner
          </Heading>
          <Text as="h2">
            An index of my projects and experiences in the wider world.
          </Text>
        </Box>
        <br />
        <HStack spacing={10} justify="center" m={5}>
          <Button
            aria-label="twitter"
            rightIcon={<FaTwitter />}
            href={"https://twitter.com/sebasptsch"}
            as="a"
          >
            Twitter
          </Button>
          <Button
            aria-label="github"
            rightIcon={<FaGithub />}
            as="a"
            href={"https://github.com/sebasptsch/"}
          >
            Github
          </Button>
        </HStack>
      </Stack>
      <Box mt={10} mb={10}>
        <Center>
          <Heading size="lg">Recent Posts</Heading>
        </Center>

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
