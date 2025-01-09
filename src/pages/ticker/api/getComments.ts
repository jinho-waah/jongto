import { URL } from "@/constants";
import axios from "axios";
import { Comment } from "../types";

export const getComments = async (stockCode: string): Promise<Comment[]> => {
  const response = await axios.get(`${URL}/comments?stockCode=${stockCode}`);
  return response.data;
};
