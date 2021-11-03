import BlogPost from "@/components/BlogPost";
import Layout from "@/components/Layout";
import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import { gql, request } from "graphql-request";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { NextSeo } from "next-seo";
import React from "react";

export default function Tag({
  posts,
  user,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { name, bio } = user;
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

export async function getStaticPaths({
  params,
}: GetStaticPropsContext): Promise<GetStaticPathsResult> {
  const query = gql`
    query Query {
      users {
        slug
      }
    }
  `;
  const { users } = await request(
    "https://cms.sebasptsch.dev/api/graphql",
    query
  );

  const paths = users
    .map((user) => user.slug)
    .filter((slug): slug is string => !!slug)
    .map((slug) => `/author/${slug}`);

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
  const query = gql`
    query Query($where: UserWhereUniqueInput!) {
      user(where: $where) {
        id
        name
        bio
        posts(orderBy: [{ published_at: desc }]) {
          id
          title
          slug
          summary
          published_at
          tags {
            id
            name
            slug
          }
        }
      }
    }
  `;
  const { user } = await request(
    "https://cms.sebasptsch.dev/api/graphql",
    query,
    variables
  );
  const { posts } = user;
  return {
    props: {
      posts,
      user,
    },
    revalidate: 10,
  };
}
