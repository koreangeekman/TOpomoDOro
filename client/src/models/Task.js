export class Task {
  constructor(data) {
    this.id = data.id || data._id
    this.body = data.body
    this.completed = data.completed
    this.color = data.color
    this.workspaceId = data.workspaceId
    this.workspace = data.workspace
    this.creatorId = data.creatorId
    this.creator = data.creator
    this.projectId = data.projectId
    this.project = data.project
    this.folderId = data.folderId
    this.folder = data.folder
    this.noteId = data.noteId
    this.note = data.note
    this.edit = false

  }
}
