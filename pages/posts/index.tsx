import {
  Box,
  Button,
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
import React, { useRef } from "react";
import Layout from "../../components/Layout";
import {
  NextChakraLink,
  NextChakraLinkBox,
} from "../../components/NextChakraLink";
import { usePosts } from "../../utils";
import { PostCard } from "../../utils/customElements";

export default function Home() {
  // const { data } = useSWR(`/posts`, fetcher);
  const {
    setSize,
    size,
    posts,
    more,
    isLoading,
    isError,
    mutate,
    isLoadingMore,
  } = usePosts(10);
  // console.log(posts);
  const testRef = useRef();
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
          return <PostCard post={post} url={`/posts/${post.slug}`} />;
        })}
        <div ref={testRef} style={{ display: "none" }} />
      </Stack>
      <br />
      <Center>
        <Button
          disabled={!more}
          onClick={() => {
            setSize(size + 1);
          }}
        >
          Load More
        </Button>
      </Center>
    </Layout>
  );
}
