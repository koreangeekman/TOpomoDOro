import { Schema } from "mongoose";

export const ProjectSchema = new Schema({
  name: { type: String, required: true, maxLength: 64 },
  description: { type: String, required: true, maxLength: 500 },
  archived: { type: Boolean, required: true, default: false },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },

}, { timestamps: true, toJSON: { virtuals: true } })

ProjectSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

ProjectSchema.virtual('basicTasks', {
  localField: '_id',
  foreignField: '_id',
  count: true,
  ref: 'BasicTask'
})

ProjectSchema.virtual('tasks', {
  localField: '_id',
  foreignField: '_id',
  count: true,
  ref: 'Task'
})