import { Response } from './Response';

export interface Comment {
  commentId: number;
  userId: number; // This may need to be a name and changed in the controller
  commentDate: Date;
  commentContent: string;
  commentLikes: number;
  responses: Response[];
}
