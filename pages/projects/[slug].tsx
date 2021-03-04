import {
  Alert,
  Box,
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
import {
  CustomParagraph,
  Heading1,
  Heading2,
  Heading3,
  ImageEmbed,
  Blockquote,
} from "../../utils/customElements";
import React from "react";
import rehype2react from "rehype-react";
import remark2rehype from "remark-rehype";
import Layout from "../../components/Layout";
import { fetcher } from "../../utils";
var unified = require("unified");
var parse = require("remark-parse");

export default function BlogPost(props) {
  const { project } = props;
  // console.log(post.comments);
  return (
    <Layout>
      <NextSeo
        title={`${project.title} | Seb's Blog`}
        description={project.excerpt}
        openGraph={{
          url: `https://sebasptsch.dev/projects/${project.slug}`,
          title: project.title,
          description: project.description,
          images: project.cover
            ? [
                {
                  url: `https://blog.sebasptsch.dev${project.cover?.url}`,
                  width: project.cover.width,
                  height: project.cover.height,
                  alt: project.cover.alternativeText,
                },
              ]
            : null,
          site_name: "Seb's Blog",
        }}
        twitter={{
          handle: `@sebasptsch`,
          site: `@sebasptsch`,
          cardType: project.cover ? "summary_large_image" : "summary_large",
        }}
      />
      <BlogJsonLd
        url={`https://sebasptsch.dev/projects/${project.slug}`}
        title={project.title}
        images={
          project.cover
            ? [`https://blog.sebasptsch.dev${project.cover?.url}`]
            : []
        }
        dateModified={project.updated_at}
        datePublished={project.published_at}
        description={project.excerpt}
        authorName={"Sebastian Pietschner"}
      />
      <Heading size="2xl">{project.title}</Heading>
      <br />
      {project.cover ? (
        <Box
          style={{
            position: "relative",
            width: "100%",
            height: "20em",
          }}
          overflow="hidden"
          borderRadius="10px"
          borderWidth="1px"
        >
          <Image
            alt={project.cover.alternativeText}
            src={`https://blog.sebasptsch.dev` + project.cover.url}
            layout="fill"
            objectFit="cover"
          />
        </Box>
      ) : null}
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
                img: ImageEmbed,
                p: CustomParagraph,
              },
            })
            .processSync(project.content).result
        }
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  // `getStaticProps` is invoked on the server-side,
  // so this `fetcher` function will be executed on the server-side.
  const { slug } = context.params;
  const projects = await fetcher(`/projects?slug=${slug}`);
  // const html = unified().use(markdown).use(html).process(posts[0].content);
  return { props: { project: projects[0], slug } };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetcher("/projects");
  const projects = await res;
  // Get the paths we want to pre-render based on posts
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));
  return { paths, fallback: false };
}
