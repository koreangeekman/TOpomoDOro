import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true, maxLength: 96 },
    picture: { type: String, required: false, maxLength: 256 },
    // NOTE If you wish to add additional properties do so here
    github: { type: String, required: false, maxLength: 64 },
    linkedin: { type: String, required: false, maxLength: 64 },
    resume: { type: String, required: false, maxLength: 64 },
    website: { type: String, required: false, maxLength: 64 },
    bio: { type: String, required: false, maxLength: 500 },
    appAuthor: { type: Boolean, required: false, default: false },
    settingsId: { type: Schema.Types.ObjectId, required: false },
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

AccountSchema.virtual('todoCount', {
  localField: '_id',
  foreignField: 'creatorId',
  ref: 'ToDo',
  count: true
})

AccountSchema.virtual('settings', {
  localField: 'settingsId',
  foreignField: '_id',
  ref: 'Settings',
  justOne: true
})
