import { AspectRatio, Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { NextChakraLinkBox } from "./NextChakra";

export default function ProjectPost({
  title,
  summary,
  slug,
  image,
  publishedAt,
  readingTime,
}) {
  return (
    <NextChakraLinkBox href={`/projects/${slug}`} p={6}>
      <Flex>
        {image ? (
          <AspectRatio
            ratio={1}
            style={{
              width: "6em",
              height: "6em",
            }}
            mr={4}
          >
            <Image src={image} layout="fill" objectFit="contain" />
          </AspectRatio>
        ) : null}
        <Box w="100%">
          <Flex>
            <Heading size="md">{title}</Heading>
            <Spacer />
            <Text>{publishedAt}</Text>
          </Flex>
          <Text>{summary}</Text>
        </Box>
      </Flex>
    </NextChakraLinkBox>
  );
}
