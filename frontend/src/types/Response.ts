export interface Response {
  responseId: number;
  userId: number; // may want to return the name
  responseDate: Date;
  responseContent: string;
  responseLikes: number;
}
