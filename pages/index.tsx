import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Image from 'next/image';
import useSWR from "swr";
import Layout from "../components/Layout";
import { NextChakraLinkBox } from "../components/NextChakraLink";
import { fetcher } from "../utils";

export default function Home() {
  const { data } = useSWR(`/posts`, fetcher);
  // console.log(data);
  return (
    <Layout>

      {data?.map((post) => (

        <NextChakraLinkBox borderWidth="1px" borderRadius="25px" p={3} href={`/posts/${post.slug}`}>
          <Flex>
            {post.cover ? <Image src={`https://blog.sebasptsch.dev` + post.cover.url} width={"100%"} height={"100%"} /> : null}
            <Box>
              <Heading size="md">{post.title}</Heading>
              <Text>{post.author?.name}</Text>
              <Divider />
              <Text>{post.description}</Text>
            </Box>
          </Flex>
        </NextChakraLinkBox>
      ))}
    </Layout>
  );
}
