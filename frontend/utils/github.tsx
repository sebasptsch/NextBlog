import axios from "axios";

export async function getRepositories() {
    const userReposResponse = await axios(
        `https://${process.env.GITHUB_CLIENT}:${process.env.GITHUB_SECRET}@api.github.com/users/sebasptsch/repos?per_page=100`
    );

    const repositories = await userReposResponse.data;
    // console.log(repositories);
    return repositories
        .filter((repo) => !repo.fork)
        .map(({ name, full_name, description, html_url, stargazers_count, homepage, language, archived }) => ({
            name,
            full_name,
            description,
            url: html_url,
            stars: stargazers_count,
            homepage,
            language,
            archived
        }));
}

export async function getStats() {
    const userResponse = await axios(
        `https://${process.env.GITHUB_CLIENT}:${process.env.GITHUB_SECRET}@api.github.com/users/sebasptsch`
    );
    const userReposResponse = await axios(
        `https://${process.env.GITHUB_CLIENT}:${process.env.GITHUB_SECRET}@api.github.com/users/sebasptsch/repos?per_page=100`
    );

    const user = userResponse.data;
    const repositories = userReposResponse.data;
    const repos = repositories.length;

    const mine: Array<any> = repositories.filter((repo) => !repo.fork);
    const stars = mine.reduce((accumulator, repository) => {
        return accumulator + repository["stargazers_count"];
    }, 0);

    return {
        followers: user.followers,
        stars,
        repos,
    }
}