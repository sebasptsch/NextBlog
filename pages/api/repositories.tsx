export default async (_, res) => {
  const userReposResponse = await fetch(
    `https://${process.env.GITHUB_CLIENT}:${process.env.GITHUB_SECRET}@api.github.com/users/sebasptsch/repos?per_page=100`
  );

  const repositories = await userReposResponse.json();

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
    }));

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );

  return res.status(200).json(mappedRepositories);
};
