import BlogPost from "@/components/BlogPost";
import Layout from "@/components/Layout";
import { TagQuery } from "@/utils/gql/query";
import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import { NextSeo } from "next-seo";
import React from "react";

const TagLayout = ({ tag }: TagQuery) => {
  const { description, name, posts } = tag;
  return (
    <Layout>
      <NextSeo
        noindex
        title={name}
        titleTemplate="%s | Tag"
        description={description}
      />
      <Box textAlign="center">
        <Heading as="h1" mt={2} mb={2}>
          {name}
        </Heading>
        {description ? <Text as="h2">{description}</Text> : null}
      </Box>
      <Stack>
        {posts.map((post) => (
          <BlogPost {...post} key={post.id} />
        ))}
      </Stack>
    </Layout>
  );
};
export default TagLayout;
