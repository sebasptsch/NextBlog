import {
  Alert,
  Box,
  Code,
  Heading,
  Image,
  OrderedList,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";

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
