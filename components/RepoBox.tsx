import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  Spacer,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function RepoBox({ repo }) {
  return (
    <>
      <Box p={4} borderWidth="1px" borderRadius="12px">
        <Flex>
          <Box>
            <Heading size="md">
              <a href={repo.url}>{repo.name}</a>
            </Heading>

            <HStack>
              {repo.language ? (
                <Tag colorScheme="blue">{repo.language}</Tag>
              ) : null}{" "}
              {repo.archived ? <Tag colorScheme="yellow">Archived</Tag> : null}
            </HStack>
            <Text>{repo.description}</Text>
          </Box>
          <Spacer />
          <Divider orientation="vertical" height="auto" m={2} />
          <Stack m={1}>
            {repo.homepage ? (
              <>
                <Link href={`${repo.homepage}`}>Homepage/Demo</Link>
              </>
            ) : null}
            <Link href={`/repos/${repo.name}`}>Readme</Link>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}
