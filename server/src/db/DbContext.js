import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { TaskSchema } from "../models/Task.js";
import { FolderSchema } from "../models/Folder.js";
import { ProjectSchema } from "../models/Project.js";

class DbContext {
  Account = mongoose.model('Account', AccountSchema);

  // SECTION TODO RELATED DB ENTRIES
  Tasks = mongoose.model('Task', TaskSchema);
  Projects = mongoose.model('Project', ProjectSchema)
  Folders = mongoose.model('Folder', FolderSchema)

}

export const dbContext = new DbContext()
