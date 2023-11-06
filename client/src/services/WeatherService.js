import { AppState } from "../AppState.js";
import { weatherAPI } from "./AxiosService.js";

class WeatherService {

  changeTempType() {
    AppState.settings.weather.format = 'F'
  }

  async getWeather() {
    const userSettings = AppState.settings.weather;
    const query = `?lat=${lat}&lon=${lon}`
    const res = await weatherAPI.get(`${query}`)
  }


}

export const weatherService = new WeatherService();