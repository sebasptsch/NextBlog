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
import React from "react";
import Image from "next/image";
import useSWR from "swr";
import unified from "unified";
import Layout from "../components/Layout";
import { NextChakraLink } from "../components/NextChakraLink";
import { fetcher } from "../utils";

export default function Home() {
  const { data } = useSWR(`/posts`, fetcher);
  return (
    <Layout>
      <Stack>
        {data?.map((post) => (
          <Box
            borderWidth="1px"
            borderRadius="10px"
            overflow="hidden"
            key={post.id}
          >
            {post.cover ? (
              <Image
                src={`https://blog.sebasptsch.dev` + post.cover.url}
                width={post.cover.width}
                height={post.cover.height}
                layout={"responsive"}
              />
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
                  {new Date(Date.parse(post.published_at)).toLocaleDateString()}
                </Text>
              </Flex>
              <HStack spacing={4} mt={2} mb={2}>
                {post.tags.map((tag) => (
                  <Tag
                    as={NextChakraLink}
                    href={`/tags/${tag.slug}`}
                    key={tag.id}
                  >
                    {tag.tag}
                  </Tag>
                ))}
              </HStack>
              <Text>{post.excerpt}</Text>
            </Box>
          </Box>
        ))}
      </Stack>
    </Layout>
  );
}
