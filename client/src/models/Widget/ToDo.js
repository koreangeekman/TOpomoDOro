export class ToDo {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.completed = data.completed
    this.creatorId = data.creatorId
    this.edit = false
  }
}