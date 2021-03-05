import {
  Alert,
  Box,
  Code,
  Heading,
  OrderedList,
  Text,
  UnorderedList,
  ListItem,
  HStack,
  Tag,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import {
  NextChakraLink,
  NextChakraLinkBox,
} from "../components/NextChakraLink";

export const Heading1 = (props) => (
  <Heading size="2xl" as="h1" mt={2} {...props} />
);
export const Heading2 = (props) => (
  <Heading size="xl" as="h2" mt={2} {...props} />
);
export const Heading3 = (props) => (
  <Heading size="md" as="h3" mt={2} {...props} />
);
export const CustomParagraph = (props) => <Text mt={2} mb={2} {...props} />;
export const ImageEmbed = (props) => (
  <Box
    style={{
      position: "relative",
      width: "100%",
      // height: "20em",
    }}
    overflow="hidden"
    borderRadius="10px"
    borderWidth="1px"
  >
    <Image
      layout="fill"
      objectFit="contain"
      {...props}
      src={`https://blog.sebasptsch.dev${props.src}`}
    />
  </Box>
);
export const Blockquote = (props) => (
  <Alert variant="left-accent" status="info" m={2} {...props} />
);

export const rehypeElement = {
  createElement: React.createElement,
  components: {
    h3: Heading3,
    h2: Heading2,
    h1: Heading1,
    ol: OrderedList,
    ul: UnorderedList,
    li: ListItem,
    inlineCode: Code,
    code: Code,
    blockquote: Blockquote,
    img: ImageEmbed,
    p: CustomParagraph,
  },
};

export function PostCard({ post, url }): JSX.Element {
  return (
    <NextChakraLinkBox
      borderWidth="1px"
      borderRadius="10px"
      overflow="hidden"
      key={post.id}
      w="100%"
      href={url}
    >
      {post?.cover ? (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "20em",
          }}
        >
          <Image
            alt={post.cover.alternativeText}
            src={`https://blog.sebasptsch.dev` + post.cover.url}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ) : null}
      <Box p={4}>
        <Flex>
          <Heading size="md">{post.title}</Heading>
          <Spacer />
          <Text fontWeight="semibold" fontSize="s" ml={2}>
            {new Date(Date.parse(post.published_at)).toLocaleDateString()}{" "}
          </Text>
        </Flex>
        <HStack spacing={4} mt={2} mb={2}>
          {post?.tags?.map((tag) => (
            <Tag
              as={NextChakraLink}
              href={`/tags/${tag.slug}`}
              key={tag.id}
              colorScheme="blue"
            >
              {tag.tag}
            </Tag>
          ))}
        </HStack>
        <Text>{post.excerpt}</Text>
      </Box>
    </NextChakraLinkBox>
  );
}
