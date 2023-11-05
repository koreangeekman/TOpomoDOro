import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ToDoSchema } from "../models/ToDo.js";
import { TaskSchema } from "../models/Task.js";
import { NoteSchema } from "../models/Note.js";
import { FolderSchema } from "../models/Folder.js";
import { ProjectSchema } from "../models/Project.js";
import { WorkspaceSchema } from "../models/Workspace.js";

class DbContext {
  Account = mongoose.model('Account', AccountSchema);

  // SECTION TODO RELATED DB ENTRIES
  ToDos = mongoose.model('ToDo', ToDoSchema);

  Notes = mongoose.model('Note', NoteSchema);
  Tasks = mongoose.model('Task', TaskSchema);
  Folders = mongoose.model('Folder', FolderSchema);
  Projects = mongoose.model('Project', ProjectSchema);
  Workspaces = mongoose.model('Workspace', WorkspaceSchema);

}

export const dbContext = new DbContext()
