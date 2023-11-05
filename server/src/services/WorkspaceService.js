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

  async updateWorkspace(adminId, workspaceId, body) {
    const updatedWorkspace = await dbContext.Workspaces.findOneAndUpdate({ adminId, workspaceId }, body)
    return updatedWorkspace
  }

  async archiveWorkspace(memberId, workspaceId) {
    const archived = await dbContext.Members.find({ memberId, workspaceId })
  }


}

export const workspaceService = new WorkspaceService();