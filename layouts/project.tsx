import Layout from "@/components/Layout";
import { Box, Divider, Heading } from "@chakra-ui/layout";
import { NextSeo } from "next-seo";
import Image from "next/image";

export default function ProjectLayout({ children, frontMatter }) {
  return (
    <Layout>
      <NextSeo title={frontMatter.title} description={frontMatter.summary} />
      <Heading textAlign="center">{frontMatter.title}</Heading>
      {frontMatter.image ? (
        <Box position="relative" h="5em">
          <Image src={frontMatter.image} layout="fill" objectFit="contain" />
        </Box>
      ) : null}
      <Divider pb={10} />

      {children}
    </Layout>
  );
}
