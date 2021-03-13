import Layout from "@/components/Layout";
import { NextSeo } from "next-seo";

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Layout>
      <NextSeo title={frontMatter.title} description={frontMatter.summary} />
      {children}
    </Layout>
  );
}
