import { query } from ".keystone/api";
import BlogLayout from "@/layouts/blog";
import {
	GetStaticPathsResult,
	GetStaticPropsContext,
	InferGetStaticPropsType
} from "next";
import { getPlaiceholder } from "plaiceholder";

export default function Post({
	post
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return <BlogLayout post={post}></BlogLayout>;
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

	const imagePost = async () => {
		const post = await query.Post.findOne({
			where: { slug: params!.slug as string },
			query:
				"id title content { document } image { src width height } published_at summary",
		});

		if (post.image) {
			const { img, base64 } = await getPlaiceholder(post.image.src)
			return {
				...post, image: {
					...img,
					blurDataURL: base64
				}
			}
		} else {
			return post
		}
	}
	// console.log({
	// 	...img,
	// 	blurDataURL: base64
	// })
	return {
		props: {
			post: await imagePost()

		}
	};
}
