import { Schema } from "mongoose";

export const CollectionSchema = new Schema({
  name: { type: String, required: true, maxLength: 50 },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
}, { timestamps: true, toJSON: { virtuals: true } })

CollectionSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})