import fetcher from "@/utils/fetcher";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/stat";
import format from "comma-number";
import useSWR from "swr";

export default function GitHub({
	stars,
	followers,
	repos,
}: {
	stars?: boolean;
	followers?: boolean;
	repos?: boolean;
}) {
	const { data } = useSWR("/api/github", fetcher);

	const followersFormat = format(data?.followers);
	const starsFormat = format(data?.stars);
	const reposFormat = format(data?.repos);

	if (followers) {
		return (
			<Stat>
				<StatLabel>{`Github Followers`}</StatLabel>
				<StatNumber>{data ? followersFormat : "-"}</StatNumber>
			</Stat>
		);
	} else if (stars) {
		return (
			<Stat>
				<StatLabel>{`Github Stars`}</StatLabel>
				<StatNumber>{data ? starsFormat : "-"}</StatNumber>
			</Stat>
		);
	} else if (repos) {
		return (
			<Stat>
				<StatLabel>{`Github Repos`}</StatLabel>
				<StatNumber>{data ? reposFormat : "-"}</StatNumber>
			</Stat>
		);
	}
}
