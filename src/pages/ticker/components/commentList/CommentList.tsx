import { useState } from "react";
import { CommentForm } from "../commentForm/CommentForm";
import { Comment } from "../../types";

interface CommentListProps {
  comments: Comment[];
  depth?: number;
  onReplySubmit?: (replyData: Comment) => void;
}

export const CommentList = ({
  comments,
  depth = 0,
  onReplySubmit,
}: CommentListProps) => {
  const [expandedComments, setExpandedComments] = useState<number[]>([]);

  const toggleReplies = (index: number) => {
    setExpandedComments((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <ul className="mt-6 space-y-4">
      {comments.map((comment, index) => (
        <li
          key={index}
          className={`pb-2 ${
            depth === 0 ? "border-b dark:border-gray-700" : ""
          }`}
        >
          <p className="font-semibold">{comment.username}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {comment.comment}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            {comment.date}
          </p>

          {/* 대댓글 보기 버튼 */}
          {depth === 0 && (
            <button
              onClick={() => toggleReplies(index)}
              className="text-sm text-blue-500 dark:text-yellow-400 hover:underline mt-2"
            >
              {comment.replies && comment.replies.length > 0
                ? expandedComments.includes(index)
                  ? `대댓글(${comment.replies.length}) 숨기기`
                  : `대댓글(${comment.replies.length}) 보기`
                : expandedComments.includes(index)
                ? "대댓글 숨기기"
                : "대댓글 보기"}
            </button>
          )}

          {/* 대댓글 */}
          {expandedComments.includes(index) && (
            <div className="mt-4 ml-6 border-l-2 border-gray-300 dark:border-gray-600 pl-4">
              <CommentList
                comments={comment.replies || []}
                depth={depth + 1}
                onReplySubmit={onReplySubmit}
              />
              {/* 대댓글 작성 폼 */}
              <CommentForm
                onSubmit={(replyData) => {
                  if (onReplySubmit) {
                    onReplySubmit(replyData);
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
