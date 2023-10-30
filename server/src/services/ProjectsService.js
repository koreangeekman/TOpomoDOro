import { dbContext } from "../db/DbContext.js";
import { Forbidden, NotFound } from "../utils/Errors.js";
import { logger } from "../utils/Logger.js";

function _captureData(newData) {
  const updateable = {
    name: newData.name,
    description: newData.description,
  }
  return updateable
}
class ProjectsService {

  async getProjects(query) {
    const projects = await dbContext.Projects.find(query);
    logger.log('[PROJECTS SERVICE] getProject(): ', projects)
    return projects
  }

  async getProjectById(projectId) {
    const project = await dbContext.Projects.findById(projectId);
    if (!project) { throw new NotFound(`No project with ID: ${projectId}`) }
    logger.log('[PROJECTS SERVICE] getProjectById(): ', project)
    return project
  }


  // 🔽 REQUIRES AUTHENTICATION 🔽

  async createProject(body) {
    const newProject = await dbContext.Projects.create(body);
    logger.log('[PROJECTS SERVICE] createProject(): ', newProject)
    return newProject
  }

  async removeProject(projectId, userId) {
    const toBeDeleted = await dbContext.Projects.findById(projectId);
    if (toBeDeleted.creatorId != userId) { throw new Forbidden('UNAUTHORIZED REQUEST: Not your project to remove') }
    const results = await dbContext.Projects.remove(projectId);
    logger.log('[PROJECTS SERVICE] removeProject(): ', results)
    return toBeDeleted
  }

  async updateProject(projectId, newData, userId) {
    const toBeUpdated = await dbContext.Projects.findById(projectId);
    if (toBeUpdated.creatorId != userId) { throw new Forbidden('UNAUTHORIZED REQUEST: Not your project to update') }
    const update = _captureData(newData);
    const updated = await dbContext.Projects.findOneAndUpdate(
      { _id: projectId },
      { $set: update },
      { runValidators: true, setDefaultsOnInsert: true, new: true }
    );
    logger.log('[PROJECTS SERVICE] updateProject(): ', updated)
    return updated
  }


}

export const projectsService = new ProjectsService();