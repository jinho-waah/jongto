import { useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../common/searchBar/SearchBar";
import { Box } from "@/components/box/Box";
import { CommentForm } from "./components/commentForm/CommentForm";
import { CommentList } from "./components/commentList/CommentList";
import { Comment, CommentData } from "./types";
import Chart from "./components/chart/Chart";
import { CHART_TYPES } from "@/constants";

export default function Ticker() {
  const { ticker } = useParams<{ ticker: string }>();
  const [chartType, setChartType] = useState<string>(CHART_TYPES.DAILY);

  if (!ticker) {
    return <p>티커 정보가 없습니다. URL을 확인해주세요.</p>;
  }

  const comments = [
    {
      username: "익명",
      comment: "이 종목 정말 기대됩니다!",
      date: "2024-12-28",
      replies: [
        {
          username: "익명2",
          comment: "저도 동의합니다!",
          date: "2024-12-28",
        },
      ],
    },
    {
      username: "익명3",
      comment: "오늘은 매수의 기회라고 생각합니다.",
      date: "2024-12-28",
      replies: [],
    },
    {
      username: "익명4",
      comment: "이 종목은 기대 이상입니다.",
      date: "2024-12-27",
      replies: [
        {
          username: "익명5",
          comment: "정말인가요? 추가 매수 고민 중입니다.",
          date: "2024-12-27",
        },
        {
          username: "익명6",
          comment: "추세를 보니 긍정적이네요.",
          date: "2024-12-27",
        },
      ],
    },
  ];

  const handleCommentSubmit = (commentData: CommentData) => {
    console.log("댓글 데이터:", commentData);
    // 댓글 저장 로직 추가 가능
  };

  const handleReplySubmit = (replyData: Comment) => {
    console.log(`대댓글 데이터:`, replyData);
    // 대댓글 저장 로직 추가
  };

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
            {/* Chart Type Buttons */}
            <div className="flex gap-2 mb-4">
              {Object.values(CHART_TYPES).map((type) => (
                <button
                  key={type}
                  onClick={() => setChartType(type)}
                  className={`px-4 py-2 rounded-md font-semibold ${
                    chartType === type
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="w-full h-[400px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <Chart ticker={ticker} chartType={chartType} />
            </div>
          </div>
        </Box>

        {/* Comment Section */}
        <Box title="댓글">
          <div className="p-4">
            <CommentForm onSubmit={handleCommentSubmit} />
            <CommentList
              comments={comments}
              onReplySubmit={handleReplySubmit}
            />
          </div>
        </Box>
      </div>
    </div>
  );
}
