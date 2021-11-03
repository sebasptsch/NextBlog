import fetcher from "@/utils/fetcher";
import { Divider, Heading, Stack } from "@chakra-ui/layout";
import { Stat, StatHelpText, StatNumber } from "@chakra-ui/stat";
import useSWR from "swr";

export default function TopTracks(props) {
	const { data } = useSWR("/api/top-tracks", fetcher);
	const { tracks } = data;
	return (
		<>
			<Heading size="lg">My Top Ten</Heading>
			<Divider />
			<Stack>
				{tracks?.map((track) => (
					<Stat>
						<StatNumber as="a" href={track.songUrl}>
							{track.title}
						</StatNumber>
						<StatHelpText>{track.artist}</StatHelpText>
					</Stat>
				))}
			</Stack>
		</>
	);
}
