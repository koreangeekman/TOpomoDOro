import { Schema } from "mongoose";

export const WorkspaceSchema = new Schema({
  name: { type: String, required: true, maxLength: 64 },
  description: { type: String, required: true, maxLength: 500 },
  isArchived: { type: Boolean, required: true, default: false },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },

}, { timestamps: true, toJSON: { virtuals: true } })

WorkspaceSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

WorkspaceSchema.virtual('memberCount', {
  localField: '_id',
  foreignField: 'workspaceId',
  ref: 'Member',
  count: true
})

WorkspaceSchema.virtual('members', {
  localField: '_id',
  foreignField: 'workspaceId',
  ref: 'Member'
})

WorkspaceSchema.virtual('projectCount', {
  localField: '_id',
  foreignField: 'workspaceId',
  ref: 'Project',
  count: true
})

WorkspaceSchema.virtual('projects', {
  localField: '_id',
  foreignField: 'workspaceId',
  ref: 'Project'
})

WorkspaceSchema.virtual('folderCount', {
  localField: '_id',
  foreignField: 'workspaceId',
  ref: 'Folder',
  count: true
})

WorkspaceSchema.virtual('folders', {
  localField: '_id',
  foreignField: 'workspaceId',
  ref: 'Folder'
})
