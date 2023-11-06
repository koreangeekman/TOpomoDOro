import { dbContext } from "../db/DbContext.js";

class NotesService {

  async createFirstNote(body) {
    const newNote = await dbContext.Notes.create(body);
    return newNote
  }
}

export const notesService = new NotesService();