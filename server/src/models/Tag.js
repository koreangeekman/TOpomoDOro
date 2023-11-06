import { Schema } from "mongoose";

export const TagSchema = new Schema({
  name: { type: String, required: true, maxLength: 64 },
  color: { type: String, required: true, maxLength: 32, default: '#000000' },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  workspaceId: { type: Schema.Types.ObjectId, required: true, ref: 'Workspace' },
}, { timestamps: true, toJSON: { virtuals: true } })

TagSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

TagSchema.virtual('workspace', {
  localField: 'workspaceId',
  foreignField: '_id',
  justOne: true,
  ref: 'Workspace'
})

TagSchema.virtual('useCount', {
  localField: '_id',
  foreignField: 'tagId',
  count: true,
  ref: 'Tag'
})