import axios from "axios";
import { URL } from "@/constants";

interface ChartData {
  time: string; // 날짜 형식: 'YYYY-MM-DD'
  open: number;
  close: number;
  high: number;
  low: number;
}

interface RawData {
  stockCode: string;
  chartType: string;
  data: RawDataEntry[];
}

interface RawDataEntry {
  date: string;
  time: string | null;
  openPrice: string;
  closePrice: string;
  highPrice: string;
  lowPrice: string;
  totalVolume: string;
  totalPrice: string;
}

export const getCandleData = async (
  ticker: string,
  chartType: string
): Promise<ChartData[]> => {
  const response = await axios.get<RawData>(
    `${URL}/stock-charts?stockCode=${ticker}&chartType=${chartType}&startDate=2024-01-01&endDate=2024-11-30`
  );

  const rawData = response.data.data;

  return rawData.map((item) => ({
    time: item.date,
    open: parseFloat(item.openPrice),
    close: parseFloat(item.closePrice),
    high: parseFloat(item.highPrice),
    low: parseFloat(item.lowPrice),
  }));
};
