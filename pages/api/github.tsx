export default async (_, res) => {
  const userResponse = await fetch(
    `https://${process.env.GITHUB_CLIENT}:${process.env.GITHUB_SECRET}@api.github.com/users/sebasptsch`
  );
  const userReposResponse = await fetch(
    `https://${process.env.GITHUB_CLIENT}:${process.env.GITHUB_SECRET}@api.github.com/users/sebasptsch/repos?per_page=100`
  );

  const user = await userResponse.json();
  const repositories = await userReposResponse.json();
  const repos = repositories.length;

  const mine: Array<any> = repositories.filter((repo) => !repo.fork);
  const stars = mine.reduce((accumulator, repository) => {
    return accumulator + repository["stargazers_count"];
  }, 0);

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );

  return res.status(200).json({
    followers: user.followers,
    stars,
    repos,
  });
};
