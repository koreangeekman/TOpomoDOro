import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";
import { logger } from "../utils/Logger.js";

function _captureData(newData) {
  const updateable = {
    body: newData.body,
    completed: newData.completed,
    color: newData.color,
    projectId: newData.projectId,
    folderId: newData.folderId
  }
  return updateable
}
class TasksService {

  async getTasks(creatorId, workspaceId) {
    const tasks = await dbContext.Tasks.find({ creatorId, workspaceId })
      .populate('creator', 'name picture')
      .populate('workspace', 'name');
    logger.log('[TASKS SERVICE] getTasks(): ', tasks)
    return tasks
  }

  async getTaskById(taskId) {
    const task = await dbContext.Tasks.findById(taskId).populate('creator', 'name picture');
    if (!task) { throw new BadRequest(`No task with ID: ${taskId}`) }
    logger.log('[TASKS SERVICE] getTaskById(): ', task)
    return task
  }

  // 🔽 REQUIRES AUTHENTICATION 🔽

  async createTask(body) {
    const newTask = await dbContext.Tasks.create(body);
    await newTask.populate('creator', 'name picture')
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
      { _id: taskId },
      { $set: update },
      { runValidators: true, setDefaultsOnInsert: true, new: true }
    );
    logger.log('[TASKS SERVICE] updateTask(): ', updated)
    return updated
  }


}

export const tasksService = new TasksService();