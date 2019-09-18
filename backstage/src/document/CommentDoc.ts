import { IDoc } from './IDoc';
import { UserDoc } from './UserDoc';

export interface CommentDoc extends IDoc {
  user: string | UserDoc;
  content: string; // comment content
}