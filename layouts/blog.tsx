import Layout from "@/components/Layout";
import { Box, Divider, Heading } from "@chakra-ui/layout";
import { NextSeo } from "next-seo";
import Image from "next/image";

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Layout>
      <NextSeo title={frontMatter.title} description={frontMatter.summary} />
      <Heading textAlign="center">{frontMatter.title}</Heading>
      {frontMatter.image ? (
        <Box
          style={{
            position: "relative",
            width: "100%",
            height: "20em",
          }}
          overflow="hidden"
          borderRadius="10px"
        >
          <Image src={frontMatter.image} layout="fill" objectFit="cover" />
        </Box>
      ) : null}
      <Divider pb={10} />

      {children}
    </Layout>
  );
}
