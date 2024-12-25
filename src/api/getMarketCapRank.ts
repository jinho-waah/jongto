import { URL } from "@/constants";
import axios from "axios";

export const getMarketCapRank = async (limit: number) => {
  return await axios.get(`${URL}/api/ranks/market-cap?limit=${limit}`);
};
