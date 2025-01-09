import { useState } from "react";
import { CommentForm } from "../commentForm/CommentForm";
import { Comment, CommentListProps } from "../../types";
import ReplyList from "../replyList/ReplyList";

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
          className={"pb-2 border-b dark:border-gray-700"}
        >
          {/* 댓글 내용 */}
          <p className="font-semibold">{comment.author}</p>
          <p className="text-gray-700 dark:text-gray-200">{comment.content}</p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            {comment.createdAt}
          </p>

          {/* 대댓글 보기 버튼 */}
          <button
            onClick={() => toggleReplies(comment.commentId)}
            className="text-sm text-blue-500 dark:text-yellow-400 hover:underline mt-2"
          >
            {expandedComments.includes(comment.commentId)
              ? `대댓글 숨기기`
              : `대댓글(${comment.childCommentCount}) 보기`}
          </button>

          {/* 대댓글 */}
          {expandedComments.includes(comment.commentId) && (
            <div className="mt-4 ml-6 border-l-2 border-gray-300 dark:border-gray-600 pl-4">
              <ReplyList parentId={comment.commentId} />
              <CommentForm
                onSubmit={(replyData) => {
                  if (onReplySubmit) {
                    onReplySubmit(
                      replyData as unknown as Comment,
                      comment.commentId
                    );
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
