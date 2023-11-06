import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ToDoSchema } from "../models/ToDo.js";
import { TaskSchema } from "../models/Task.js";
import { NoteSchema } from "../models/Note.js";
import { FolderSchema } from "../models/Folder.js";
import { ProjectSchema } from "../models/Project.js";
import { WorkspaceSchema } from "../models/Workspace.js";
import { MemberSchema } from "../models/Member.js";
import { TagSchema } from "../models/Tag.js";

class DbContext {
  Account = mongoose.model('Account', AccountSchema);

  // SECTION TODO RELATED DB ENTRIES
  ToDos = mongoose.model('ToDo', ToDoSchema);

  Tasks = mongoose.model('Task', TaskSchema);
  Notes = mongoose.model('Note', NoteSchema);
  Folders = mongoose.model('Folder', FolderSchema);
  Projects = mongoose.model('Project', ProjectSchema);
  Tags = mongoose.model('Tag', TagSchema);
  Workspaces = mongoose.model('Workspace', WorkspaceSchema);
  Members = mongoose.model('Member', MemberSchema);

}

export const dbContext = new DbContext()
