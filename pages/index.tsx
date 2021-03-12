import {
  Box,
  Center,
  Heading,
  HStack,
  IconButton,
  Image as ChakraImage,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Layout from "../components/Layout";
import { NextChakraLink } from "../components/NextChakraLink";

export default function Home() {
  return (
    <Layout>
      <NextSeo title={`Seb's Blog`} />
      <Stack>
        <Center>
          <Box overflow="hidden" borderRadius="full" w={300} h={300}>
            <ChakraImage src="/avatar.jpg" layout="fill" objectFit="contain" />
          </Box>
        </Center>
        <Box textAlign="center">
          <Heading as="h1" mt={2} mb={2}>
            Sebastian Pietschner
          </Heading>
          <Text as="h2">
            An index of my projects and experiences in the wider world.
          </Text>
        </Box>
        <HStack spacing={10} justify="center" m={5}>
          <IconButton
            aria-label="twitter"
            icon={<FaTwitter />}
            as={NextChakraLink}
            href={"https://twitter.com/sebasptsch"}
          />
          <IconButton
            aria-label="github"
            icon={<FaGithub />}
            as={NextChakraLink}
            href={"https://github.com/sebasptsch/"}
          />
        </HStack>
      </Stack>
    </Layout>
  );
}
