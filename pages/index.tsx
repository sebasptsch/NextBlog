import BlogPost from "@/components/BlogPost";
import Layout from "@/components/Layout";
import { AllPostsDocument, AllPostsQuery } from "@/utils/gql/query";
import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { request } from "graphql-request";
import { InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import React, { useState } from "react";
import { FaGithub, FaMoon, FaSun, FaTwitter } from "react-icons/fa";

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [search, setSearch] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Layout>
      <NextSeo
        title="Sebastian Pietschner - Developer and Student"
        description="My personal site that I use to develop and share new skills and projects."
      />
      <Center height="100vh">
        <Box textAlign="center">
          <Heading as="h1" mt={2} mb={2}>
            Sebastian Pietschner
          </Heading>
          <Text as="h2">
            My personal site that I use to develop and share new skills and
            projects.
          </Text>
          <br />
          <HStack spacing={6} justify="center" m={5}>
            <Button
              aria-label="twitter"
              rightIcon={<FaTwitter />}
              href={"https://twitter.com/sebasptsch"}
              as="a"
            >
              Twitter
            </Button>
            <IconButton
              icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
              aria-label="toggle theme"
              m={4}
              onClick={toggleColorMode}
            />
            <Button
              aria-label="github"
              rightIcon={<FaGithub />}
              as="a"
              href={"https://github.com/sebasptsch/"}
            >
              Github
            </Button>
          </HStack>
        </Box>
      </Center>
      <Divider />
      <Box mt={10} mb={10}>
        <Center>
          <Heading size="lg">Recent Posts</Heading>
        </Center>
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
          .filter((post) =>
            post.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((post) => {
            return <BlogPost {...post} key={post.id} />;
          })}
      </Stack>
    </Layout>
  );
}

export async function getStaticProps() {
  const endpoint = "https://cms.sebasptsch.dev/api/graphql";
  const { posts }: AllPostsQuery = await request(endpoint, AllPostsDocument);
  return { props: { posts }, revalidate: 10 };
}
