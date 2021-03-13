import { Box, Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import Image from "next/image";
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
      {image ? (
        <Box
          style={{
            position: "relative",
            width: "100%",
            height: "20em",
          }}
          borderRadius="10px"
        >
          <Image src={image} layout="fill" objectFit="cover" />
        </Box>
      ) : null}
      <Box p={4}>
        <Heading size="md">{title}</Heading>
        <Text>{summary}</Text>
      </Box>
    </NextChakraLinkBox>
  );
}
