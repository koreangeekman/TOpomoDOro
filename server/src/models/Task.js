import { Schema } from "mongoose";

export const TaskSchema = new Schema({
  body: { type: String, required: true, maxLength: 100 },
  completed: { type: Boolean, required: true, default: false },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }, // 
  projectId: { type: Schema.Types.ObjectId, required: false, ref: 'Project' }, // if tied to a project
}, {
  timestamps: true, toJSON: { virtuals: true }
})

TaskSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

TaskSchema.virtual('project', {
  localField: 'projectId',
  foreignField: '_id',
  justOne: true,
  ref: 'Project'
})
