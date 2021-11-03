import BlogPost from "@/components/BlogPost";
import Layout from "@/components/Layout";
import {
  TagDocument,
  TagPathsDocument,
  TagPathsQuery,
  TagQuery,
} from "@/utils/gql/query";
import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import { request } from "graphql-request";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { NextSeo } from "next-seo";
import React from "react";

export default function Tag({
  posts,
  tag,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { description, name } = tag;
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
}

export async function getStaticPaths({
  params,
}: GetStaticPropsContext): Promise<GetStaticPathsResult> {
  const { tags }: TagPathsQuery = await request(
    "https://cms.sebasptsch.dev/api/graphql",
    TagPathsDocument
  );

  const paths = tags
    .map((tag) => tag.slug)
    .filter((slug): slug is string => !!slug)
    .map((slug) => `/tag/${slug}`);

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const variables = {
    where: {
      slug: params!.slug as string,
    },
  };
  const { tag }: TagQuery = await request(
    "https://cms.sebasptsch.dev/api/graphql",
    TagDocument,
    variables
  );
  const { posts } = tag;
  return {
    props: {
      posts,
      tag,
    },
    revalidate: 10,
  };
}
