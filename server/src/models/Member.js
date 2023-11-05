import { Schema } from "mongoose";

export const MemberSchema = new Schema({
  memberId: { type: Schema.Types.ObjectId, required: true, ref: 'Member' },
  workspaceId: { type: Schema.Types.ObjectId, required: true, ref: 'Workspace' },
  adminId: { type: Schema.Types.ObjectId, required: true, ref: 'Admin' },
  projectIds: { type: Array, required: false },
}, { timestamps: true, toJSON: { virtuals: true } })

MemberSchema.virtual('member', {
  localField: 'memberId',
  foreignField: '_id',
  justOne: true,
  ref: 'Member'
})

MemberSchema.virtual('workspace', {
  localField: 'workspaceId',
  foreignField: '_id',
  justOne: true,
  ref: 'Workspace'
})

MemberSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'creatorAccount'
})