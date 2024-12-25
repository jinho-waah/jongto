import { useQuery } from "@tanstack/react-query";
import { getLossRateRank } from "@/api/getLossRateRank";
import { TABLE_QUERY_KEY } from "@/constants";

export const useLossRateRank = (limit: number) => {
  return useQuery({
    queryKey: [TABLE_QUERY_KEY.LOSS_RATE_RANK, limit],
    queryFn: () => getLossRateRank(limit),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};
