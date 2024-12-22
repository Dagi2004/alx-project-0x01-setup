export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface UserProps {
  userID: number;
  name: string;
  username: string;
  phone: number;
  website: string;
}
export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

export interface UserData {
  name: string;
  username: string;
  phone: number;
  website: string;
}
export interface UserModalProps {
  onClose: () => void;
  onSubmit: (post: UserProps) => void;
}
