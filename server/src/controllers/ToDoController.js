import { Auth0Provider } from "@bcwdev/auth0provider"
import BaseController from "../utils/BaseController.js"
import { todoService } from "../services/ToDoService.js"


export class ToDoController extends BaseController {
  constructor() {
    super('api/todos')
    this.router
      // 🔽 REQUIRES AUTHENTICATION 🔽
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getToDos)
      .get('/:todoId', this.getToDoById)
      .post('', this.createToDo)
      .put('/:todoId', this.updateToDo)
      .delete('/:todoId', this.removeToDo)
  }

  // 🔽 REQUIRES AUTHENTICATION 🔽

  async getToDos(req, res, nxt) {
    try {
      const todos = await todoService.getToDos(req.userInfo.id, req.query);
      return res.send(todos)
    } catch (error) {
      nxt(error)
    }
  }

  async getToDoById(req, res, nxt) {
    try {
      const todo = await todoService.getToDoById(req.userInfo.id, req.params.todoId);
      return res.send(todo)
    } catch (error) {
      nxt(error)
    }
  }

  async createToDo(req, res, nxt) {
    try {
      req.body.creatorId = req.userInfo.id
      const todos = await todoService.createToDo(req.body);
      return res.send(todos)
    } catch (error) {
      nxt(error)
    }
  }

  async updateToDo(req, res, nxt) {
    try {
      const toBeUpdated = await todoService.updateToDo(req.params.todoId, req.body, req.userInfo.id);
      return res.send(toBeUpdated)
    } catch (error) {
      nxt(error)
    }
  }

  async removeToDo(req, res, nxt) {
    try {
      const toBeDeleted = await todoService.removeToDo(req.params.todoId, req.userInfo.id);
      return res.send('Removed from DB: ', toBeDeleted)
    } catch (error) {
      nxt(error)
    }
  }

}