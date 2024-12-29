import { useState } from "react";
import { Box } from "@/components/box/Box";
import { TabButton } from "./tab-button/TabButton";
import { StockTable } from "./stock-table/StockTable";
import { TAB_NAME } from "@/constants";
import { useVolumeRank } from "../../../../hooks/useVolumeRank";
import { useGainRateRank } from "../../../../hooks/useGainRateRank";
import { useLossRateRank } from "../../../../hooks/useLossRateRank";
import { useMarketCapRank } from "../../../../hooks/useMarketCapRank";
import {
  GAIN_TOP_10,
  LOSS_TOP_10,
  MARKET_CAP_TOP_10,
  VOLUME_TOP_10,
} from "./types";

export default function DashBoard() {
  const [activeTab, setActiveTab] = useState("gainTop10");

  const { data: gainRateRank } = useGainRateRank(10);
  const { data: lossRateRank } = useLossRateRank(10);
  const { data: volumeRank } = useVolumeRank(10);
  const { data: marketCapRank } = useMarketCapRank(10);

  if (!gainRateRank || !lossRateRank || !volumeRank || !marketCapRank) {
    return <div>Error: 데이터를 불러올 수 없습니다.</div>;
  }

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
          <StockTable data={gainRateRank.data} fields={GAIN_TOP_10} />
        )}
        {activeTab === "lossTop10" && (
          <StockTable data={lossRateRank.data} fields={LOSS_TOP_10} />
        )}
        {activeTab === "volumeTop10" && (
          <StockTable data={volumeRank.data} fields={VOLUME_TOP_10} />
        )}
        {activeTab === "marketCapTop10" && (
          <StockTable data={marketCapRank.data} fields={MARKET_CAP_TOP_10} />
        )}
      </div>
    </Box>
  );
}
