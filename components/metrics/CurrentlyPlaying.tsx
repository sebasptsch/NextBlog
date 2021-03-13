import fetcher from "@/utils/fetcher";
import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/stat";
import useSWR from "swr";

export default function NowPlaying(props) {
  const { data } = useSWR("/api/now-playing", fetcher);

  return (
    <Stat {...props}>
      <StatLabel>{`Spotify`}</StatLabel>
      <StatNumber as="a" href={data?.songUrl}>
        {data?.isPlaying ? data?.title : "Not Playing"}
      </StatNumber>
      <StatHelpText>{data?.artist}</StatHelpText>
    </Stat>
  );
}
