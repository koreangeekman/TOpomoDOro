import { Schema } from "mongoose";

export const NoteSchema = new Schema({
  body: { type: String, required: true, maxLength: 100 },
  completed: { type: Boolean, required: true, default: false },
  color: { type: String, required: true, maxLength: 32, default: '#000000' },
  archived: { type: Boolean, required: true, default: false },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }, // tied to account
  projectId: { type: Schema.Types.ObjectId, required: false, ref: 'Project' }, // if tied to a project
  folderId: { type: Schema.Types.ObjectId, required: false, ref: 'Folder' }, // either for organization or prioritization
}, {
  timestamps: true, toJSON: { virtuals: true }
})

NoteSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

NoteSchema.virtual('project', {
  localField: 'projectId',
  foreignField: '_id',
  justOne: true,
  ref: 'Project'
})

NoteSchema.virtual('folder', {
  localField: 'folderId',
  foreignField: '_id',
  justOne: true,
  ref: 'folder'
})