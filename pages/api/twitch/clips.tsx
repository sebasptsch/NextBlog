import { getTwitchClips } from "@/utils/twitch";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { data } = await getTwitchClips(req.query.after);

	res.setHeader(
		"Cache-Control",
		"public, s-maxage=86400, stale-while-revalidate=43200"
	);

	const clipList = data.data.map((clip) => ({
		thumbnail: clip.thumbnail_url,
		title: clip.title,
		embed: clip.embed_url,
		creator: {
			name: clip.creator_name,
			id: clip.creator_id,
		},
	}));
	//   console.log(data);
	return res.status(200).json({ clips: clipList, pagination: data.pagination });
};
