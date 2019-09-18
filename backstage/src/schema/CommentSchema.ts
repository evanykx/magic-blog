import { Schema, Model, model } from 'mongoose';
import { CommentDoc } from '../document/CommentDoc';
import { DeleteFlag } from '../constant/enums';
const { ObjectId } = Schema.Types;

const CommentSchema: Schema = new Schema({
  user: { type: ObjectId, ref: 'User'},
  content: String,
  createAt: { type: Date, default: Date.now }, // create time
  createBy: String, // create by [Commentname]
  updateAt: Date, // update time
  updateBy: String, // update by [Commentname]
  deleted: { type: Number, default: DeleteFlag.NO }  // delete flag [enum]
});

CommentSchema.pre<CommentDoc>('save', function(next) {
  if (!this.updateAt) {
    this.updateAt = Date.now();
  }
  next();
});

export const Comment: Model<CommentDoc> = model<CommentDoc>('Comment', CommentSchema);