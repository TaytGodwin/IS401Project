// Without posts (search view)
export interface PublicGroup {
  groupId: number;
  groupName: string;
  groupCreator: string;
  creationDate: Date;
  privacyStatus: string;
}

import { Post } from './Post';
// With posts (individual view)
export interface Group {
  groupId: number;
  groupName: string;
  groupCreator: string;
  creationDate: Date;
  privacyStatus: string;
  posts: Post[]; // Returns all of the posts
}
