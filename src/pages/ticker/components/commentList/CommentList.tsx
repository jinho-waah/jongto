import { useState } from "react";
import { CommentForm } from "../commentForm/CommentForm";
import { Comment, CommentListProps } from "../../types";

export const CommentList = ({ comments, onReplySubmit }: CommentListProps) => {
  const [expandedComments, setExpandedComments] = useState<number[]>([]);

  const toggleReplies = (commentId: number) => {
    setExpandedComments((prev) =>
      prev.includes(commentId)
        ? prev.filter((id) => id !== commentId)
        : [...prev, commentId]
    );
  };

  return (
    <ul className="mt-6 space-y-4">
      {(Array.isArray(comments) ? comments : []).map((comment) => (
        <li
          key={comment.commentId}
          className={`pb-2 ${
            comment.childCommentCount > 0 ? "border-b dark:border-gray-700" : ""
          }`}
        >
          {/* 댓글 내용 */}
          <p className="font-semibold">{comment.author}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {comment.content}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            {comment.createdAt}
          </p>

          {/* 대댓글 보기 버튼 */}
          {comment.childCommentCount > 0 && (
            <button
              onClick={() => toggleReplies(comment.commentId)}
              className="text-sm text-blue-500 dark:text-yellow-400 hover:underline mt-2"
            >
              {expandedComments.includes(comment.commentId)
                ? `대댓글 숨기기`
                : `대댓글(${comment.childCommentCount}) 보기`}
            </button>
          )}

          {/* 대댓글 */}
          {expandedComments.includes(comment.commentId) && (
            <div className="mt-4 ml-6 border-l-2 border-gray-300 dark:border-gray-600 pl-4">
              {/* 대댓글 목록은 별도의 API 호출로 처리 */}
              <p>대댓글 데이터를 불러오는 로직을 여기에 추가하세요.</p>
              {/* 대댓글 작성 폼 */}
              <CommentForm
                onSubmit={(replyData) => {
                  if (onReplySubmit) {
                    onReplySubmit(
                      replyData as unknown as Comment,
                      comment.commentId
                    ); // 부모 ID 전달
                  }
                }}
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
