export class ToDo {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.isCompleted = data.isCompleted || false
    this.creatorId = data.creatorId
    this.edit = false
  }
}