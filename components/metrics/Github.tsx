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
        <StatNumber>{followersFormat}</StatNumber>
      </Stat>
    );
  } else if (stars) {
    return (
      <Stat>
        <StatLabel>{`Github Stars`}</StatLabel>
        <StatNumber>{starsFormat}</StatNumber>
      </Stat>
    );
  } else if (repos) {
    return (
      <Stat>
        <StatLabel>{`Github (Public) Repositories`}</StatLabel>
        <StatNumber>{reposFormat}</StatNumber>
      </Stat>
    );
  }
}
