import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import React from "react";
import { NextChakraLinkBox } from "./NextChakraLink";

export default function BlogPost({
  title,
  summary,
  slug,
  image,
  publishedAt,
}): JSX.Element {
  return (
    <NextChakraLinkBox
      borderWidth="1px"
      borderRadius="10px"
      overflow="hidden"
      w="100%"
      href={`/posts/${slug}`}
    >
      <Box p={4}>
        <Flex>
          <Heading size="md">{title}</Heading>
          <Spacer />
          <Text>{publishedAt}</Text>
        </Flex>
        <Text>{summary}</Text>
      </Box>
    </NextChakraLinkBox>
  );
}
