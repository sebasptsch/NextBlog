import Layout from "@/components/Layout";
import { Divider, Heading } from "@chakra-ui/layout";
import { NextSeo } from "next-seo";

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Layout>
      <NextSeo title={frontMatter.title} description={frontMatter.summary} />
      <Heading textAlign="center">{frontMatter.title}</Heading>
      <Divider pb={10} />
      {children}
    </Layout>
  );
}
