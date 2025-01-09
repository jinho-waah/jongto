import axios from "axios";
import { Reply } from "../types";
import { URL } from "@/constants";

export const getReplies = async (parentId: number): Promise<Reply[]> => {
  const response = await axios.get(`${URL}/comments/${parentId}`);
  return response.data;
};
