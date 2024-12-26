import { useQuery } from "@tanstack/react-query";
import { getGainRateRank } from "@/api/getGainRateRank";
import { TABLE_QUERY_KEY } from "@/constants";

export const useGainRateRank = (limit: number) => {
  return useQuery({
    queryKey: [TABLE_QUERY_KEY.GAIN_RATE_RANK, limit],
    queryFn: () => getGainRateRank(limit),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};
