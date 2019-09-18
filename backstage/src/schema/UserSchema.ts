import { Schema, Model, model } from 'mongoose';
import { UserDoc } from '../document/UserDoc';
import { DeleteFlag } from '../constant/enums';
import { Binary } from 'bson';

const UserSchema: Schema = new Schema({
  email: String,
  phone: String,
  password: String,
  alias: String,
  avatar: Buffer,
  introduction: String,
  createAt: { type: Date, default: Date.now }, // create time
  createBy: String, // create by [username]
  updateAt: Date, // update time
  updateBy: String, // update by [username]
  deleted: { type: Number, default: DeleteFlag.NO }  // delete flag [enum]
});

UserSchema.pre<UserDoc>('save', function(next) {
  if (!this.updateAt) {
    this.updateAt = Date.now();
  }
  next();
});

export const User: Model<UserDoc> = model<UserDoc>('User', UserSchema);