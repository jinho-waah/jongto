import { useReplies } from "../../hooks/useRepies";

const ReplyList = ({ parentId }: { parentId: number }) => {
  const { data: replies = [], isLoading, isError } = useReplies({ parentId });
  if (isLoading) return;
  if (isError) return;

  return (
    <ul className="space-y-4">
      {replies.map((reply) => (
        <li key={reply.commentId} className="pb-2">
          <p className="font-semibold">{reply.author}</p>
          <p className="text-gray-600  dark:text-gray-200">{reply.content}</p>
          <p className="text-xs text-gray-500">{reply.createdAt}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReplyList;
