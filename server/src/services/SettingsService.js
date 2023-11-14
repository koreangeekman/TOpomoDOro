import { dbContext } from "../db/DbContext.js";

function _filterBody(body, saved) {
  const updateable = {
    todo: {
      showAll: body.todo.showAll || saved.todo.showAll,
      sortBy: body.todo.sortBy || saved.todo.sortBy
    },
    pomodoro: {
      workTime: body.pomodoro.workTime || saved.pomodoro.workTime,
      breakTime: body.pomodoro.breakTime || saved.pomodoro.breakTime,
      cycles: body.pomodoro.cycles || saved.pomodoro.cycles,
      breakTimeAudioCue: body.pomodoro.breakTimeAudioCue || saved.pomodoro.breakTimeAudioCue,
      workTimeAudioCue: body.pomodoro.workTimeAudioCue || saved.pomodoro.workTimeAudioCue
    },
    weather: {
      city: body.weather.city || saved.weather.city,
      format: body.weather.format || saved.weather.format,
      location: {
        lon: body.weather.location.lon || saved.weather.location.lon,
        lat: body.weather.location.lat || saved.weather.location.lat,
      },
      lastPoll: body.weather.lastPoll || saved.weather.lastPoll
    },
    quote: {
      enabled: body.quote.enabled || saved.quote.enabled,
      autoChange: body.quote.autoChange || saved.quote.autoChange,
      cycle: body.quote.cycle || saved.quote.cycle
    },
    bgImg: {
      enabled: body.bgImg.enabled || saved.bgImg.enabled,
      autoChange: body.bgImg.autoChange || saved.bgImg.autoChange,
      bgColor: body.bgImg.bgColor || saved.bgImg.bgColor,
      cycle: body.bgImg.cycle || saved.bgImg.cycle
    },
    clock: {
      timeFormat: body.clock.timeFormat || saved.clock.timeFormat,
      timeZone: body.clock.timeZone || saved.clock.timeZone
    }
  }
  return updateable
}

class SettingsService {

  async getSettingsByAccountId(accountId) {
    const settings = await dbContext.Settings.findOne({ accountId });
    return settings
  }

  async createSettings(body) {
    const settings = await dbContext.Settings.create(body);
    return settings
  }

  async updateSettings(accountId, body) {
    const saved = await this.getSettingsByAccountId(accountId)
    const updates = _filterBody(body, saved);
    const updated = await dbContext.Settings.findOneAndUpdate(
      { accountId },
      { $set: updates },
      { runValidators: true, setDefaultsOnInsert: true, new: true }
    )
    return updated
  }
}

export const settingsService = new SettingsService();