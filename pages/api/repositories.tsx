import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
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

	res.setHeader(
		"Cache-Control",
		"public, s-maxage=1200, stale-while-revalidate=600"
	);

	return res.status(200).json(mappedRepositories);
};
