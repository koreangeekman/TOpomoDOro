import { AppState } from "../AppState";
import { Task } from "../models/Task";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";


class TasksService{

  toggleEdit(taskId) {
    const specificTask = AppState.tasks.find(task => task.id = taskId);
    specificTask.edit = !specificTask.edit;
    logger.log('[TASKS SERVICE] toggleEdit(): Editing ', specificTask.edit ? 'enabled' : 'disabled', `on ${taskId}`)
  }

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
  
  
  async createTask(body) {
    const res = await api.post('api/tasks', body);
    AppState.activeTask = new Task(res.data);
    logger.log('[TASKS SERVICE] createTask(): [res.data]', res.data)
  }
  

}

export const tasksService = new TasksService();