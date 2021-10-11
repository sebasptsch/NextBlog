import { getTwitchVideos } from "@/utils/twitch";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { data: response } = await getTwitchVideos(req.query.after);

	res.setHeader(
		"Cache-Control",
		"public, s-maxage=86400, stale-while-revalidate=43200"
	);

	const { data: videos, pagination } = response;

	const reducedVideos = videos.map((video) => ({
		title: video.title,
		thumbnail: video.thumbnail_url,
		url: video.url,
		duration: video.duration,
		created_at: video.created_at,
		type: video.type,
	}));

	return res.status(200).json({ pagination, reducedVideos });
};
