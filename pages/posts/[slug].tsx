import {
  Alert, Code, Divider, Heading,


  ListItem,

  OrderedList,



  Tag, Text,




  UnorderedList
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
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
      <NextSeo title={`${post.title} | Seb's Blog`} />
      <Heading size="2xl">{post.title}</Heading>
      {post.authors.map((author) => (
        <Text m={2} key={"author" + author.id}>
          <NextChakraLink href={`/authors/${author.slug}`}>
            {author.name + " " + `(${author.handle})`}
          </NextChakraLink>
        </Text>
      ))}

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
                code: "pre",
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

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
