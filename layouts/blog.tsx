import Layout from "@/components/Layout";
import { componentBlockRenderers, renderers } from "@/utils/renderers";
import { Box, Center, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { DocumentRenderer } from "@keystone-next/document-renderer";
import moment from "moment";
import { ArticleJsonLd, NextSeo } from "next-seo";
import Image from "next/image";
import { IGetPlaiceholderReturn } from "plaiceholder";

export default function BlogLayout({ post, image }: {
	image: IGetPlaiceholderReturn
	post: Record<string, any>
}) {
	console.log(image)
	return (
		<Layout>
			<NextSeo
				title={post.title}
				description={post.summary}
				titleTemplate="%s | Seb's Blog"
				openGraph={{
					title: post.title,
					description: post.summary,
					type: "article",
					article: {
						publishedTime: post.published_at,
					},
					images: post.image
						? [
							{
								url: `https://sebasptsch.dev${post.image.src}`,
							},
						]
						: undefined,
				}}
			/>
			<ArticleJsonLd
				url={`https://sebasptsch.dev/post/${post.slug}`}
				title={post.title}
				images={
					post.image ? [`https://sebasptsch.dev${post.image.src}`] : undefined
				}
				datePublished={post.published_at}
				authorName="Sebastian Pietschner"
				description={post.summary}
				publisherName="Seb's Blog"
				publisherLogo="https://sebasptsch.dev/logo.png"
			/>

			<Heading pt="1em" mb="0.5em">
				{post.title}
			</Heading>
			<Flex pb="0.5em">
				<Center>
					Sebastian Pietschner /{" "}
					{moment(post.published_at).format("MMM Do YYYY")}
				</Center>
				<Spacer />
				{/* <Center>
          <Text textAlign="center" size="sm" fontWeight="semibold">
            {frontMatter.readingTime.text}
          </Text>
        </Center> */}
			</Flex>

			{image ? (
				<Box
					style={{
						position: "relative",
						width: "100%",
						height: "20em",
					}}
					overflow="hidden"
					borderRadius="10px"
					pt="1em"
					pb="2em"
				>
					<Image
						src={image.img.src}
						width={image.img.width}
						height={image.img.height}
						blurDataURL={image.base64}
						objectFit="cover"
						placeholder="blur"
					/>
				</Box>
			) : null}

			<DocumentRenderer
				document={post.content.document}
				renderers={renderers}
				componentBlocks={componentBlockRenderers}
			/>
		</Layout>
	);
}
