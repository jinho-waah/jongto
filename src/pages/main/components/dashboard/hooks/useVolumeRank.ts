import { useQuery } from "@tanstack/react-query";
import { getVolumesRank } from "@/api/getVolumesRank";
import { TABLE_QUERY_KEY } from "@/constants";

export const useVolumeRank = (limit: number) => {
  return useQuery({
    queryKey: [TABLE_QUERY_KEY.VOLUME_RANK, limit],
    queryFn: () => getVolumesRank(limit),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};
