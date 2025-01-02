import { useQuery } from "@tanstack/react-query";
import { TABLE_QUERY_KEY } from "@/constants";
import { getCandleData } from "../api/getCandleData";

export const useCandleData = (ticker: string, chartType: string) => {
  return useQuery({
    queryKey: [TABLE_QUERY_KEY.CANDLE_DATA, ticker, chartType], // chartType 추가
    queryFn: () => getCandleData(ticker, chartType), // chartType 전달
  });
};
