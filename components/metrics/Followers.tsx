import fetcher from "@/utils/fetcher";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import milify from "millify";
import React from "react";
import useSWR from "swr";

export default function Followers() {
  const { data } = useSWR("/api/twitch/followers", fetcher);

  return (
    <Stat>
      <StatLabel>Twitch Followers</StatLabel>
      <StatNumber>{data && milify(data.total)}</StatNumber>
    </Stat>
  );
}
