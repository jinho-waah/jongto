import { useReplies } from "../../hooks/useRepies";

const ReplyList = ({ parentId }: { parentId: number }) => {
  const { data: replies, isLoading, isError } = useReplies({ parentId });

  if (isLoading) return <p>대댓글을 불러오는 중...</p>;
  if (isError) return <p>대댓글을 불러오는 데 실패했습니다.</p>;

  return (
    <ul className="mt-4 space-y-4">
      {replies?.map((reply) => (
        <li key={reply.commentId} className="border-b pb-2">
          <p className="font-semibold">{reply.author}</p>
          <p className="text-sm text-gray-600">{reply.content}</p>
          <p className="text-xs text-gray-500">{reply.createdAt}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReplyList;
