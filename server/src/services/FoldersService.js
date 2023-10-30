import { dbContext } from "../db/DbContext.js";
import { Forbidden } from "../utils/Errors.js";
import { logger } from "../utils/Logger.js";

function _captureData(newData) {
  const updateable = {
    name: newData.name,
    color: newData.color,
  }
  return updateable
}
class FoldersService {

  async getFolder() {
    const folders = await dbContext.Folders.find();
    logger.log('[FOLDER SERVICE] getFolder(): ', folders)
    return folders
  }

  async getFolderById(folderId) {
    const folder = await dbContext.Folders.findById(folderId);
    logger.log('[FOLDER SERVICE] getFolderById(): ', folder)
    return folder
  }


  // 🔽 REQUIRES AUTHENTICATION 🔽

  async createFolder(body) {
    const newFolder = await dbContext.Folders.create(body);
    logger.log('[FOLDER SERVICE] createFolder(): ', newFolder)
    return newFolder
  }

  async removeFolder(folderId, userId) {
    const toBeDeleted = await dbContext.Folders.findById(folderId);
    if (toBeDeleted.creatorId != userId) { throw new Forbidden('UNAUTHORIZED REQUEST: Not your folder to remove') }
    const results = await dbContext.Folders.remove(folderId);
    logger.log('[FOLDER SERVICE] removeFolder(): ', results)
    return toBeDeleted
  }

  async updateFolder(folderId, newData, userId) {
    const toBeUpdated = await dbContext.Folders.findById(folderId);
    if (toBeUpdated.creatorId != userId) { throw new Forbidden('UNAUTHORIZED REQUEST: Not your folder to update') }
    const update = _captureData(newData);
    const updated = await dbContext.Folders.findOneAndUpdate(
      { _id: userId },
      { $set: update },
      { runValidators: true, setDefaultsOnInsert: true, new: true }
    );
    logger.log('[FOLDER SERVICE] updateFolder(): ', updated)
    return updated
  }

}

export const foldersService = new FoldersService();