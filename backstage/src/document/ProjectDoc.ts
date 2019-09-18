import { IDoc } from './IDoc';
import { UserDoc } from './UserDoc';

export interface ProjectDoc extends IDoc {
  user: string | UserDoc;
  title: string;
  fromDate: number;
  toDate: number;
  link: string;
}
