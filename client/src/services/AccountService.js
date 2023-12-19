import { AppState } from '../AppState'
import { Account } from '../models/Account.js'
import { Settings } from "../models/Settings.js"
import { logger } from "../utils/Logger"
import { api } from './AxiosService'
import Pop from "../utils/Pop"

class AccountService {

  async getAppAuthors() {
    try {
      const res = await api.get('/account/authors');
      AppState.authors = res.data.map(author => new Account(author));
    } catch (error) {
      Pop.error(error)
    }
  }

  // SECTION 🔽 AUTHORIZATION REQUIRED 🔽

  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = new Account(res.data)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async updateProfile(newData) {
    try {
      const res = await api.put('/account', newData);
      AppState.account = new Account(res.data);
    } catch (error) {
      Pop.error(error);
    }
  }

  async getSettings() {
    try {
      const res = await api.get('/account/settings')
      AppState.settings = new Settings(res.data)
    } catch (error) {
      Pop.error(error)
    }
  }

  async updateSettings(newData) {
    try {
      const res = await api.put('/account/settings', newData);
      AppState.settings = new Settings(res.data);
    } catch (error) {
      Pop.error(error);
    }
  }

}

export const accountService = new AccountService()
