import axios from "axios";
import { PostCommentPayload } from "../types";
import { URL } from "@/constants";

export const postComments = async (
  payload: PostCommentPayload
): Promise<void> => {
  console.log("payload", payload);
  try {
    const response = await axios.post(`${URL}/comments`, payload, {
      headers: {
        "Content-Type": "application/json", // JSON 형식 명시
      },
    });
    console.log("댓글 작성 성공:", response.data);
  } catch (error) {
    console.error("댓글 작성 실패:", error);
    throw error; // 에러를 호출한 곳으로 전달
  }
};
