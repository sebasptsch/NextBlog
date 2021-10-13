import { query } from ".keystone/api";
import BlogLayout from "@/layouts/blog";
import {
	GetStaticPathsResult,
	GetStaticPropsContext,
	InferGetStaticPropsType
} from "next";
import { getPlaiceholder } from "plaiceholder";

export default function Post({
	post, image
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return <BlogLayout post={post} image={image}></BlogLayout>;
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
	const posts = await query.Post.findMany({
		query: `slug`,
	});

	const paths = posts
		.map((post) => post.slug)
		.filter((slug): slug is string => !!slug)
		.map((slug) => `/post/${slug}`);

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
	const post = await query.Post.findOne({
		where: { slug: params!.slug as string },
		query:
			"id title content { document } image { src width height } published_at summary",
	});
	// console.log({
	// 	...img,
	// 	blurDataURL: base64
	// })
	return {
		props: {
			post,
			image: await getPlaiceholder(post.image.src, { size: 10 })
		}
	};
}
