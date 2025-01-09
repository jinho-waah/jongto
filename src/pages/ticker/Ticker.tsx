import { useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../common/searchBar/SearchBar";
import { Box } from "@/components/box/Box";
import { CommentForm } from "./components/commentForm/CommentForm";
import { CommentList } from "./components/commentList/CommentList";
import { useComments } from "./hooks/useComments";
import Chart from "./components/chart/Chart";
import { CHART_TYPES } from "@/constants";
import { Button } from "@/components/button/Button";
import { Comment, CommentData, PostCommentPayload } from "./types";
import { usePostComment } from "./hooks/usePostComments";

export default function Ticker() {
  const { ticker } = useParams<{ ticker: string }>();
  const safeTicker = ticker as string;
  const [chartType, setChartType] = useState<string>(CHART_TYPES.DAILY);
  const { data: comments, isLoading, isError } = useComments(safeTicker);
  const { mutate: postComment, isPending } = usePostComment();

  const handleCommentSubmit = (commentData: CommentData) => {
    console.log("댓글 데이터:", commentData);

    const payload: PostCommentPayload = {
      stockCode: safeTicker,
      content: commentData.comment,
      password: commentData.anonymous ? commentData.password : undefined,
    };

    postComment(payload);
    if (isPending) {
      console.log("댓글 등록 중!");
    }
  };

  const handleReplySubmit = (replyData: Comment, parentId: number) => {
    console.log("대댓글 데이터:", replyData, "부모 ID:", parentId);

    const payload: PostCommentPayload = {
      stockCode: safeTicker,
      content: replyData.content,
      password: replyData.password,
      parentId,
    };
    console.log("payload", payload);
    postComment(payload);
    if (isPending) {
      console.log("댓글 등록 중!");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4 sm:px-10 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="w-full max-w-screen-xl">
        <SearchBar />
        <h1 className="text-3xl font-bold my-6">{ticker} 이름</h1>

        <Box title="차트">
          <div className="p-4">
            <div className="flex gap-2 mb-4">
              {Object.values(CHART_TYPES).map((type) => (
                <Button
                  key={type}
                  onClick={() => setChartType(type)}
                  variant={chartType === type ? "primary" : "secondary"}
                >
                  {type}
                </Button>
              ))}
            </div>
            <div className="w-full h-[400px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <Chart ticker={safeTicker} chartType={chartType} />
            </div>
          </div>
        </Box>

        <Box title="댓글">
          <div className="p-4">
            <CommentForm onSubmit={handleCommentSubmit} />
            {isLoading && <p>댓글을 불러오는 중...</p>}
            {isError && <p>댓글을 불러오는 데 실패했습니다.</p>}
            {!isLoading && !isError && comments && (
              <CommentList
                comments={comments}
                onReplySubmit={handleReplySubmit}
              />
            )}
          </div>
        </Box>
      </div>
    </div>
  );
}
