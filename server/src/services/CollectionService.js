import { dbContext } from "../db/DbContext.js";
import { logger } from "../utils/Logger.js";


function _captureData(newData) {
  const updateable = {
    name: newData.name
  }
  return updateable
}

class CollectionService {

  // 🔽 REQUIRES AUTHENTICATION 🔽

  async getCollections(creatorId, query) {
    const collections = await dbContext.Collections.find({ creatorId });
    logger.log('[COLLECTION SERVICE] getCollections(): ', collections)
    return collections;
  }

  async createCollection(body) {
    const newCollection = await dbContext.Collections.create(body);
    logger.log('[COLLECTION SERVICE] createCollection(): ', newCollection);
    return newCollection;
  }


}

export const collectionService = new CollectionService();