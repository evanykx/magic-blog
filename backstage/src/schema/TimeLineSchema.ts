import { Schema, Model, model } from 'mongoose';
import { TimeLineDoc } from '../document/TimeLineDoc';
import { DeleteFlag } from '../constant/enums';
const { ObjectId } = Schema.Types;

const TimeLineSchema: Schema = new Schema({
  user: { type: ObjectId, ref: 'User'},
  title: String,
  description: String,
  fromDate: Date,
  toDate: Date,
  link: String,
  createAt: { type: Date, default: Date.now }, // create time
  createBy: String, // create by [TimeLinename]
  updateAt: Date, // update time
  updateBy: String, // update by [TimeLinename]
  deleted: { type: Number, default: DeleteFlag.NO }  // delete flag [enum]
});

TimeLineSchema.pre<TimeLineDoc>('save', function(next) {
  if (!this.updateAt) {
    this.updateAt = Date.now();
  }
  next();
});

export const TimeLine: Model<TimeLineDoc> = model<TimeLineDoc>('TimeLine', TimeLineSchema);