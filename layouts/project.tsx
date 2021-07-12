import Layout from "@/components/Layout";
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/layout";
import { ArticleJsonLd, NextSeo } from "next-seo";
import Image from "next/image";

export default function ProjectLayout({ children, frontMatter }) {
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
            publishedTime: "",
          },
          images: frontMatter.image
            ? [
                {
                  url: `https://sebasptsch.dev/${frontMatter.image}`,
                },
              ]
            : undefined,
        }}
      />
      <ArticleJsonLd
        url={`https://sebasptsch.dev/project/${frontMatter.slug}`}
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
        publisherLogo="https://sebasptsch.dev/logo.png"
      />
      <Heading pt="1em" mb="0.5em">
        {frontMatter.title}
      </Heading>
      <Flex pb="0.5em">
        <Center>
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
        <Box position="relative" h="5em">
          <Image src={frontMatter.image} layout="fill" objectFit="contain" />
        </Box>
      ) : null}
      <Divider pb={10} />

      {children}
    </Layout>
  );
}
