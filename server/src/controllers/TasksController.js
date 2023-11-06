import { Auth0Provider } from "@bcwdev/auth0provider"
import BaseController from "../utils/BaseController.js"
import { tasksService } from "../services/TasksService.js"


export class TasksController extends BaseController {
  constructor() {
    super('api/tasks')
    this.router
      // 🔽 REQUIRES AUTHENTICATION 🔽
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getTasks)
      .get('/:taskId', this.getTaskById)
      .post('', this.createTask)
      .put('/:taskId', this.updateTask)
      .delete('/:taskId', this.removeTask)
  }

  async getTasks(req, res, nxt) {
    try {
      const tasks = await tasksService.getTasks(req.userInfo.id, req.body, req.query);
      return res.send(tasks)
    } catch (error) {
      nxt(error)
    }
  }

  async getTaskById(req, res, nxt) {
    try {
      const tasks = await tasksService.getTaskById(req.params.taskId);
      return res.send(tasks)
    } catch (error) {
      nxt(error)
    }
  }

  // 🔽 REQUIRES AUTHENTICATION 🔽
  async createTask(req, res, nxt) {
    try {
      req.body.creatorId = req.userInfo.id
      const tasks = await tasksService.createTask(req.body);
      return res.send(tasks)
    } catch (error) {
      nxt(error)
    }
  }

  async updateTask(req, res, nxt) {
    try {
      const toBeUpdated = await tasksService.updateTask(req.params.taskId, req.body, req.userInfo.id);
      return res.send(toBeUpdated)
    } catch (error) {
      nxt(error)
    }
  }

  async removeTask(req, res, nxt) {
    try {
      const toBeDeleted = await tasksService.removeTask(req.params.taskId, req.userInfo.id);
      return res.send('Removed from DB: ', toBeDeleted)
    } catch (error) {
      nxt(error)
    }
  }

}