<template>
  <section v-if="account.id" class="position-relative">
    <div class="col-12">
      <div class="temp">
        <p class="fs-1 mb-0 px-2">
          {{ temperature }}
        </p>
      </div>
    </div>
    <span class="position-absolute">
      <div class="col-12 col-md-auto d-flex weather" onclick="changeTempType()">
        <div class="d-block text-center weatherData px-3" id="weatherData">
          <WeatherData :dataProp="weather.data" :temps="temps" :format="settings.format" />
        </div>
        <div class="bar"></div>
        <div class="d-flex flex-column justify-content-between weatherDetails p-3" id="weatherDetails">
          <WeatherDetails :details="weather.details" />
        </div>
      </div>
      <div class="col-12 col-md-auto d-flex justify-content-center text-white p-3">
        <!-- {{ weather.conditions }} -->
      </div>
    </span>
    <!-- <i class="position-absolute refresh fs-4 mdi mdi-refresh-circle" onclick="refreshWeather()"></i> -->
  </section>

  <section v-if="false">
    <!-- https://openweathermap.org/price -->
    <!-- https://openweathermap.org/full-price#current -->
    <!-- https://openweathermap.org/appid -->
    <!-- https://openweathermap.org/current -->
    <!-- https://bulk.openweathermap.org/sample/ -->
    <!-- https://www.iso.org/iso-3166-country-codes.html ISO 3166 country codes -->
  </section>
</template>


<script>
import { AppState } from "../../../AppState";
import { computed, onMounted, ref } from 'vue';
import { logger } from "../../../utils/Logger.js";
import Pop from "../../../utils/Pop.js";
import WeatherData from "./WeatherData.vue";
import WeatherDetails from "./WeatherDetails.vue";
import { weatherService } from "../../../services/Widgets/WeatherService.js";

export default {
  setup() {

    const temps = ref({});

    async function _getWeather() {
      try { await weatherService.getWeather(); logger.log('got weather data', AppState.widgets.weather) }
      catch (error) { Pop.error(error); }
    }

    function _calcFormat(temp, format) {
      if (format == 'F') { return `${((temp - 273.15) * (9 / 5) + 32).toFixed(0)}ºF` }
      if (format == 'C') { return `${(temp - 273.15).toFixed(1)}ºC` }
      return `${temp.toFixed(2)}ºK`
    }

    function _calcVariables() {
      const formats = ['K', 'F', 'C'] // HAH
      formats.forEach(format => {
        const weatherData = AppState.widgets.weather
        logger.log('calculating format:', format)
        const mainTemp = _calcFormat(weatherData.data.temp, format)
        const minTemp = _calcFormat(weatherData.data.temp_min, format)
        const maxTemp = _calcFormat(weatherData.data.temp_max, format)
        const feels_like = _calcFormat(weatherData.data.feels_like, format)
        temps.value[format] = { mainTemp, minTemp, maxTemp, feels_like }
      })
      logger.log('calculated temps', temps.value)
    }

    onMounted(async () => {
      await _getWeather();
      _calcVariables();
    });

    return {
      temps,

      account: computed(() => AppState.account),
      settings: computed(() => AppState.settings.weather),
      weather: computed(() => AppState.widgets.weather),

      temperature: computed(() => {
        let kelvin = AppState.widgets.weather.data.temp;
        let format = AppState.settings.weather.format;
        return _calcFormat(kelvin, format);
      }),
      // QUESTION: Always access direct from AppState on computed/functions? 

      async changeTempType() {
        try { await weatherService.changeTempType(); }
        catch (error) { Pop.error(error) }
      },

    };
  },
  components: { WeatherDetails, WeatherData }
};
</script>


<style lang="scss" scoped>
i {
  color: orange;
  text-shadow: 0 0 5px black;
}

.bar {
  border-left: 1px dashed grey;
}

.weather {
  font-family: 'Courier New', Courier, monospace;
  background-color: #123456b0;
  color: whitesmoke;
  border: 1px solid white;
  border-radius: 1rem;
  width: fit-content;
  height: fit-content;
}

.weatherDetails p {
  margin-bottom: 0;
}

.temp {
  cursor: help;
}

#temp:hover+#tempDetails {
  font-family: 'Courier New', Courier, monospace;
  border: 1px solid white;
  border-radius: 1rem;
}
</style>
