import Layout from "@/components/Layout";
import { Avatar } from "@chakra-ui/avatar";
import { Box, Center, Flex, Heading, Spacer, Text } from "@chakra-ui/layout";
import { ArticleJsonLd, NextSeo } from "next-seo";
import Image from "next/image";

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Layout>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.summary}
        titleTemplate="%s | Seb's Blog"
        openGraph={{
          title: frontMatter.title,
          description: frontMatter.summary,
          type: "article",
          article: {
            publishedTime: frontMatter.publishedAt,
          },
          images: [
            frontMatter.image
              ? {
                  url: `https://sebasptsch.dev/${frontMatter.image}`,
                }
              : null,
          ],
        }}
      />
      <ArticleJsonLd
        url={`https://sebasptsch.dev/blog/${frontMatter.slug}`}
        title={frontMatter.title}
        images={
          frontMatter.image
            ? [`https://sebasptsch.dev/${frontMatter.image}`]
            : []
        }
        datePublished={frontMatter.publishedAt}
        authorName="Sebastian Pietschner"
        description={frontMatter.summary}
        publisherName="Seb's Blog"
        publisherLogo="https://sebasptsch.dev/avatar.jpg"
      />

      <Heading pt="1em" mb="0.5em">
        {frontMatter.title}
      </Heading>
      <Flex pb="0.5em">
        <Center>
          <Avatar
            name="Sebastian Pietschner"
            src="/avatar.jpg"
            size="sm"
            mr="1em"
          />
          Sebastian Pietschner /{" "}
          {new Date(frontMatter.publishedAt).toDateString()}
        </Center>
        <Spacer />
        <Center>
          <Text textAlign="center" size="sm" fontWeight="semibold">
            {frontMatter.readingTime.text}
          </Text>
        </Center>
      </Flex>

      {frontMatter.image ? (
        <Box
          style={{
            position: "relative",
            width: "100%",
            height: "20em",
          }}
          overflow="hidden"
          borderRadius="10px"
          pt="1em"
          pb="2em"
        >
          <Image src={frontMatter.image} layout="fill" objectFit="cover" />
        </Box>
      ) : null}

      {children}
    </Layout>
  );
}
