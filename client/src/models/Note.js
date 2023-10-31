export class Note{
  constructor(data) {
    this.id = data.id || data._id
    this.body = data.body
    this.color = data.color
    this.creatorId = data.creatorId
    this.creator = data.creator
    this.projectId = data.projectId
    this.project = data.project
    this.folderId = data.folderId
    this.folder = data.folder
    this.edit = false
    
  }
}
