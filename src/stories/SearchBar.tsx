import { Search } from "lucide-react";
import { useState } from "react";

export const SearchBar = ({ placeholder }: { placeholder?: string }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery); // 검색 로직 추가 가능
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full mt-8">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder={placeholder || "검색어를 입력하세요..."}
          className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-200 dark:bg-[#1f232b] text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-lg transition-all duration-300"
        />
        <Search className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-5 h-5" />
      </div>
    </form>
  );
};
