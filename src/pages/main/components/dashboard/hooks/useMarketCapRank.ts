import { useQuery } from "@tanstack/react-query";
import { getMarketCapRank } from "@/api/getMarketCapRank";
import { TABLE_QUERY_KEY } from "@/constants";

export const useMarketCapRank = (limit: number) => {
  return useQuery({
    queryKey: [TABLE_QUERY_KEY.MARKET_CAP_RANK, limit],
    queryFn: () => getMarketCapRank(limit),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};
