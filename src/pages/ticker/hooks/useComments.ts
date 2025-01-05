import { useQuery } from "@tanstack/react-query";
import { getComments } from "../api/getComments";
import { TABLE_QUERY_KEY } from "@/constants";

export const useComments = (stockCode: string) => {
  return useQuery({
    queryKey: [TABLE_QUERY_KEY.COMMENTS, stockCode],
    queryFn: () => getComments(stockCode),
  });
};
