import { Schema } from "mongoose";

export const FolderSchema = new Schema({
  name: { type: String, required: true, maxLength: 32 },
  color: { type: String, required: true, maxLength: 32, default: '#000000' },
  archived: { type: Boolean, required: true, default: false },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },

}, { timestamps: true, toJSON: { virtuals: true } })

FolderSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})