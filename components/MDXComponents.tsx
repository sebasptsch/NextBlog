import {
  Alert,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { NextChakraLink } from "./NextChakraLink";

const Heading1 = (props) => <Heading size="2xl" as="h1" mt={2} {...props} />;
const Heading2 = (props) => <Heading size="xl" as="h2" mt={2} {...props} />;
const Heading3 = (props) => <Heading size="md" as="h3" mt={2} {...props} />;

const Code = (props) => {
  return <code {...props} />;
};

const CustomParagraph = (props) => <Text mt={2} mb={2} {...props} />;
const Blockquote = (props) => (
  <Alert variant="left-accent" status="info" m={2} {...props} />
);
const Link = (props) => (
  <NextChakraLink
    colorScheme="blue"
    {...props}
    isExternal={new URL(props.href).origin !== "https://sebasptsch.dev"}
  />
);

const MDXComponents = {
  h3: Heading3,
  h2: Heading2,
  h1: Heading1,
  ol: OrderedList,
  ul: UnorderedList,
  li: ListItem,
  inlineCode: Code,
  code: Code,
  blockquote: Blockquote,
  p: CustomParagraph,
  a: Link,
  Image,
};

export default MDXComponents;
