import { AppState } from "../AppState";
import { Task } from "../models/Task";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";


class TasksService {


  // SECTION API CALLS

  async getTasks() {
    const res = await api.get('api/tasks');
    AppState.tasks = res.data.map(task => new Task(task));
    logger.log('[TASKS SERVICE] getTasks(): [res.data]', res.data)
  }

  async getTaskById(taskId) {
    const res = await api.get(`api/tasks/${taskId}`);
    AppState.activeTask = new Task(res.data);
    logger.log('[TASKS SERVICE] getTaskById(): [res.data]', res.data)
  }

  // SECTION 🔽 REQUIRES AUTHENTICATION 🔽

  async createTask(body) {
    const res = await api.post('api/tasks', body);
    AppState.tasks.push(new Task(res.data));
    // AppState.activeTask = new Task(res.data);
    logger.log('[TASKS SERVICE] createTask(): [res.data]', res.data)
  }

  enableEdit(taskObj) {
    // const specificTask = AppState.tasks.find(task => task.id = taskObj.id);
    // specificTask.edit = true;
    taskObj.edit = true;
    logger.log('[TASKS SERVICE] enableEdit(): Editing ', specificTask.edit ? 'enabled' : 'disabled', `on ${taskObj}`)
  }

  async saveTask(taskObj) {
    // const specificTask = AppState.tasks.find(task => task.id = taskObj.id);
    // specificTask.edit = true;
    taskObj.edit = false;
    const res = await api.put(`api/tasks/${taskObj.id}`, taskObj)
    logger.log('[TASKS SERVICE] saveTask(): ', specificTask.edit ? 'enabled' : 'disabled', `on ${taskObj}`)
  }

}

export const tasksService = new TasksService();