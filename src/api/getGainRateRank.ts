import { URL } from "@/constants";
import axios from "axios";

export const getGainRateRank = async (limit: number) => {
  return await axios.get(`${URL}/api/ranks/rise?limit=${limit}`);
};
