import { useQuery } from "@tanstack/react-query";
import { getReplies } from "../api/getReplies";
import { Reply } from "../types";
import { TABLE_QUERY_KEY } from "@/constants";

interface UseRepliesOptions {
  parentId: number;
}

export const useReplies = ({ parentId }: UseRepliesOptions) => {
  return useQuery<Reply[], Error>({
    queryKey: [TABLE_QUERY_KEY.REPLIES, parentId],
    queryFn: () => getReplies(parentId),
    enabled: !!parentId,
  });
};
