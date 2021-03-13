import NowPlaying from "@/components/metrics/CurrentlyPlaying";
import GitHub from "@/components/metrics/Github";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image as ChakraImage,
  Stack,
  StatGroup,
  Text,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Layout from "../components/Layout";

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
          <Button
            aria-label="twitter"
            rightIcon={<FaTwitter />}
            href={"https://twitter.com/sebasptsch"}
            as="a"
          >
            Twitter
          </Button>
          <Button
            aria-label="github"
            rightIcon={<FaGithub />}
            as="a"
            href={"https://github.com/sebasptsch/"}
          >
            Github
          </Button>
        </HStack>
        <StatGroup textAlign="center">
          <GitHub followers />
          <GitHub stars />
          <GitHub repos />
        </StatGroup>
        <StatGroup textAlign="center">
          <NowPlaying />
        </StatGroup>
      </Stack>
    </Layout>
  );
}
