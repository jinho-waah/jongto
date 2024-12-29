import { useParams } from "react-router-dom";
import SearchBar from "../common/searchBar/SearchBar";
import { Box } from "@/components/box/Box";
import { Button } from "@/components/button/Button";
import { Input } from "@/components/input/Input"; // Input 컴포넌트 import

export default function Ticker() {
  const { ticker } = useParams<{ ticker: string }>();

  return (
    <div className="flex flex-col items-center min-h-screen px-4 sm:px-10 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="w-full max-w-screen-xl">
        {/* Search Bar */}
        <SearchBar />

        {/* Ticker Info */}
        <h1 className="text-3xl font-bold my-6">{ticker} 종목 상세 정보</h1>

        {/* Chart Section */}
        <Box title="차트">
          <div className="p-4">
            {/* 차트는 예시로 표시 (실제 차트 라이브러리를 여기에 추가) */}
            <div className="w-full h-[300px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <p className="text-gray-600 dark:text-gray-300">차트 표시 영역</p>
            </div>
          </div>
        </Box>

        {/* Comment Section */}
        <Box title="댓글">
          <div className="p-4">
            {/* 댓글 입력 */}
            <form className="flex items-center gap-4">
              {/* 익명 체크박스 */}
              <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600 dark:text-yellow-400"
                />
                익명
              </label>
              {/* 본인 아이디 입력 (비활성화) */}
              <Input
                type="text"
                placeholder="본인 아이디"
                value="사용자123"
                disabled
                className="w-32"
              />
              {/* 비밀번호 입력 */}
              <Input type="password" placeholder="비밀번호" className="w-32" />
              {/* 댓글 내용 입력 */}
              <Input
                type="text"
                placeholder="댓글 입력..."
                className="flex-1"
              />
              {/* 댓글 작성 버튼 */}
              <Button type="submit" variant="primary">
                댓글 작성
              </Button>
            </form>

            {/* 댓글 리스트 */}
            <ul className="mt-6 space-y-4">
              {/* 예시 댓글 */}
              <li className="border-b pb-2 dark:border-gray-700">
                <p className="font-semibold">익명</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  이 종목 정말 기대됩니다!
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  2024-12-28
                </p>
              </li>
              <li className="border-b pb-2 dark:border-gray-700">
                <p className="font-semibold">익명2</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  오늘은 매수의 기회라고 생각합니다.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  2024-12-28
                </p>
              </li>
            </ul>
          </div>
        </Box>
      </div>
    </div>
  );
}
