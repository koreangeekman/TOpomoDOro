<template>
  <section class="position-relative">
    <div class="col-12 col-md-auto d-flex weather" onclick="changeTempType()">
      <div class="d-block text-center temp pe-3" id="weather">
        <WeatherData :data="weather.data" />
      </div>
      <div class="bar"></div>
      <div class="d-flex flex-column justify-content-between p-3" id="weatherDetails">
        <WeatherDetails :details="weather.details" />
      </div>
    </div>
    <!-- <i class="position-absolute refresh fs-4 mdi mdi-refresh-circle" onclick="refreshWeather()"></i> -->
  </section>

  <section v-if="false">
    <!-- https://openweathermap.org/price -->
    <!-- https://openweathermap.org/full-price#current -->
    <!-- https://openweathermap.org/appid -->
    <!-- https://openweathermap.org/current -->
    <!-- https://bulk.openweathermap.org/sample/ -->
  </section>
</template>


<script>
import { AppState } from "../../../AppState";
import { computed, onMounted } from 'vue';
import { logger } from "../../../utils/Logger.js";
import Pop from "../../../utils/Pop.js";
import WeatherData from "./WeatherData.vue";
import WeatherDetails from "./WeatherDetails.vue";
import { weatherService } from "../../../services/WeatherService.js";

export default {
  setup() {

    async function _getWeather() {
      try {
        await weatherService.getWeather();
      }
      catch (error) {
        logger.error(error);
        Pop.error(error);
      }
    }

    onMounted(() => {
      // _getWeather();
    });

    return {
      settings: computed(() => AppState.settings),
      weather: computed(() => AppState.weather),

      async changeTempType() {
        try {
          await weatherService.changeTempType();
        }
        catch (error) {
          logger.error(error);
          Pop.error(error);
        }
      }

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
