import { IDoc } from './IDoc';

export interface UserDoc extends IDoc {
  email: string;
  phone: string;
  password: string;
  alias: string;
  avatar: object;
  introduction: string;
}
