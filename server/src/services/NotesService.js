import { dbContext } from "../db/DbContext.js";
import { logger } from "../utils/Logger.js";

class NotesService {

  async createNote(body) {
    const newNote = await dbContext.Notes.create(body);
    logger.log('[NOTES SERVICE] this.createNote(): ', newNote)
    return newNote
  }
}

export const notesService = new NotesService();