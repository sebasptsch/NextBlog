import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Spacer,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import useSWR from "swr";
import Layout from "../../components/Layout";
import { NextChakraLink } from "../../components/NextChakraLink";
import { fetcher, usePosts } from "../../utils";

export default function Home() {
  // const { data } = useSWR(`/posts`, fetcher);
  const {
    setSize,
    size,
    posts,
    isLoading,
    isError,
    mutate,
    isLoadingMore,
  } = usePosts();
  // console.log(posts);
  return (
    <Layout>
      <Box mt={10} mb={10}>
        <Heading as="h1" size="4xl" textAlign="center">
          Blog
        </Heading>
        <Divider mt={5} />
      </Box>

      <Stack>
        {posts?.map((post) => {
          return (
            <Box
              borderWidth="1px"
              borderRadius="10px"
              overflow="hidden"
              key={post.id}
              w="100%"
            >
              {post.cover ? (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "20em",
                  }}
                >
                  <Image
                    alt="Mountains"
                    src={`https://blog.sebasptsch.dev` + post.cover.url}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ) : null}
              <Box p={4}>
                <Flex>
                  <Heading
                    as={NextChakraLink}
                    size="md"
                    href={`/posts/${post.slug}`}
                  >
                    {post.title}
                  </Heading>
                  <Spacer />
                  <Text fontWeight="semibold" fontSize="s" ml={2}>
                    {new Date(
                      Date.parse(post.published_at)
                    ).toLocaleDateString()}{" "}
                  </Text>
                </Flex>
                <HStack spacing={4} mt={2} mb={2}>
                  {post.tags.map((tag) => (
                    <Tag
                      as={NextChakraLink}
                      href={`/tags/${tag.slug}`}
                      key={tag.id}
                      colorScheme="blue"
                    >
                      {tag.tag}
                    </Tag>
                  ))}
                </HStack>
                <Text>{post.excerpt}</Text>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Layout>
  );
}
