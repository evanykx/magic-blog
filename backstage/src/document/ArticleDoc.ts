import { IDoc } from './IDoc';
import { UserDoc } from './UserDoc';
import { CommentDoc } from './CommentDoc';
import { TagDoc } from './TagDoc';

export interface ArticleDoc extends IDoc {
  user: string | UserDoc;
  title: string;
  subTitle: string;
  image: object;  // image for title
  content: object;
  count: number;  // character count
  read: number;   // read times
  comment: Array<CommentDoc>; // comment list
  favor: number;  // favor times
  tags: Array<TagDoc>; // tag
}