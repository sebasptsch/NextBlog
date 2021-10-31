import { Flex, Spacer, Text } from "@chakra-ui/layout";
import { Box, Heading } from "@chakra-ui/react";
import moment from "moment";
import Link from 'next/link';

export default function BlogPost({
	title,
	summary,
	slug,
	image,
	published_at,
	...props
}: any): JSX.Element {
	return (

		<Box w="100%" p={6} {...props}>
			<Link href={`/post/${slug}`}>
				<a>
					<Flex>
						<Heading size="md">{title}</Heading>
						<Spacer />
						<Text>{moment(published_at).format("MMM Do YYYY")}</Text>
					</Flex>

					<Text>{summary}</Text>
				</a>
			</Link>
		</Box>

	);
}
