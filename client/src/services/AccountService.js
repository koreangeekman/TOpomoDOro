import { AppState } from '../AppState'
import { Account } from '../models/Account.js'
import { logger } from '../utils/Logger'
import Pop from "../utils/Pop"
import { api } from './AxiosService'

class AccountService {
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
      const res = await api.put(`/account/${newData.id}`, newData);
      AppState.account = new Account(res.data);
    } catch (error) {
      logger.error(error);
      Pop.error(error);
    }
  }

}

export const accountService = new AccountService()
