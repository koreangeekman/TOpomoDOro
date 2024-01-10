import { Schema } from "mongoose";

export const ToDoSchema = new Schema({
  body: { type: String, required: true, maxLength: 200 },
  isCompleted: { type: Boolean, required: true, default: false },
  // collectionId: { type: Schema.Types.ObjectId, required: true, ref: 'Collection' },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
}, { timestamps: true, toJSON: { virtuals: true } })

ToDoSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

// ToDoSchema.virtual('collection', {
//   localField: 'collectionId',
//   foreignField: '_id',
//   justOne: true,
//   ref: 'Collection'
// })

// per user collection - integration with twitch - max 3?5 todos for general users
// displayed as: [ @user :: todo ]