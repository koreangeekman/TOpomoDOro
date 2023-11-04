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
    workspaceId: { type: Schema.Types.ObjectId, required: true, ref: 'Workspace' }, // tied to a shared workspace
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

AccountSchema.virtual('workspaces', {
  localField: 'workspaceId',
  foreignField: '_id',
  ref: 'Workspace'
})