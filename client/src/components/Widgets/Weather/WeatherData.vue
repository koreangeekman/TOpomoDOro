<template>
  <div v-if="temps.C?.mainTemp" class="weatherData position-absolute">

    <span class="d-flex pt-2 align-items-center">
      <span class="d-block tempSmall pt-3 ps-2">
        <div class="d-flex align-items-center">
          <i class="mdi mdi-format-vertical-align-top"></i>
          <p class="mb-0 px-2">
            {{ temps[format].maxTemp }}
          </p>
        </div>
        <div>
          <hr>
        </div>
      </span>

      <i class="fs-1 px-3 mdi mdi-plus-minus-variant"></i>

      <span class="d-block tempSmall pb-4 pe-2">
        <div>
          <hr>
        </div>
        <div class="d-flex align-items-center">
          <p class="mb-0 px-2">
            {{ temps[format].minTemp }}
          </p>
          <i class="mdi mdi-format-vertical-align-bottom"></i>
        </div>
      </span>
    </span>

    <div class="d-flex justify-content-between align-items-center tempBig">
      <p class="mb-0 px-2">
        {{ temps[format].mainTemp }}
      </p>
      <img class="img-fluid weatherIcon" :src="dataProp.weatherIcon" :alt="dataProp.weather">
    </div>
    <p class="tempSmall mb-4">
      Feels like: {{ temps[format].feels_like }}
    </p>

  </div>
</template>


<script>
import { computed, onMounted, ref } from 'vue';
import { AppState } from '../../../AppState';
import { logger } from "../../../utils/Logger.js";

export default {
  props: {
    dataProp: { type: Object },
    temps: { type: Object },
    format: { type: String }
  },

  setup(props) {

    onMounted(() => {
      // calcVariables();
    })

    return {
      // settings: computed(() => AppState.settings.weather),

      // calcVariables() {
      //   const formats = ['K', 'F', 'C'] // HAH
      //   formats.forEach(format => {
      //     logger.log('calculating format:', format)
      //     const mainTemp = _calcFormat(props.dataProp.temp, format)
      //     const minTemp = _calcFormat(props.dataProp.temp_min, format)
      //     const maxTemp = _calcFormat(props.dataProp.temp_max, format)
      //     const feels_like = _calcFormat(props.dataProp.feels_like, format)
      //     temps.value[format] = { mainTemp, minTemp, maxTemp, feels_like }
      //   })
      //   logger.log('calculated temps', temps.value)
      // },

    }
  }
};
</script>


<style lang="scss" scoped>
.tempSmall {
  font-size: 1rem;
  line-height: .5rem;
}

.tempBig {
  margin-top: -1rem;
  font-size: 3.2rem;
  line-height: 3.2rem;
}

.weatherIcon {
  height: 86px;
  width: 86px;
}
</style>