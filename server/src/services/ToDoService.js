import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";
import { logger } from "../utils/Logger.js";

function _captureData(newData) {
  const updateable = {
    body: newData.body,
    isCompleted: newData.isCompleted
  }
  return updateable
}
class ToDoService {

  async getToDos(query, creatorId) {
    const todos = await dbContext.ToDos.find({ creatorId });
    logger.log('[TODO SERVICE] getToDos(): ', todos)
    return todos
  }

  async getToDoById(_id, creatorId) {
    const todo = await dbContext.ToDos.find({ creatorId, _id });
    if (!todo) { throw new BadRequest(`No todo with ID: ${_id}`) }
    logger.log('[TODO SERVICE] getToDoById(): ', todo)
    return todo
  }

  // 🔽 REQUIRES AUTHENTICATION 🔽

  async createToDo(body) {
    const newToDo = await dbContext.ToDos.create(body);
    await newToDo.populate('creator', 'name picture')
    logger.log('[TODO SERVICE] createToDo(): ', newToDo)
    return newToDo
  }

  async updateToDo(todoId, newData, userId) {
    const toBeUpdated = await dbContext.ToDos.findById(todoId);
    if (toBeUpdated.creatorId != userId) { throw new Forbidden('UNAUTHORIZED REQUEST: Not your do to update') }
    const update = _captureData(newData);
    const updated = await dbContext.ToDos.findOneAndUpdate(
      { _id: todoId },
      { $set: update },
      { runValidators: true, setDefaultsOnInsert: true, new: true }
    );
    logger.log('[TODO SERVICE] updateToDo(): ', updated)
    return updated
  }

  async removeToDo(todoId, userId) {
    const toBeDeleted = await dbContext.ToDos.findById(todoId);
    if (toBeDeleted.creatorId != userId) { throw new Forbidden('UNAUTHORIZED REQUEST: Not your do to remove') }
    const results = await dbContext.ToDos.remove(todoId);
    logger.log('[TODO SERVICE] removeToDo(): ', results)
    return toBeDeleted
  }

}

export const todoService = new ToDoService();