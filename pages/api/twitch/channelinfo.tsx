import { getTwitchChannelInfo } from "@/utils/twitch";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const response = await getTwitchChannelInfo();

	res.setHeader(
		"Cache-Control",
		"public, s-maxage=86400, stale-while-revalidate=43200"
	);

	return res.status(200).json(response.data.data[0]);
};
