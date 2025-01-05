import { useEffect } from "react";
import { createChart, IChartApi } from "lightweight-charts";
import { useCandleData } from "./hooks/useCandleData";

interface ChartProps {
  ticker: string;
  chartType: string;
}

export default function Chart({ ticker, chartType }: ChartProps) {
  const {
    data: chartData,
    isLoading,
    isError,
  } = useCandleData(ticker, chartType);

  useEffect(() => {
    if (!chartData || isLoading || isError) return;

    const chartContainer = document.getElementById("chart");
    if (!chartContainer) return;

    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const chart: IChartApi = createChart(chartContainer, {
      width: chartContainer.clientWidth,
      height: 400,
      layout: {
        background: { color: isDarkMode ? "#1E1E1E" : "#FFFFFF" },
        textColor: isDarkMode ? "#FFFFFF" : "#000000",
      },
      grid: {
        vertLines: { color: isDarkMode ? "#444444" : "#ebebeb" },
        horzLines: { color: isDarkMode ? "#444444" : "#ebebeb" },
      },
      timeScale: {
        borderColor: isDarkMode ? "#888888" : "#cccccc",
        timeVisible: true,
      },
    });

    // 캔들 시리즈 추가
    const candleSeries = chart.addCandlestickSeries({
      upColor: "#4caf50",
      downColor: "#f44336",
      borderUpColor: "#4caf50",
      borderDownColor: "#f44336",
      wickUpColor: "#4caf50",
      wickDownColor: "#f44336",
    });

    // 거래량 히스토그램 시리즈 추가
    const volumeSeries = chart.addHistogramSeries({
      color: "#26a69a",
      priceScaleId: "volume", // 별도의 가격 축 추가
    });

    // 가격 축 설정
    chart.priceScale("volume").applyOptions({
      scaleMargins: {
        top: 0.8, // 거래량이 캔들 시리즈 아래에 표시되도록 설정
        bottom: 0,
      },
    });

    // 캔들 차트 데이터 설정
    candleSeries.setData(
      chartData.map(({ time, open, close, high, low }) => ({
        time,
        open,
        close,
        high,
        low,
      }))
    );

    // 거래량 데이터 설정
    volumeSeries.setData(
      chartData.map(({ time, open, close, totalVolume }) => ({
        time,
        value: totalVolume,
        color: close > open ? "#4caf50" : "#f44336", // 상승/하락에 따라 색상 설정
      }))
    );

    return () => {
      chart.remove(); // 컴포넌트 언마운트 시 차트 제거
    };
  }, [chartData, isLoading, isError]);

  if (isLoading) return <p>Loading chart...</p>;
  if (isError) return <p>Error loading chart.</p>;

  return <div id="chart" style={{ width: "100%", height: "100%" }} />;
}
