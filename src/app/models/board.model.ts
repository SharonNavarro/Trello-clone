import { User } from "./user.model";

export interface Boards {
  id: string;
  title: string;
  backgroundColor: string;
  members: User[];
}
