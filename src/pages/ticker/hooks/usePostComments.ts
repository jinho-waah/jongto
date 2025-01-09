import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postComments } from "../api/postComments";
import { PostCommentPayload } from "../types"; // 타입 임포트
import { TABLE_QUERY_KEY } from "@/constants";

export const usePostComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: PostCommentPayload) => postComments(payload),
    onSuccess: (data) => {
      console.log("댓글 작성 성공:", data);
      queryClient.invalidateQueries({
        queryKey: [TABLE_QUERY_KEY.COMMENTS],
      });
      queryClient.invalidateQueries({
        queryKey: [TABLE_QUERY_KEY.REPLIES],
      });
    },
    onError: (error) => {
      console.error("댓글 작성 실패:", error);
    },
  });
};
