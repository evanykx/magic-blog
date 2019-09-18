import { Document } from 'mongoose';

export interface IDoc extends Document {
  createAt: number; // create time
  createBy: string; // create by [username]
  updateAt: number; // update time
  updateBy: string; // update by [username]
  deleted: number;  // delete flag [enum]
}