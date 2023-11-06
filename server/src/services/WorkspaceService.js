import { dbContext } from "../db/DbContext.js";

class WorkspaceService {

  async getWorkspaces(memberId, query) {
    const workspaces = await dbContext.Workspaces.find({ memberId })
      .populate('members', 'name picture');
    return workspaces;
  }

  async createWorkspace(body) {
    const newWorkspace = await dbContext.Workspaces.create(body);
    await newWorkspace.populate('creator');
    return newWorkspace
  }

  async createDefaultWorkspace(creatorId) {
    const newWorkspace = await dbContext.Workspaces.create({
      creatorId, name: 'General',
      description: 'Your first workspace! Edit this to fit your style and needs~'
    });
    await newWorkspace.populate('creator');
    return newWorkspace
  }

  async updateWorkspace(creatorId, workspaceId, body) {
    const updatedWorkspace = await dbContext.Workspaces.findOneAndUpdate({ creatorId, workspaceId }, body)
    return updatedWorkspace
  }

  async archiveWorkspace(creatorId, workspaceId) {
    const archived = await dbContext.Members.findOneAndUpdate({ creatorId, workspaceId }, { isArchived: true })
    return archived
  }

}

export const workspaceService = new WorkspaceService();