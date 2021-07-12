import {
  Alert,
  Divider,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { NextChakraLink } from "./NextChakra";

const Heading1 = (props) => (
  <Heading
    size="2xl"
    as="h1"
    mt={"2em"}
    mb={"1em"}
    style={{
      scrollMarginTop: "8em",
    }}
    {...props}
  />
);
const Heading2 = (props) => (
  <Heading
    size="xl"
    as="h2"
    mt={"2em"}
    mb={"1em"}
    style={{
      scrollMarginTop: "8em",
    }}
    {...props}
  />
);
const Heading3 = (props) => (
  <Heading
    size="md"
    as="h3"
    mt={"2em"}
    mb={"1em"}
    style={{
      scrollMarginTop: "8em",
    }}
    {...props}
  />
);

const CustomParagraph = (props) => (
  <Text mt={2.5} mb={2.5} lineHeight={1.75} fontSize="1rem" {...props} />
);
const Blockquote = (props) => (
  <Alert variant="left-accent" status="info" mt={2} mb={2} {...props} />
);
const Link = (props) => {
  const { colorMode } = useColorMode();
  var linkColor = colorMode === "dark" ? "blue.300" : "blue.600";
  return (
    <NextChakraLink {...props} color={linkColor} textDecoration="underline" />
  );
};

const PreBox = (props) => (
  <pre
    style={{
      borderRadius: "10px",
      borderWidth: "1px",
    }}
    {...props}
  />
);

const MDXComponents = {
  h3: Heading3,
  h2: Heading2,
  h1: Heading1,
  ol: OrderedList,
  ul: UnorderedList,
  li: ListItem,
  blockquote: Blockquote,
  p: CustomParagraph,
  a: Link,
  pre: PreBox,
  hr: Divider,
  Image,
};

export default MDXComponents;
