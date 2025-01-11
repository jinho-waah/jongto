import { useState } from "react";
import { Input } from "@/components/input/Input";
import { Button } from "@/components/button/Button";
import { CommentData, CommentFormProps } from "../../types";

const TestName = "사용자123";
const TestAnnony = "익명";

export const CommentForm = ({ onSubmit, parentId }: CommentFormProps) => {
  const [username, setUsername] = useState(TestName);

  const handleAnonymousChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.checked ? TestAnnony : TestName);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const commentData: CommentData = {
      anonymous: formData.get("anonymous") === "on",
      username: formData.get("username")?.toString() || "",
      password: formData.get("password")?.toString() || "",
      content: formData.get("content")?.toString() || "",
    };
    if (parentId) {
      onSubmit({ ...commentData, parentId });
    } else {
      onSubmit(commentData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4">
      <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
        <input
          type="checkbox"
          name="anonymous"
          className="form-checkbox h-4 w-4 text-indigo-600 dark:text-yellow-400"
          onChange={handleAnonymousChange}
        />
        익명
      </label>
      <Input
        type="text"
        name="username"
        value={username}
        readOnly
        className="w-32"
      />
      <Input
        type="password"
        name="password"
        placeholder="비밀번호"
        className="w-32"
      />
      <Input
        type="text"
        name="content"
        placeholder="댓글 입력..."
        className="flex-1"
      />
      <Button type="submit" variant="primary">
        댓글 작성
      </Button>
    </form>
  );
};
