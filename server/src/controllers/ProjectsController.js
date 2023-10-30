import { Auth0Provider } from "@bcwdev/auth0provider"
import BaseController from "../utils/BaseController.js"
import { projectsService } from "../services/ProjectsService.js"


export class ProjectsController extends BaseController {
  constructor() {
    super('api/projects')
    this.router
      .get('', this.getProjects)
      .get('/:projectId', this.getProjectById)
      // 🔽 REQUIRES AUTHENTICATION 🔽
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createProject)
      .put('/:projectId', this.updateProject)
      .delete('/:projectId', this.removeProject)
  }

  async getProjects(req, res, nxt) {
    try {
      const projects = await projectsService.getProjects();
      return res.send(projects)
    } catch (error) {
      nxt(error)
    }
  }

  async getProjectById(req, res, nxt) {
    try {
      const project = await projectsService.getProjectById(req.params.projectId);
      return res.send(project)
    } catch (error) {
      nxt(error)
    }
  }

  // 🔽 REQUIRES AUTHENTICATION 🔽
  async createProject(req, res, nxt) {
    try {
      req.body.creatorId = req.userInfo.id
      const newProject = await projectsService.createProject(req.body);
      return res.send(newProject)
    } catch (error) {
      nxt(error)
    }
  }

  async updateProject(req, res, nxt) {
    try {
      const toBeUpdated = await projectsService.updateProject(req.params.projectId, req.body, req.userInfo.id);
      return res.send(toBeUpdated)
    } catch (error) {
      nxt(error)
    }
  }

  async removeProject(req, res, nxt) {
    try {
      const toBeDeleted = await projectsService.removeProject(req.params.projectId, req.userInfo.id);
      return res.send('Removed from DB: ', toBeDeleted)
    } catch (error) {
      nxt(error)
    }
  }

}