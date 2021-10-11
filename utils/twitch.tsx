import axios from "axios";

const {
	TWITCH_BEARER: bearer,
	TWITCH_CLIENT_ID: client_id,
	TWITCH_BROADCASTER_ID: broadcaster_id,
	TWITCH_CLIENT_SECRET: client_secret,
} = process.env;

const getAccessToken = async () => {
	const response = await axios(
		`https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`,
		{
			method: "POST",
		}
	);
	return response.data;
};

export const getTwitchFollowers = async (after?) => {
	const { access_token } = await getAccessToken();
	return axios(`https://api.twitch.tv/helix/users/follows`, {
		headers: {
			Authorization: `Bearer ${access_token}`,
			"Client-Id": client_id,
		},
		params: {
			to_id: broadcaster_id,
			after,
		},
	});
};

export const getTwitchStreams = async (after?) => {
	const { access_token } = await getAccessToken();
	return axios(`https://api.twitch.tv/helix/streams`, {
		headers: {
			Authorization: `Bearer ${access_token}`,
			"Client-Id": client_id,
		},
		params: {
			user_id: broadcaster_id,
			after,
		},
	});
};

export const getTwitchChannelInfo = async () => {
	const { access_token } = await getAccessToken();
	return axios(`https://api.twitch.tv/helix/users?id=${broadcaster_id}`, {
		headers: {
			Authorization: `Bearer ${access_token}`,
			"Client-Id": client_id,
		},
	});
};

export const getTwitchVideos = async (after?) => {
	const { access_token } = await getAccessToken();
	return axios(`https://api.twitch.tv/helix/videos`, {
		headers: {
			Authorization: `Bearer ${access_token}`,
			"Client-Id": client_id,
		},
		params: {
			user_id: broadcaster_id,
			after,
		},
	});
};

export const getTwitchClips = async (after?) => {
	const { access_token } = await getAccessToken();
	return axios(`https://api.twitch.tv/helix/clips`, {
		headers: {
			Authorization: `Bearer ${access_token}`,
			"Client-Id": client_id,
		},
		params: {
			broadcaster_id: broadcaster_id,
			after: after,
		},
	});
};
