import { Schema } from "mongoose";

export const SettingsSchema = new Schema({
  accountId: { type: Schema.Types.ObjectId, required: true },
  todo: {
    showAll: { type: Boolean, required: true, default: true },
    sortBy: { type: String, required: true, default: 'date', enum: ['date', '-date', 'alpha', '-alpha'] }
  },
  pomodoro: {
    workTime: { type: Number, required: true, default: 25, max: 300 },
    breakTime: { type: Number, required: true, default: 5, max: 60 },
    cycles: { type: Number, required: true, default: 5, max: 48 },
    breakTimeAudioCue: { type: String, required: true, default: 'default', maxLength: 200 },
    workTimeAudioCue: { type: String, required: true, default: 'default', maxLength: 200 }
  },
  weather: {
    city: { type: String, required: true, default: 'Boise', maxLength: 100 },
    format: { type: String, required: true, default: 'F', enum: ['K', 'F', 'C'] },
    location: {
      lon: { type: Number, required: true, default: -116.2035, max: 360 }, // DD: Decimal Degrees format - set at Boise
      lat: { type: Number, required: true, default: 43.6135, max: 360 }, // DD: Decimal Degrees format
    }
  },
  quote: {
    enabled: { type: Boolean, required: true, default: true },
    autoChange: { type: Boolean, required: true, default: true },
    cycle: { type: Number, required: true, default: 5, max: 1440 } // auto-refresh interval in minutes
  },
  bgImg: {
    enabled: { type: Boolean, required: true, default: true },
    autoChange: { type: Boolean, required: true, default: true },
    bgColor: { type: String, required: true, default: '#123456', maxLength: 32 }, // if bgImg is disabled/unresponsive, set a custom bg-color
    cycle: { type: Number, required: true, default: 5, max: 1440 } // auto-refresh interval in minutes
  },
  clock: {
    timeFormat: { type: String, required: true, default: '12', enum: ['12', '24'] },
    timeZone: { type: String, required: true, default: '-7', maxLength: 10 } // timezones between -11 : +14
  }
}, { timestamps: true })

SettingsSchema.index({ accountId: 1, _id: 1 }, { unique: true })
