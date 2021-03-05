import {
  Avatar,
  Box,
  Center,
  Divider,
  Heading,
  Text,
  Image as ChakraImage,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Center>
        <Box
          mb={5}
          mt={5}
          overflow="hidden"
          borderRadius="full"
          w={300}
          h={300}
        >
          <ChakraImage src="/avatar.jpg" layout="fill" objectFit="contain" />
        </Box>
      </Center>
      <Box mb={5} mt={5} textAlign="center">
        <Heading as="h1" mt={2} mb={2}>
          Sebastian Pietschner
        </Heading>
        <Text as="h2">
          A blog and personal accounting of my personal projects and
          experiences.
        </Text>
      </Box>
      <Divider />
    </Layout>
  );
}
