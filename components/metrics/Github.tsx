import fetcher from "@/utils/fetcher";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/stat";
import format from "comma-number";
import useSWR from "swr";

export default function GitHub(props) {
  const { data } = useSWR("/api/github", fetcher);

  const followers = format(data?.followers);
  const stars = format(data?.stars);
  const link = "https://github.com/sebasptsch";

  return (
    <Stat {...props}>
      <StatLabel>{`Github ${
        props.followers ? "Followers" : props.stars ? "Stars" : ""
      }`}</StatLabel>
      <StatNumber>
        {props.followers ? followers : props.stars ? stars : ""}
      </StatNumber>
    </Stat>
  );
}
