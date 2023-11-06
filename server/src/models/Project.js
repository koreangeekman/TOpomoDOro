import { Schema } from "mongoose";

export const ProjectSchema = new Schema({
  name: { type: String, required: true, maxLength: 64 },
  description: { type: String, required: true, maxLength: 500 },
  isArchived: { type: Boolean, required: true, default: false },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  workspaceId: { type: Schema.Types.ObjectId, required: true, ref: 'Workspace' },
  tagId: { type: Schema.Types.ObjectId, required: true, ref: 'Tag' },

}, { timestamps: true, toJSON: { virtuals: true } })

ProjectSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

ProjectSchema.virtual('workspace', {
  localField: 'workspaceId',
  foreignField: '_id',
  justOne: true,
  ref: 'Workspace'
})

ProjectSchema.virtual('tag', {
  localField: 'tagId',
  foreignField: '_id',
  justOne: true,
  ref: 'Tag'
})

ProjectSchema.virtual('folderCount', {
  localField: '_id',
  foreignField: 'projectId',
  count: true,
  ref: 'Folder'
})

ProjectSchema.virtual('noteCount', {
  localField: '_id',
  foreignField: 'projectId',
  count: true,
  ref: 'Note'
})

ProjectSchema.virtual('taskCount', {
  localField: '_id',
  foreignField: 'projectId',
  count: true,
  ref: 'Task'
})

ProjectSchema.virtual('advTaskCount', {
  localField: '_id',
  foreignField: 'projectId',
  count: true,
  ref: 'AdvTask'
})
