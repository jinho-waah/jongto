export interface CommentData {
  anonymous: boolean;
  username: string;
  password: string;
  content: string;
  parentId?: string;
}

export interface PostCommentPayload {
  stockCode: string;
  content: string;
  password?: string;
  parentId?: number | null;
}

export interface CommentFormProps {
  parentId?: string;
  onSubmit: (commentData: CommentData) => void;
}

export interface Comment {
  commentId: number;
  stockCode: string;
  author: string;
  content: string;
  childCommentCount: number;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  password?: string;
}

export interface Reply {
  commentId: number;
  stockCode: string;
  author: string;
  content: string;
  likeCount: number;
  isParent: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CommentListProps {
  comments: Comment[];
  onReplySubmit?: (replyData: Comment, parentId: number) => void;
}
