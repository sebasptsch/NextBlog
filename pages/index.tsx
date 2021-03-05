import {
  Box,
  Center, Divider, Heading, HStack, IconButton, Image as ChakraImage, Stack, Text
} from "@chakra-ui/react";
import { useRouter } from 'next/router';
import React from "react";
import { FaGithub, FaTwitter } from 'react-icons/fa';
import Layout from "../components/Layout";
import { NextChakraLink } from "../components/NextChakraLink";

export default function Home() {
  const router = useRouter()
  return (
    <Layout>
      <Stack divider={<Divider />}>
        <Center>
          <Box
            overflow="hidden"
            borderRadius="full"
            w={300}
            h={300}
          >
            <ChakraImage src="/avatar.jpg" layout="fill" objectFit="contain" />
          </Box>
        </Center>
        <Box textAlign="center">
          <Heading as="h1" mt={2} mb={2}>
            Sebastian Pietschner
        </Heading>
          <Text as="h2">
            A blog and personal accounting of my personal projects and
            experiences.
        </Text>
        </Box>
        <HStack spacing={10} justify="center" m={5}>
          <IconButton aria-label="twitter" icon={<FaTwitter />} as={NextChakraLink} href={"https://twitter.com/sebasptsch"} />
          <IconButton aria-label="github" icon={<FaGithub />} as={NextChakraLink} href={"https://github.com/sebasptsch/"} />
        </HStack>
      </Stack>

    </Layout>
  );
}
