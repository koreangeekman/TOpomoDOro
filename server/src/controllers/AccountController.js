import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'
import { settingsService } from "../services/SettingsService.js"

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .get('/authors', this.getAppAuthors)
      // 🔽 REQUIRES AUTHENTICATION 🔽
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/settings', this.getSettingsByAccountId)
      .put('', this.updateAccount)
      .put('/settings', this.updateSettings)
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
  async getSettingsByAccountId(req, res, next) {
    try {
      const account = await settingsService.getSettingsByAccountId(req.userInfo.id)
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

  async updateSettings(req, res, next) {
    try {
      const account = await settingsService.updateSettings(req.userInfo.id, req.body)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
}
