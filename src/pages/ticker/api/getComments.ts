import { URL } from "@/constants";
import axios from "axios";
import { Comment } from "../types";

export const getComments = async (stockCode: string): Promise<Comment[]> => {
  const response = await axios.get(
    `${URL}/api/comments?stockCode=${stockCode}`
  );
  console.log(response);
  return response.data;
};
