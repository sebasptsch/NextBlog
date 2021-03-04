import { fetcher } from "../../utils";
import {
  Heading,
  Text,
  Divider,
  Box,
  Flex,
  Center,
  Stack,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import Layout from "../../components/Layout";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { NextChakraLink } from "../../components/NextChakraLink";

export default function BlogPost(props) {
  const { tag } = props;
  const { posts } = tag;
  return (
    <Layout>
      <NextSeo title={`${tag.tag} | Seb's Blog`} />
      <Center></Center>
      <Heading>{tag.tag}</Heading>
      <Text>{tag.description}</Text>

      <br />
      <Divider />
      <br />
      <div>
        <Stack>
          {posts?.map((post) => (
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
                    {new Date(
                      Date.parse(post.published_at)
                    ).toLocaleDateString()}
                  </Text>
                </Flex>
                <Text>{post.excerpt}</Text>
              </Box>
            </Box>
          ))}
        </Stack>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  // `getStaticProps` is invoked on the server-side,
  // so this `fetcher` function will be executed on the server-side.
  const { slug } = context.params;
  const tags = await fetcher(`/tags?slug=${slug}`);
  return { props: { tag: tags[0], slug } };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetcher("/tags");
  const tags = await res;
  // Get the paths we want to pre-render based on posts
  const paths = tags.map((tag) => ({
    params: { slug: tag.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
