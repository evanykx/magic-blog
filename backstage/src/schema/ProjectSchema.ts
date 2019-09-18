import { Schema, Model, model } from 'mongoose';
import { ProjectDoc } from '../document/ProjectDoc';
import { DeleteFlag } from '../constant/enums';
const { ObjectId } = Schema.Types;

const ProjectSchema: Schema = new Schema({
  user: { type: ObjectId, ref: 'User'},
  title: String,
  fromDate: Date,
  toDate: Date,
  link: String,
  createAt: { type: Date, default: Date.now }, // create time
  createBy: String, // create by [Projectname]
  updateAt: Date, // update time
  updateBy: String, // update by [Projectname]
  deleted: { type: Number, default: DeleteFlag.NO }  // delete flag [enum]
});

ProjectSchema.pre<ProjectDoc>('save', function(next) {
  if (!this.updateAt) {
    this.updateAt = Date.now();
  }
  next();
});

export const Project: Model<ProjectDoc> = model<ProjectDoc>('Project', ProjectSchema);