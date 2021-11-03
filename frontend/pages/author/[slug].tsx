import AuthorLayout from "@/layouts/author";
import {
  AuthorDocument,
  AuthorPathsDocument,
  AuthorPathsQuery,
  AuthorQuery,
} from "@/utils/gql/query";
import { request } from "graphql-request";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import React from "react";

const Tag = ({ user }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <AuthorLayout user={user} />
);

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const { users }: AuthorPathsQuery = await request(
    "https://cms.sebasptsch.dev/api/graphql",
    AuthorPathsDocument
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
  const { user }: AuthorQuery = await request(
    "https://cms.sebasptsch.dev/api/graphql",
    AuthorDocument,
    variables
  );
  return {
    props: {
      user,
    },
    revalidate: 10,
  };
}

export default Tag;
