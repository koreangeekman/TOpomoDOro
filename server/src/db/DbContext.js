import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ToDoSchema } from "../models/ToDo.js";

class DbContext {
  Account = mongoose.model('Account', AccountSchema);

  ToDos = mongoose.model('ToDo', ToDoSchema);

}

export const dbContext = new DbContext()
