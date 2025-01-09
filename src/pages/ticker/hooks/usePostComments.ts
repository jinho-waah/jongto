import { useMutation } from "@tanstack/react-query";
import { postComments } from "../api/postComments";
import { PostCommentPayload } from "../types"; // 타입 임포트

export const usePostComment = () => {
  return useMutation({
    mutationFn: (payload: PostCommentPayload) => postComments(payload), // API 호출
    onSuccess: (data) => {
      console.log("댓글 작성 성공:", data);
    },
    onError: (error) => {
      console.error("댓글 작성 실패:", error);
    },
  });
};
