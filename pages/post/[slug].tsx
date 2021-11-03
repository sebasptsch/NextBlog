import BlogLayout from "@/layouts/blog";
import {
  PostDocument,
  PostPathsDocument,
  PostPathsQuery,
  PostQuery,
} from "@/utils/gql/query";
import request from "graphql-request";
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
  const { posts }: PostPathsQuery = await request(
    "https://cms.sebasptsch.dev/api/graphql",
    PostPathsDocument
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
    const { post }: PostQuery = await request(
      "https://cms.sebasptsch.dev/api/graphql",
      PostDocument,
      variables
    );

    if (post.image) {
      console.log(post.image, "found image");
      const { img, base64 } = await getPlaiceholder(post.image.src);
      console.log(
        {
          ...post,
          image: {
            ...img,
            blurDataURL: base64,
          },
        },
        "generated image"
      );
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
