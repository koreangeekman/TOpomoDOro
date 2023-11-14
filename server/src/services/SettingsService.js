import { dbContext } from "../db/DbContext.js";

function _filterBody(body) {
  const updateable = {
    todo: {
      showAll: body.todo.showAll,
      sortBy: body.todo.sortBy
    },
    pomodoro: {
      workTime: body.pomodoro.workTime,
      breakTime: body.pomodoro.breakTime,
      cycles: body.pomodoro.cycles,
      breakTimeAudioCue: body.pomodoro.breakTimeAudioCue,
      workTimeAudioCue: body.pomodoro.workTimeAudioCue
    },
    weather: {
      city: body.weather.city,
      format: body.weather.format,
      location: {
        lon: body.weather.location.lon,
        lat: body.weather.location.lat,
      },
      lastPoll: body.weather.lastPoll
    },
    quote: {
      enabled: body.quote.enabled,
      autoChange: body.quote.autoChange,
      cycle: body.quote.cycle
    },
    bgImg: {
      enabled: body.bgImg.enabled,
      autoChange: body.bgImg.autoChange,
      bgColor: body.bgImg.bgColor,
      cycle: body.bgImg.cycle
    },
    clock: {
      timeFormat: body.clock.timeFormat,
      timeZone: body.clock.timeZone
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
    const updates = _filterBody(body);
    const updated = await dbContext.Settings.findOneAndUpdate(
      { accountId },
      { $set: updates },
      { runValidators: true, setDefaultsOnInsert: true, new: true }
    )
    return updated
  }
}

export const settingsService = new SettingsService();