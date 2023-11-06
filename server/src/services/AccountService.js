import { dbContext } from '../db/DbContext'
import { workspaceService } from "./WorkspaceService.js"
import { projectsService } from "./ProjectsService.js"
import { foldersService } from "./FoldersService.js"
import { notesService } from "./NotesService.js"
import { tasksService } from "./TasksService.js"
import { tagsService } from "./TagsService.js"

// Private Methods

/**
 * Creates account if one does not exist
 * @param {any} account
 * @param {any} user
 */
async function createAccountIfNeeded(account, user) {
  if (!account) {
    user._id = user.id
    if (typeof user.name == 'string' && user.name.includes('@')) {
      user.name = user.nickname
    }
    account = await dbContext.Account.create({
      ...user,
      subs: [user.sub]
    })
    // Default workspace generation upon account creation
    _createDefaults(account.id);
  }
  return account
}

async function _createDefaults(creatorId) {
  const workspace = await workspaceService.createDefaultWorkspace(creatorId);
  const tag1 = await tagsService.createFirstTags({
    creatorId, workspaceId: workspace.id,
    name: 'Critical', color: '#FF0000'
  });
  const tag2 = await tagsService.createFirstTags({
    creatorId, workspaceId: workspace.id,
    name: 'Good', color: '#00FF00'
  });
  const project = await projectsService.createProject(
    { creatorId, workspaceId: workspace.id, tagId: tag2.id, color: '#FF8800' });
  const folder = await foldersService.createFolder({
    creatorId, workspaceId: workspace.id, projectId: project.id, tagId: tag2.id,
    name: 'General', color: '#123456'
  });
  const note = await notesService.createFirstNote({
    creatorId, workspaceId: workspace.id, projectId: project.id, folderId: folder.id, tagId: tag1.id,
    body: 'Welcome to the workspace! Feel free to explore and customize the colors for the various components. For more details on how you can use this app, please see the About page available in the nav bar above.', color: '#334455'
  });
  const task = await tasksService.createTask({
    creatorId, workspaceId: workspace.id, projectId: project.id, folderId: folder.id, noteId: note.id, tagId: tag1.id,
    body: 'Test creating, assigning, and reviewing how things function', color: '#99BBEE'
  });
}


/**
 * Adds sub to account if not already on account
 * @param {any} account
 * @param {any} user
 */
async function mergeSubsIfNeeded(account, user) {
  if (!account.subs.includes(user.sub)) {
    // @ts-ignore
    account.subs.push(user.sub)
    await account.save()
  }
}
/**
 * Restricts changes to the body of the account object
 * @param {any} body
 */
function sanitizeBody(body) {
  const writable = {
    name: body.name,
    picture: body.picture,
    github: body.github,
    linkedin: body.linkedin,
    resume: body.resume,
    website: body.website,
    bio: body.bio
  }
  return writable
}

class AccountService {
  /**
   * Returns a user account from the Auth0 user object
   *
   * Creates user if none exists
   *
   * Adds sub of Auth0 account to account if not currently on account
   * @param {any} user
   */
  async getAccount(user) {
    let account = await dbContext.Account.findOne({
      _id: user.id
    })
    account = await createAccountIfNeeded(account, user)
    await mergeSubsIfNeeded(account, user)
    return account
  }

  /**
   * Updates account with the request body, will only allow changes to editable fields
   *  @param {any} user Auth0 user object
   *  @param {any} body Updates to apply to user object
   */
  async updateAccount(user, body) {
    const update = sanitizeBody(body)
    const account = await dbContext.Account.findOneAndUpdate(
      { _id: user.id },
      { $set: update },
      { runValidators: true, setDefaultsOnInsert: true, new: true }
    )
    return account
  }
}
export const accountService = new AccountService()
