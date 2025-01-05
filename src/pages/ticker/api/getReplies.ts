import axios from "axios";
import { Reply } from "../types";

export const getReplies = async (parentId: number): Promise<Reply[]> => {
  const response = await axios.get(`/comments/${parentId}`);
  return response.data;
};
