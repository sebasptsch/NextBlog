import { Box, Flex, Heading, Link, Spacer, Text } from "@chakra-ui/react";
import React from "react";

export default function RepoBox({ repo }) {
  return (
    <Box p={4} borderWidth="1px" borderRadius="12px">
      <Flex>
        <Heading size="md">
          <a href={repo.url}>{repo.name}</a>
        </Heading>
        <Spacer />
        {repo.homepage ? (
          <Link href={`${repo.homepage}`}>Homepage/Demo</Link>
        ) : null}
      </Flex>

      <Text>{repo.description}</Text>
    </Box>
  );
}
