import GithubRepos from "@/components/metrics/GithubRepos";
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
	const userReposResponse = await fetch(
		`https://${process.env.GITHUB_CLIENT}:${process.env.GITHUB_SECRET}@api.github.com/users/sebasptsch/repos?per_page=100`
	);

	const repositories = await userReposResponse.json();
	// console.log(repositories);
	const mappedRepositories = repositories
		.filter((repo) => !repo.fork)
		.map((repo) => ({
			name: repo.name,
			full_name: repo.full_name,
			description: repo.description,
			url: repo.html_url,
			stars: repo.stargazers_count,
			homepage: repo.homepage,
			language: repo.language,
			archived: repo.archived,
		}));
	return { props: { githubrepos: mappedRepositories } };
}
