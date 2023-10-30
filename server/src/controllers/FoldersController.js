import { Auth0Provider } from "@bcwdev/auth0provider"
import BaseController from "../utils/BaseController.js"
import { foldersService } from "../services/FoldersService.js"


export class FoldersController extends BaseController {
  constructor() {
    super('api/folders')
    this.router
      .get('', this.getFolders)
      .get('/:folderId', this.getFolderById)
      // 🔽 REQUIRES AUTHENTICATION 🔽
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createFolder)
      .put('/:folderId', this.updateFolder)
      .delete('/:folderId', this.removeFolder)
  }

  async getFolders(req, res, nxt) {
    try {
      const folders = await foldersService.getFolders(req.query);
      return res.send(folders)
    } catch (error) {
      nxt(error)
    }
  }

  async getFolderById(req, res, nxt) {
    try {
      const folder = await foldersService.getFolderById(req.params.folderId);
      return res.send(folder)
    } catch (error) {
      nxt(error)
    }
  }

  // 🔽 REQUIRES AUTHENTICATION 🔽
  async createFolder(req, res, nxt) {
    try {
      req.body.creatorId = req.userInfo.id
      const newFolder = await foldersService.createFolder(req.body);
      return res.send(newFolder)
    } catch (error) {
      nxt(error)
    }
  }

  async updateFolder(req, res, nxt) {
    try {
      const toBeUpdated = await foldersService.updateFolder(req.params.folderId, req.body, req.userInfo.id);
      return res.send(toBeUpdated)
    } catch (error) {
      nxt(error)
    }
  }

  async removeFolder(req, res, nxt) {
    try {
      const toBeDeleted = await foldersService.removeFolder(req.params.folderId, req.userInfo.id);
      return res.send('Removed from DB: ', toBeDeleted)
    } catch (error) {
      nxt(error)
    }
  }

}