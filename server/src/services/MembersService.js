import { dbContext } from "../db/DbContext.js";

class MembersService {

  async getMembersOfWorkspace(workspaceId) {
    const members = await dbContext.Members.find({ workspaceId }).populate('members', 'name picture')
    return members
  }

}

export const membersService = new MembersService();