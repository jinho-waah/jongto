import { useParams } from "react-router-dom";

export default function Ticker() {
  const { ticker } = useParams<{ ticker: string }>();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{ticker} 상세 페이지</h1>
      <p>여기에 {ticker}에 대한 데이터를 추가하세요.</p>
    </div>
  );
}
