import { useEffect } from "react";
import { createChart, IChartApi } from "lightweight-charts";
import { useCandleData } from "./hooks/useCandleData";

export default function Chart({
  ticker,
  chartType,
}: {
  ticker: string;
  chartType: string;
}) {
  const {
    data: chartData,
    isLoading,
    isError,
  } = useCandleData(ticker, chartType);

  useEffect(() => {
    if (!chartData || isLoading || isError) return;

    const chartContainer = document.getElementById("chart");
    if (!chartContainer) return;

    // 초기화 전에 기존 차트 정리
    chartContainer.innerHTML = "";

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
      },
    });

    const candleSeries = chart.addCandlestickSeries({
      upColor: "#4caf50",
      downColor: "#f44336",
      borderDownColor: "#f44336",
      borderUpColor: "#4caf50",
      wickDownColor: "#f44336",
      wickUpColor: "#4caf50",
    });

    candleSeries.setData(chartData);

    // Clean-up: 컴포넌트가 언마운트되거나 상태 변경 시 차트를 제거
    return () => {
      chart.remove();
    };
  }, [chartData, isLoading, isError, chartType]);

  if (isLoading) return <p>Loading chart...</p>;
  if (isError) return <p>Error loading chart.</p>;

  return <div id="chart" style={{ width: "100%", height: "100%" }} />;
}
