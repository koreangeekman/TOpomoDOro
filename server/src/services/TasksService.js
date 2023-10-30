import { dbContext } from "../db/DbContext.js";
import { Forbidden } from "../utils/Errors.js";
import { logger } from "../utils/Logger.js";

function _captureData(newData) {
  const updateable = {
    body: newData.body,
    completed: newData.completed,
    projectId: newData.projectId
  }
  return updateable
}
class TasksService {

  async getTasks() {
    const tasks = await dbContext.Tasks.find();
    logger.log('[TASKS SERVICE] getTasks(): ', tasks)
    return tasks
  }

  async getTaskById(taskId) {
    const task = await dbContext.Tasks.findById(taskId);
    logger.log('[TASKS SERVICE] getTaskById(): ', task)
    return task
  }

  // 🔽 REQUIRES AUTHENTICATION 🔽

  async createTask(body) {
    const newTask = await dbContext.Tasks.create(body);
    logger.log('[TASKS SERVICE] createTask(): ', newTask)
    return newTask
  }

  async removeTask(taskId, userId) {
    const toBeDeleted = await dbContext.Tasks.findById(taskId);
    if (toBeDeleted.creatorId != userId) { throw new Forbidden('UNAUTHORIZED REQUEST: Not your task to remove') }
    const results = await dbContext.Tasks.remove(taskId);
    logger.log('[TASKS SERVICE] removeTask(): ', results)
    return toBeDeleted
  }

  async updateTask(taskId, newData, userId) {
    const toBeUpdated = await dbContext.Tasks.findById(taskId);
    if (toBeUpdated.creatorId != userId) { throw new Forbidden('UNAUTHORIZED REQUEST: Not your task to update') }
    const update = _captureData(newData);
    const updated = await dbContext.Tasks.findOneAndUpdate(
      { _id: userId },
      { $set: update },
      { runValidators: true, setDefaultsOnInsert: true, new: true }
    );
    logger.log('[TASKS SERVICE] updateTask(): ', updated)
    return updated
  }


}

export const tasksService = new TasksService();