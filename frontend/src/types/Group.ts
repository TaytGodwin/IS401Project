export interface Group {
  groupId: number;
  groupName: string;
  groupCreator: string;
  creationDate: Date;
  privacyStatus: 'Private';
  // We need to figure out how we are going to return posts and comments and whether that will be returned here
}
