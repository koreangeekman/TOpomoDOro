import { Schema } from "mongoose";

export const FolderSchema = new Schema({
  name: { type: String, required: true, maxLength: 32 },
  color: { type: String, required: true, maxLength: 32 },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },

}, { timestamps: true, toJSON: { virtuals: true } })

FolderSchema.virtual('account', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})