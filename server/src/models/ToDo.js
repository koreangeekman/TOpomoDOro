import { Schema } from "mongoose";

export const ToDoSchema = new Schema({
  body: { type: String, required: true, maxLength: 100 },
  isCompleted: { type: Boolean, required: true, default: false },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
}, { timestamps: true, toJSON: { virtuals: true } })

ToDoSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})