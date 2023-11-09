import { AppState } from "../../AppState.js";
import { Weather } from "../../models/Widget/Weather.js";
import { weatherAPI } from "../AxiosService.js";

class WeatherService {

  changeTempType() {
    const format = AppState.settings.weather.format;
    if (format == 'F') {
      format = 'C'
    }
    if (format == 'C') {
      format = 'F'
    }
  }

  async getWeather() {
    const weather = AppState.settings.weather;
    let query = '';
    if (weather.city) {
      query = `?q=${weather.city}`;
    }
    if (weather.location.length > 0) { //weather.location = [lon, lat]
      query = `?lat=${weather.location[0]}&lon=${weather.location[1]}`;
    }
    const res = await weatherAPI.get(`${query}`);
    AppState.widgets.weather = new Weather(res.data);
  }

}

export const weatherService = new WeatherService();