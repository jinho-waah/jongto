import { useState } from "react";
import stockData from "./dumbydata";
import { Box } from "@/pages/common/layout/components/box/Box";
import { TabButton } from "./components/tab-button/TabButton";
import { StockTable } from "./components/stock-table/StockTable";
import { TAB_NAME } from "@/constants";

export default function DashBoard() {
  const [activeTab, setActiveTab] = useState("gainTop10");

  return (
    <Box title="주식 시장 TOP 10">
      <div className="flex border-b dark:border-gray-700">
        {Object.entries(TAB_NAME).map(([key, label]) => (
          <TabButton
            key={key}
            setter={setActiveTab}
            value={key}
            activeTab={activeTab}
            label={label}
          />
        ))}
      </div>

      <div className="p-4 bg-white dark:bg-dark text-gray-900 dark:text-gray-100">
        {activeTab === "gainTop10" && (
          <StockTable
            data={stockData.gainTop10}
            fields={["code", "name", "change", "price"]}
            highlightField="change"
          />
        )}
        {activeTab === "lossTop10" && (
          <StockTable
            data={stockData.lossTop10}
            fields={["code", "name", "change", "price"]}
            highlightField="change"
          />
        )}
        {activeTab === "volumeTop10" && (
          <StockTable
            data={stockData.volumeTop10}
            fields={["code", "name", "volume", "price"]}
          />
        )}
        {activeTab === "marketCapTop10" && (
          <StockTable
            data={stockData.marketCapTop10}
            fields={["code", "name", "marketCap", "price"]}
          />
        )}
      </div>
    </Box>
  );
}
