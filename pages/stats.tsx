import NowPlaying from "@/components/metrics/CurrentlyPlaying";
import GitHub from "@/components/metrics/Github";
import {
  Box,
  Container,
  Divider,
  Heading,
  StatGroup,
  Text,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import React from "react";
import Layout from "../components/Layout";

export default function Stats() {
  return (
    <Layout>
      <NextSeo title={`Stats | Seb's Blog`} />
      <Box mt={10} mb={10}>
        <Heading as="h1" size="2xl">
          Stats
        </Heading>
        <Divider mt={5} mb={5} />
        <Container as="footer" maxW="container.md">
          <Text>Just some random stats using NextJS API routes.</Text>
          <br />
          <StatGroup
            textAlign="center"
            borderRadius={"12px"}
            borderWidth={"1px"}
            p={2}
            m={1}
          >
            <GitHub followers />
            <GitHub stars />
            <GitHub repos />
            <NowPlaying />
            {/* <Followers /> */}
          </StatGroup>
        </Container>
      </Box>
    </Layout>
  );
}
