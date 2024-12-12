import { useParams } from "react-router-dom";

export default function Ticker() {
  const { ticker } = useParams<{ ticker: string }>();

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{ticker}</h1>
      <p className="text-lg">여기에 {ticker}에 대한 데이터를 추가하세요.</p>
    </div>
  );
}
