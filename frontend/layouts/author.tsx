import BlogPost from "@/components/BlogPost";
import Layout from "@/components/Layout";
import { AuthorQuery } from "@/utils/gql/query";
import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import { NextSeo } from "next-seo";
import React from "react";

export default function AuthorLayout({ user }: AuthorQuery) {
  const { bio, name, posts } = user;
  return (
    <Layout>
      <NextSeo noindex title={user.name} titleTemplate="%s | Author" />

      <Box textAlign="center">
        <Heading as="h1" mt={2} mb={2}>
          {name}
        </Heading>
        {bio ? <Text as="h2">{bio}</Text> : null}
      </Box>

      <Stack>
        {posts.map((post) => (
          <BlogPost {...post} key={post.id} />
        ))}
      </Stack>
    </Layout>
  );
}
