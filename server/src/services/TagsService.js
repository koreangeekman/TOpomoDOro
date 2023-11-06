import { dbContext } from "../db/DbContext.js";
import { Forbidden } from "../utils/Errors.js";

class TagsService {

  async getTagById(_id) {
    const tag = (await dbContext.Tags.findById(_id)).populate('useCount');
    return tag
  }

  async createFirstTags(body) {
    const newWorkspace = await dbContext.Tags.create({ body });
    await newWorkspace.populate('creator');
    return newWorkspace
  }

  async createTag(creatorId, body) {
    body.creatorId = creatorId;
    const newTag = await dbContext.Tags.create(body)
    return newTag
  }

  async removeTag(creatorId, tagObj) {
    const thisTag = await this.getTagById(tagObj.id);
    if (thisTag.creatorId != creatorId) {
      throw new Forbidden('You do not own this object')
    }
    // if (thisTag.useCount > 0) {
    // }
    tagObj.isArchived = true;
    const results = await dbContext.Tags.findOneAndUpdate({ _id: tagObj.id }, tagObj)
    return results
  }

}

export const tagsService = new TagsService();