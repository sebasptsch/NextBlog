import { Flex, Spacer, Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import moment from "moment";
import { NextChakraLinkBox } from "./NextChakra";

export default function BlogPost({
  title,
  summary,
  slug,
  image,
  published_at,
  ...props
}: any): JSX.Element {
  return (
    <NextChakraLinkBox w="100%" href={`/post/${slug}`} p={6} {...props}>
      <Flex>
        <Heading size="md">{title}</Heading>
        <Spacer />
        <Text>{moment(published_at).format("MMM Do YYYY")}</Text>
      </Flex>

      <Text>{summary}</Text>
    </NextChakraLinkBox>
  );
}
