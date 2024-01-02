import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { todoService } from "../services/ToDoService.js";
import { collectionService } from "../services/CollectionService.js";

export class CollectionController extends BaseController {
  constructor() {
    super('api/collections')
    this.router
      // 🔽 REQUIRES AUTHENTICATION 🔽
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getCollections) // by UserId
      .get('/:collectionId/todos', this.getToDosByCollectionId)
      .post('', this.createCollection)
      .put('/:collectionId', this.editCollection)
      .delete('/:collectionId/empty', this.emptyCollection)
      .delete('/:collectionId', this.deleteCollection)
  }

  // 🔽 REQUIRES AUTHENTICATION 🔽

  async getCollections(req, res, nxt) {
    try {
      const collections = await collectionService.getCollections(req.userInfo.id, req.query);
      return res.send(collections);
    }
    catch (error) { nxt(error); }
  }

  async getToDosByCollectionId(req, res, nxt) {
    try {
      const todos = await todoService.getToDosByCollectionId(req.userInfo.id, req.params.collectionId);
      return res.send(todos);
    }
    catch (error) { nxt(error); }
  }

  async createCollection(req, res, nxt) {
    try {
      req.body.creatorId = req.userInfo.id;
      const collection = await collectionService.createCollection(req.body);
      return res.send(collection);
    }
    catch (error) { nxt(error); }
  }

  async editCollection(req, res, nxt) {
    try {
      const collection = await collectionService.editCollection(req.userInfo.id, req.params.collectionId, req.body);
      return res.send(collection);
    }
    catch (error) { nxt(error); }
  }

  async emptyCollection(req, res, nxt) {
    try {
      const collection = await collectionService.emptyCollection(req.userInfo.id);
      return res.send(collection);
    }
    catch (error) { nxt(error); }
  }

  async deleteCollection(req, res, nxt) {
    try {
      const toBeDeleted = await collectionService.removeToDo(req.userInfo.id, req.params.collectionId);
      return res.send(toBeDeleted);
    }
    catch (error) { nxt(error); }
  }

}