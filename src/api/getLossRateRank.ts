import { URL } from "@/constants";
import axios from "axios";

export const getLossRateRank = async (limit: number) => {
  return await axios.get(`${URL}/api/ranks/fall?limit=${limit}`);
};
