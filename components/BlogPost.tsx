import { Flex, Spacer, Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import React from "react";
import { NextChakraLinkBox } from "./NextChakra";

export default function BlogPost({
  title,
  summary,
  slug,
  image,
  publishedAt,
  readingTime,
}): JSX.Element {
  return (
    <NextChakraLinkBox w="100%" href={`/posts/${slug}`} p={6}>
      <Flex>
        <Heading size="md">{title}</Heading>
        <Spacer />
        <Text>{publishedAt}</Text>
      </Flex>
      <Text>{summary}</Text>
    </NextChakraLinkBox>
  );
}
