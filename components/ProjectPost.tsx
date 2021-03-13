import { Box, Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import React from "react";
import { NextChakraLinkBox } from "./NextChakraLink";

export default function ProjectPost({ title, summary, slug }): JSX.Element {
  return (
    <NextChakraLinkBox
      borderWidth="1px"
      borderRadius="10px"
      overflow="hidden"
      w="100%"
      href={`/projects/${slug}`}
    >
      <Box p={4}>
        <Heading size="md">{title}</Heading>
        <Text>{summary}</Text>
      </Box>
    </NextChakraLinkBox>
  );
}
