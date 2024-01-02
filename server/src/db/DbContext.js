import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ToDoSchema } from "../models/ToDo.js";
import { SettingsSchema } from "../models/Settings.js";
import { CollectionSchema } from "../models/Collection.js";

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Settings = mongoose.model('Settings', SettingsSchema);

  ToDos = mongoose.model('ToDo', ToDoSchema);
  Collections = mongoose.model('Collection', CollectionSchema);

}

export const dbContext = new DbContext()
