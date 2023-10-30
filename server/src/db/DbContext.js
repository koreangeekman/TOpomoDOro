import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { TaskSchema } from "../models/Task.js";

class DbContext {
  Account = mongoose.model('Account', AccountSchema);

  // SECTION TODO
  Tasks = mongoose.model('Task', TaskSchema);


}

export const dbContext = new DbContext()
