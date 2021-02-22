import {
  Alert,
  Code,
  Divider,
  Heading,
  ListItem,
  OrderedList,
  Tag,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { BlogJsonLd, NextSeo } from "next-seo";
import Image from "next/image";
// import highlight from 'rehype-highlight'
import React from "react";
import rehype2react from "rehype-react";
import remark2rehype from "remark-rehype";
import Layout from "../../components/Layout";
import { NextChakraLink } from "../../components/NextChakraLink";
import { fetcher } from "../../utils";
var unified = require("unified");
var parse = require("remark-parse");

const Heading1 = (props) => <Heading size="2xl" as="h1" {...props} />;
const Heading2 = (props) => <Heading size="xl" as="h2" {...props} />;
const Heading3 = (props) => <Heading size="md" as="h3" {...props} />;
const ImageEmbed = (props) => <Image layout="fill" {...props} />;
const Blockquote = (props) => (
  <Alert variant="left-accent" status="info" {...props} />
);

export default function BlogPost(props) {
  const { post } = props;
  return (
    <Layout>
      <NextSeo
        title={`${post.title} | Seb's Blog`}
        description={post.excerpt}
        openGraph={{
          url: `https://sebasptsch.dev/posts/${post.slug}`,
          title: post.title,
          description: post.description,
          images: post.cover
            ? [
                {
                  url: `https://blog.sebasptsch.dev${post.cover?.url}`,
                  width: post.cover.width,
                  height: post.cover.height,
                  alt: post.cover.alternativeText,
                },
              ]
            : null,
          site_name: "Seb's Blog",
        }}
        twitter={{
          handle: `${post.author.handle}`,
          site: `@sebasptsch`,
          cardType: post.cover ? "summary_large_image" : "summary_large",
        }}
      />
      <BlogJsonLd
        url={`https://sebasptsch.dev/posts/${post.slug}`}
        title={post.title}
        images={
          post.cover ? [`https://blog.sebasptsch.dev${post.cover?.url}`] : []
        }
        dateModified={post.updated_at}
        datePublished={post.published_at}
        description={post.excerpt}
        authorName={"Sebastian Pietschner"}
      />
      <Heading size="2xl">{post.title}</Heading>

      <Text m={2} key={"author" + post.author.id}>
        <NextChakraLink href={`/authors/${post.author.slug}`}>
          {post.author.name + " " + `(${post.author.handle})`}
        </NextChakraLink>
      </Text>

      {post.tags.map((tag) => (
        <Tag m={2} key={"tag" + tag.id}>
          <a href={`/tags/${tag.slug}`}>{tag.tag}</a>
        </Tag>
      ))}
      <br />
      <Divider />
      <br />
      <div>
        {
          unified()
            .use(parse)
            .use(remark2rehype)
            .use(rehype2react, {
              createElement: React.createElement,
              components: {
                h3: Heading3,
                h2: Heading2,
                h1: Heading1,
                ol: OrderedList,
                ul: UnorderedList,
                li: ListItem,
                inlineCode: Code,
                code: Code,
                blockquote: Blockquote,
                // img: Image
              },
            })
            .processSync(post.content).result
        }
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  // `getStaticProps` is invoked on the server-side,
  // so this `fetcher` function will be executed on the server-side.
  const { slug } = context.params;
  const posts = await fetcher(`/posts?slug=${slug}`);
  // const html = unified().use(markdown).use(html).process(posts[0].content);
  return { props: { post: posts[0], slug } };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetcher("/posts");
  const posts = await res;
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}
