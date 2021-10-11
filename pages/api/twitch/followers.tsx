import { getTwitchFollowers } from "@/utils/twitch";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { data: response } = await getTwitchFollowers(req.query.after);

	const { total, data: followers, pagination } = response;
	const reducedFollowers = followers.map((f) => f.from_name);

	res.setHeader(
		"Cache-Control",
		"public, s-maxage=86400, stale-while-revalidate=43200"
	);

	return res
		.status(200)
		.json({ total, followers: reducedFollowers, pagination });
};
