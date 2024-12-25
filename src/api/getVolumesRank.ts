import { URL } from "@/constants";
import axios from "axios";

export const getVolumesRank = async (limit: number) => {
  return await axios.get(`${URL}/api/ranks/volumes?limit=${limit}`);
};
