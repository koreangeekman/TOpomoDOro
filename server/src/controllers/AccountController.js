import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .get('/authors', this.getAppAuthors)
      // 🔽 REQUIRES AUTHENTICATION 🔽
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .put('', this.updateAccount)
  }

  async getAppAuthors(req, res, next) {
    try {
      const accounts = await accountService.getAppAuthors()
      res.send(accounts)
    } catch (error) {
      next(error)
    }
  }

  // SECTION 🔽 REQUIRES AUTHENTICATION 🔽

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async updateAccount(req, res, next) {
    try {
      const account = await accountService.updateAccount(req.userInfo, req.body)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
}
