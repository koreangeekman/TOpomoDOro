<template>
  <section v-if="weather.data" class="position-relative">
    <i class="position-absolute refresh fs-4 mdi mdi-refresh-circle" type="button" title="Update weather data"
      @click="refreshWeather()"></i>

    <div class="temp rounded">
      <p class="fs-2 mb-0 px-2" @click="changeTempType()">
        {{ temperature }}
      </p>
    </div>

    <span class="position-absolute hidden">
      <div class="d-md-flex justify-content-center rounded weather">

        <div class="d-block text-center weatherData px-3" id="weatherData">
          <WeatherData :data="weather.data" :temps="temps" :format="settings.format" />
        </div>

        <div class="bar d-none d-md-inline"></div>
        <div class="d-inline d-md-none">
          <hr>
        </div>

        <div class="d-flex flex-column justify-content-between weatherDetails p-3" id="weatherDetails">
          <WeatherDetails :details="weather.details" />
        </div>

      </div>
      <div class="d-flex justify-content-center text-white p-3">
        <!-- {{ weather.conditions }} -->
      </div>
    </span>

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
      try {
        await weatherService.getWeather();
        _calcVariables();
      }
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
      // setInterval(() => { _getWeather }, 900000);
    });

    return {
      temps,

      settings: computed(() => AppState.settings.weather),
      weather: computed(() => AppState.widgets.weather),

      temperature: computed(() => {
        let kelvin = AppState.widgets.weather.data.temp;
        let format = AppState.settings.weather.format;
        return _calcFormat(kelvin, format);
      }),
      // TODO QUESTION: Always access direct from AppState on computed/functions? 

      changeTempType() { weatherService.changeTempType(); },
      refreshWeather() { _getWeather(); },

    };
  },
  components: { WeatherDetails, WeatherData }
};
</script>


<style lang="scss" scoped>
i,
hr {
  color: orange;
  text-shadow: 0 0 5px black;
}

.bar {
  border-left: 1px dashed grey;
}

.temp {
  font-family: 'Courier New', Courier, monospace;
  border: 1px solid orange;
  color: orange;
  cursor: help;
}

.weather {
  font-family: 'Courier New', Courier, monospace;
  background-color: #123456f0;
  // backdrop-filter: blur(5px);
  color: whitesmoke;
  border: 1px solid white;
  width: fit-content;
  height: fit-content;
}

.weatherDetails p {
  margin-bottom: 0;
}

.refresh {
  bottom: -.9rem;
  right: -.5rem;
}

.hidden {
  opacity: 0;
  transition: .25s;
  top: 4rem;
}

.temp:hover+.hidden {
  opacity: 1;
}

@media screen and (max-width:1100px) {
  .hidden {
    top: 0;
    left: 5.5rem;
  }
}

@media screen and (max-width:768px) {
  .hidden {
    top: -8.5rem;
    left: 6.9rem;
  }
}
</style>
