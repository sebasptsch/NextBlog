import fetcher from "@/utils/fetcher";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/stat";
import format from "comma-number";
import useSWR from "swr";

export default function GitHub({
  stars,
  followers,
}: {
  stars?: boolean;
  followers?: boolean;
}) {
  const { data } = useSWR("/api/github", fetcher);

  const followersFormat = format(data?.followers);
  const starsFormat = format(data?.stars);
  const link = "https://github.com/sebasptsch";

  return (
    <Stat>
      <StatLabel>{`Github ${
        followers ? "Followers" : starsFormat ? "Stars" : ""
      }`}</StatLabel>
      <StatNumber>
        {followers ? followersFormat : stars ? starsFormat : ""}
      </StatNumber>
    </Stat>
  );
}
