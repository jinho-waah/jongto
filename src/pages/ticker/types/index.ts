export interface CommentData {
  anonymous: boolean;
  username: string;
  password: string;
  comment: string;
  date: string;
}

export interface CommentFormProps {
  onSubmit: (commentData: CommentData) => void;
}

export interface Comment {
  username: string;
  comment: string;
  date: string;
  replies?: Comment[];
}
