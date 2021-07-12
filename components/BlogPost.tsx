import { Flex, Spacer, Text } from "@chakra-ui/layout";
import { Heading, Tag } from "@chakra-ui/react";
import React from "react";
import { NextChakraLinkBox } from "./NextChakra";

export default function BlogPost({
  title,
  summary,
  tag,
  slug,
  image,
  publishedAt,
  readingTime,
  ...props
}): JSX.Element {
  return (
    <NextChakraLinkBox w="100%" href={`/posts/${slug}`} p={6} {...props}>
      <Flex>
        <Heading size="md">{title}</Heading>{" "}
        <Tag ml={2}>{tag ? tag : "Post"}</Tag>
        <Spacer />
        <Text>{publishedAt}</Text>
      </Flex>

      <Text>{summary}</Text>
    </NextChakraLinkBox>
  );
}
