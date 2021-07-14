import {
  Alert,
  Divider,
  Heading,
  ListItem,
  OrderedList,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { NextChakraLink } from "./NextChakra";

const Heading1 = (props) => (
  <>
    <Heading
      size="xl"
      as="h1"
      mt={"2em"}
      style={{
        scrollMarginTop: "8em",
      }}
      {...props}
    />
    <Divider mb={"1em"} />
  </>
);
const Heading2 = (props) => (
  <>
    <Heading
      size="lg"
      as="h2"
      mt={"2em"}
      style={{
        scrollMarginTop: "8em",
      }}
      {...props}
    />
    <Divider mb={"1em"} />
  </>
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

const CustomImage = (props) => <img {...props}></img>;

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
  table: Table,
  thead: Thead,
  tr: Tr,
  th: Th,
  tbody: Tbody,
  td: Td,
  img: CustomImage,
};

export default MDXComponents;
