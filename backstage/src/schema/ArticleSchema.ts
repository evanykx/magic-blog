import { Schema, Model, model } from 'mongoose';
import { DeleteFlag } from '../constant/enums';
import { ArticleDoc } from '../document/ArticleDoc';
const { ObjectId } = Schema.Types;

const ArticleSchema: Schema = new Schema({
  user: { type: ObjectId, ref: 'User'},
  title: String,
  subTitle: String,
  image: Object,  // image for title
  content: Object,
  count: Number,  // character count
  read: Number,   // read times
  comment: Array, // comment list
  favor: Number,  // favor times
  tags: Array, // tag
  createAt: { type: Date, default: Date.now }, // create time
  createBy: String, // create by [username]
  updateAt: Date, // update time
  updateBy: String, // update by [username]
  deleted: { type: Number, default: DeleteFlag.NO }  // delete flag [enum]
});

ArticleSchema.pre<ArticleDoc>('save', function(next) {
  this.updateAt = Date.now();
  next();
});

export const User: Model<ArticleDoc> = model<ArticleDoc>('User', ArticleSchema);