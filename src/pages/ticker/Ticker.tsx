import { useParams } from "react-router-dom";
import SearchBar from "../common/layout/components/searchBar/SearchBar";

export default function Ticker() {
  const { ticker } = useParams<{ ticker: string }>();

  return (
    <div className="flex flex-col items-center min-h-screen px-4 sm:px-10">
      <div className="w-full max-w-screen-xl">
        <SearchBar />
        {ticker}
      </div>
    </div>
  );
}
