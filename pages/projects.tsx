import GithubRepos from "@/components/metrics/GithubRepos";
import { getRepositories } from "@/utils/github";
import { Box, Heading } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";

export default function Home({ githubrepos }) {
	return (
		<Layout>
			<NextSeo title={`Projects | Seb's Blog`} />
			<Box mt={10} mb={10}>
				<Heading as="h1" size="2xl">
					Projects
				</Heading>
				<br />
				<GithubRepos initial={githubrepos} />
			</Box>
		</Layout>
	);
}

export async function getServerSideProps() {
	return { props: { githubrepos: await getRepositories() } };
}
