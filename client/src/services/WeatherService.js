import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";

class WeatherService {

  changeTempType() {
    AppState.settings.weather.format = 'F'
  }

  async getWeather() {
    const userSettings = AppState.settings;
    const query = `?lat=${lat}&lon=${lon}`
    const res = await api.get(`https://api.openweathermap.org/data/2.5/weather${query}`)
  }


}

export const weatherService = new WeatherService();