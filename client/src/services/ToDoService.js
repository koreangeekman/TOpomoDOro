import { AppState } from "../AppState.js";
import { ToDo } from "../models/Widget/ToDo.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class ToDoService {

  // SECTION 🔽 AUTHENTICATION REQUIRED 🔽

  async getToDos() {
    const res = await api.get('api/todos');
    const todos = res.data.map(todo => new ToDo(todo));
    AppState.todos = todos;
    logger.log('[TODO SERVICE] getToDos(): ', todos);
  }

  async createToDo(todoObj) {
    const res = await api.post('api/todos', todoObj);
    const newToDo = new ToDo(res.data);
    AppState.todos.push(newToDo);
    logger.log('[TODO SERVICE] createToDo(): ', newToDo);
  }

  enableEdit(todoObj) {
    todoObj.edit = true;
    logger.log('[TODO SERVICE] enableEdit(): Editing enabled', `on ${todoObj}`)
  }

  async updateToDo(todoObj) {
    if (todoObj.creatorId != AppState.account.id) { throw new Error('Not yours to edit') }
    const res = await api.put(`api/todos/${todoObj.id}`, todoObj)
    todoObj.edit = false;
    logger.log('[TODO SERVICE] updateToDo(): [res.data]', res.data);
  }

  async removeToDo(todoObj) {
    if (todoObj.creatorId != AppState.account.id) { throw new Error('Not yours to remove') }
    const res = await api.delete(`api/todos/${todoObj.id}`)
    AppState.todos = AppState.todos.filter(todo => todo.id != todoObj.id);
    logger.log('[TODO SERVICE] removeToDo(): [res.data]', res.data);
  }

  async removeAllCompleted() {
    const completed = AppState.todos.filter(todo => todo.isCompleted)
    const filtered = AppState.todos.filter(todo => !completed.find(done => done.id == todo.id));
    AppState.todos = filtered;
    const res = await api.delete('api/todos/')
    logger.log('[TODO SERVICE] removeAllCompleted(): [res.data]', res.data, 'filtered', filtered);
  }

}

export const toDoService = new ToDoService();