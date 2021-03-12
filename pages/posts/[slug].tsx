import { Box, Heading, HStack, Tag } from "@chakra-ui/react";
import { BlogJsonLd, NextSeo } from "next-seo";
import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout";
import { fetcher } from "../../utils";
import { rehypeElement } from "../../utils/customElements";
var unified = require("unified");
const rehypePrism = require("@mapbox/rehype-prism");

export default function BlogPost(props) {
  const { post } = props;
  // console.log(post.comments);
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
          handle: `@sebasptsch`,
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
      <HStack spacing={2} mt={5} mb={5}>
        {post.tags.map((tag) => (
          <Tag key={"tag" + tag.id} colorScheme="blue">
            <a href={`/tags/${tag.slug}`}>{tag.tag}</a>
          </Tag>
        ))}
      </HStack>

      {post.cover ? (
        <Box
          style={{
            position: "relative",
            width: "100%",
            height: "20em",
          }}
          overflow="hidden"
          borderRadius="10px"
        >
          <Image
            alt={post.cover.alternativeText}
            src={`https://blog.sebasptsch.dev` + post.cover.url}
            layout="fill"
            objectFit="cover"
          />
        </Box>
      ) : null}
      <article>
        {
          unified()
            .use(require("remark-parse"))
            .use(require("remark-rehype"))
            .use(require("rehype-slug"))
            // .use(require("rehype-toc"))
            .use(require("rehype-prism"))
            .use(require("rehype-react"), rehypeElement)
            .processSync(post.content).result
        }
      </article>
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
