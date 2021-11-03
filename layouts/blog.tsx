import Layout from "@/components/Layout";
import { componentBlockRenderers, renderers } from "@/utils/renderers";
import { Center, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { DocumentRenderer } from "@keystone-next/document-renderer";
import moment from "moment";
import { ArticleJsonLd, NextSeo } from "next-seo";
import Image from "next/image";

export default function BlogLayout({ post }: { post: any }) {
  return (
    <Layout>
      <NextSeo
        title={`${post.title} | Post`}
        description={post.summary}
        titleTemplate="%s | Seb's Blog"
        openGraph={{
          title: post.title,
          description: post.summary,
          type: "article",
          article: {
            publishedTime: post.published_at,
          },
          images: post.image
            ? [
                {
                  url: `${post.image.src}`,
                },
              ]
            : undefined,
        }}
      />
      <ArticleJsonLd
        url={`https://sebasptsch.dev/post/${post.slug}`}
        title={post.title}
        images={post.image ? [`${post.image.src}`] : undefined}
        datePublished={post.published_at}
        authorName={post.author.name}
        description={post.summary}
        publisherName="Seb's Blog"
        publisherLogo="https://sebasptsch.dev/logo.png"
      />

      <Heading pt="1em" mb="0.5em">
        {post.title}
      </Heading>
      <Flex pb="0.5em">
        <Center>
          {post.author.name} / {moment(post.published_at).format("MMM Do YYYY")}
        </Center>
        <Spacer />
        {/* <Center>
          <Text textAlign="center" size="sm" fontWeight="semibold">
            {frontMatter.readingTime.text}
          </Text>
        </Center> */}
      </Flex>

      {post.image ? (
        <Image {...post.image} placeholder="blur" layout="responsive" />
      ) : null}

      <DocumentRenderer
        document={post.content.document}
        renderers={renderers}
        componentBlocks={componentBlockRenderers}
      />
    </Layout>
  );
}
