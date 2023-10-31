import { Schema } from "mongoose";

export const AdvTaskSchema = new Schema({
  body: { type: String, required: true, maxLength: 100 },
  completed: { type: Boolean, required: true, default: false },
  repeating: { type: Boolean, required: true, default: false }, // condition to enable repeating condition
  archived: { type: Boolean, required: true, default: false },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }, // 
  projectId: { type: Schema.Types.ObjectId, required: false, ref: 'Project' }, // if tied to a project
  watcherId: { type: Schema.Types.ObjectId, required: false, ref: 'Watcher' }, // monitors specified tasks for completion, triggers this task to re-activate
  repeatingId: { type: Schema.Types.ObjectId, required: false, ref: 'Repeating' }, // ties to a set repeatable schedule - hour, day, week, month, etc
}, {
  timestamps: true, toJSON: { virtuals: true }
})

AdvTaskSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

AdvTaskSchema.virtual('project', {
  localField: 'projectId',
  foreignField: '_id',
  justOne: true,
  ref: 'Project'
})

// AdvTaskSchema.virtual('watcher', {
//   localField: 'watcherId',
//   foreignField: '_id',
//   justOne: true,
//   ref: 'Watcher'
// })

// AdvTaskSchema.virtual('repeating', {
//   localField: 'repeatingId',
//   foreignField: '_id',
//   justOne: true,
//   ref: 'repeating'
// })