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
} from "@chakra-ui/react";
import remark2rehype from "remark-rehype";
import rehype2react from "rehype-react";
import React from "react";
import Link from "next/link";
import toc from "rehype-toc";
import slug from "rehype-slug";

const Heading1 = (props) => <Heading size="xl" {...props} />;
const Heading2 = (props) => <Heading size="md" {...props} />;
const Heading3 = (props) => <Heading size="sm" {...props} />;

export default function BlogPost(props) {
  const { post } = props;
  return (
    <>
      <h1>{post.title}</h1>
      <div>
        {
          unified()
            .use(parse)
            .use(remark2rehype)
            .use(slug)
            .use(toc)
            .use(rehype2react, {
              createElement: React.createElement,
              components: {
                p: Text,
                h3: Heading3,
                h2: Heading2,
                h1: Heading1,
                ol: OrderedList,
                li: ListItem,
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
