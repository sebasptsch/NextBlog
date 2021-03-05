import { Box, Center, Divider, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Box m={10} textAlign="center">
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
