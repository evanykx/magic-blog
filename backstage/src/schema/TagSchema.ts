import { Schema, Model, model } from 'mongoose';
import { TagDoc } from '../document/TagDoc';
import { DeleteFlag } from '../constant/enums';

const TagSchema: Schema = new Schema({
  name: String,
  createAt: { type: Date, default: Date.now }, // create time
  createBy: String, // create by [Tagname]
  updateAt: Date, // update time
  updateBy: String, // update by [Tagname]
  deleted: { type: Number, default: DeleteFlag.NO }  // delete flag [enum]
});

TagSchema.pre<TagDoc>('save', function(next) {
  if (!this.updateAt) {
    this.updateAt = Date.now();
  }
  next();
});

export const Tag: Model<TagDoc> = model<TagDoc>('Tag', TagSchema);