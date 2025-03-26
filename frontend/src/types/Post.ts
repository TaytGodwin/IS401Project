import { Comment } from './Comment';

export interface Post {
  postId: number;
  groupId: number;
  userId: number; // we may want to return the user name here
  postTitle: string;
  postDate: Date;
  postContent: string;
  postComments: number;
  numberOfLikes: number;
  comments: Comment[];
}
