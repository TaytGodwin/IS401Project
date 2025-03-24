export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  profilePicture: string;
  phone: string;
  lastLogin: Date;
  daysRead: number;
  longestStreak: number;
  userGroups: string[];
  notes: string[];
}
