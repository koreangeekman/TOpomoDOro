import { Schema } from "mongoose";

export const TaskSchema = new Schema({
  body: { type: String, required: true, maxLength: 100 },
  completed: { type: Boolean, required: true, default: false },
  projectId: { type: Schema.Types.ObjectId, required: false, ref: 'Project' },
  creatorId: { type: Schema.Types.ObjectId, required: false, ref: 'Account' }
}, {
  timestamps: true, toJSON: { virtuals: true }
})

TaskSchema.virtual('project', {
  localField: 'projectId',
  foreignField: '_id',
  justOne: true,
  ref: 'Project'
})

TaskSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})