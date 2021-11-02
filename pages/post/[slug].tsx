import BlogLayout from "@/layouts/blog";
import request, { gql } from "graphql-request";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { getPlaiceholder } from "plaiceholder";

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <BlogLayout post={post}></BlogLayout>;
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const query = gql`
    query Query {
      posts {
        slug
      }
    }
  `;
  const { posts } = await request(
    "https://cms.sebasptsch.dev/api/graphql",
    query
  );

  const paths = posts
    .map((post) => post.slug)
    .filter((slug): slug is string => !!slug)
    .map((slug) => `/post/${slug}`);

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const imagePost = async () => {
    const variables = {
      where: {
        slug: params!.slug as string,
      },
    };
    const query = gql`
      query Query($where: PostWhereUniqueInput!) {
        post(where: $where) {
          slug
          id
          title
          summary
          image {
            src
            width
            height
          }
          published_at
          author {
            name
          }
          tags {
            name
            id
          }
          content {
            document
          }
        }
      }
    `;
    const { post } = await request(
      "https://cms.sebasptsch.dev/api/graphql",
      query,
      variables
    );

    if (post.image) {
      const { img, base64 } = await getPlaiceholder(`${post.image.src}`);
      return {
        ...post,
        image: {
          ...img,
          blurDataURL: base64,
        },
      };
    } else {
      return post;
    }
  };
  return {
    props: {
      post: await imagePost(),
    },
    revalidate: 10,
  };
}
