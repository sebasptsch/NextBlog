import useSWR from "swr";
import { fetcher } from "../utils";
var unified = require("unified");
var parse = require("remark-parse");
import remark2react from "remark-react";
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Divider,
  Box,
  Tag,
  Link,
  Code,
  Alert,
} from "@chakra-ui/react";
import remark2rehype from "remark-rehype";
import rehype2react from "rehype-react";
import highlight from 'rehype-highlight'
import React from "react";

const Heading1 = (props) => <Heading size="3xl" as="h1" {...props} />;
const Heading2 = (props) => <Heading size="2xl" as="h2" {...props} />;
const Heading3 = (props) => <Heading size="xl" as="h3" {...props} />;
const Heading4 = (props) => <Heading size="md" as="h4" {...props} />;
const Heading5 = (props) => <Heading size="sm" as="h5" {...props} />;
const Blockquote = props => <Alert {...props} variant="left-accent" status="info" />

export default function BlogPost(props) {
  const { post } = props;
  return (
    <>
      <Heading1>{post.title}</Heading1>
      {post.authors.map(author => <Text m={2} key={"author" + author.id}><a href={`/author/${author.slug}`}>{author.name + " " + `(${author.handle})`}</a></Text>)}

      {post.tags.map(tag => <Tag m={2} key={"tag" + tag.id}><a href={`/tag/${tag.slug}`}>{tag.tag}</a></Tag>)}
      <br />
      <Divider />
      <br />
      <div>
        {
          unified()
            .use(parse)
            .use(remark2rehype).use(highlight)
            .use(rehype2react, {
              createElement: React.createElement,
              components: {
                p: Text,
                h5: Heading6,
                h4: Heading5,
                h3: Heading4,
                h2: Heading3,
                h1: Heading2,
                ol: OrderedList,
                li: ListItem,
                code: Code,
                blockquote: Blockquote,
              },
            })
            .processSync(post.content).result
        }
      </div>
    </>
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
