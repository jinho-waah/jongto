import SearchBar from "@/pages/common/layout/components/searchBar/SearchBar";
import DashBoard from "./components/dashboard/DashBoard";

export default function MainPage() {
  return (
    <div className="flex flex-col items-center min-h-screen px-4 sm:px-10">
      <div className="w-full max-w-4xl max-w-screen-xl">
        <SearchBar />
        <DashBoard />
      </div>
    </div>
  );
}
