import { Box, Button, Center, Divider, Heading, Stack } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import React, { useRef } from "react";
import Layout from "../../components/Layout";
import { usePosts } from "../../utils";
import { PostCard } from "../../utils/customElements";

export default function Home() {
  // const { data } = useSWR(`/posts`, fetcher);
  const { setSize, size, posts, more } = usePosts(10);
  // console.log(posts);
  const testRef = useRef();
  return (
    <Layout>
      <NextSeo title={`Blog | Seb's Blog`} />
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
      </Stack>
    </Layout>
  );
}
