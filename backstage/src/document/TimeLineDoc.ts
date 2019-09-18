import { IDoc } from './IDoc';
import { UserDoc } from './UserDoc';

export interface TimeLineDoc extends IDoc {
  user: string | UserDoc;
  title: string;
  description: string;
  fromDate: number;
  toDate: number;
  link: string;
}
