import { Colors } from "./colors.model";
import { List } from "./list.model";
import { User } from "./user.model";

export interface Boards {
  id: string;
  title: string;
  backgroundColor: Colors;
  members: User[];
  list: List[];
}
