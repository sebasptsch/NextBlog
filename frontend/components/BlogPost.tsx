import { Flex, Spacer, Text } from "@chakra-ui/layout";
import { Box, Heading, HStack, Tag } from "@chakra-ui/react";
import moment from "moment";
import Link from "next/link";

export default function BlogPost({
  title,
  summary,
  slug,
  image,
  published_at,
  tags,
  ...props
}: any): JSX.Element {
  return (
    <Box w="100%" p={6} {...props}>
      <Link href={`/post/${slug}`}>
        <a>
          <Flex>
            <Heading size="md">{title}</Heading>
            <Spacer />
            <Text>{moment(published_at).format("MMM Do YYYY")}</Text>
          </Flex>
          {tags ? (
            <HStack spacing={4} py={1}>
              {tags.map((tag) => (
                <Link href={`/tag/${tag.slug}`}>
                  <a>
                    <Tag key={tag.id}>{tag.name}</Tag>
                  </a>
                </Link>
              ))}
            </HStack>
          ) : null}
          <Text>{summary}</Text>
        </a>
      </Link>
    </Box>
  );
}
