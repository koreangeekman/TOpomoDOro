import { AppState } from '../AppState'
import { Settings } from '../models/Settings.js'
import { logger } from '../utils/Logger'
import Pop from "../utils/Pop"
import { api } from './AxiosService'

class SettingsService {
  async getSettings() {
    try {
      const res = await api.get('/account/settings')
      AppState.settings = new Settings(res.data)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
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

export const settingsService = new SettingsService()
