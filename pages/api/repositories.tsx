import { getRepositories } from "@/utils/github";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	res.setHeader(
		"Cache-Control",
		"public, s-maxage=1200, stale-while-revalidate=600"
	);

	return res.status(200).json(await getRepositories());
};
