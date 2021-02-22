import { fetcher } from "../../utils";
var unified = require("unified");
var parse = require("remark-parse");
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Divider,
  Box,
  Tag,
  Link,
  Code,
  Alert,
  Flex,
  Image,
  Center,
} from "@chakra-ui/react";
import remark2rehype from "remark-rehype";
import rehype2react from "rehype-react";
import highlight from "rehype-highlight";
import React from "react";
import Layout from "../../components/Layout";
import { NextSeo } from "next-seo";

export default function BlogPost(props) {
  const { author } = props;
  return (
    <Layout>
      <NextSeo title={`${author.name} | Seb's Blog`} />
      <Center>
        {author.profile ? (
          <Image
            borderRadius="full"
            boxSize="150px"
            src={`https://blog.sebasptsch.dev` + author.profile.url}
            alt={author.profile.alternativeText}
          />
        ) : null}
      </Center>
      <Heading textAlign="center">{author.name}</Heading>
      <Text textAlign="center">{author.handle}</Text>
      <br />
      <Divider />
      <Text>{author.bio}</Text>
    </Layout>
  );
}

export async function getStaticProps(context) {
  // `getStaticProps` is invoked on the server-side,
  // so this `fetcher` function will be executed on the server-side.
  const { slug } = context.params;
  const authors = await fetcher(`/authors?slug=${slug}`);
  // const html = unified().use(markdown).use(html).process(posts[0].content);
  return { props: { author: authors[0], slug } };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetcher("/authors");
  const authors = await res;
  // Get the paths we want to pre-render based on posts
  const paths = authors.map((author) => ({
    params: { slug: author.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
