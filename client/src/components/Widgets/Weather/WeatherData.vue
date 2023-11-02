<template>
  <div class="component">

    <span class="d-flex pt-2 align-items-center">
      <span class="d-block tempSmall pt-3 ps-2">
        <div class="d-flex align-items-center">
          <i class="mdi mdi-format-vertical-align-top"></i>
          <p class="mb-0 px-2">
            {{ temps.maxTemp[settings.weather.format] }}
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
            {{ temps.minTemp[settings.weather.format] }}
          </p>
          <i class="mdi mdi-format-vertical-align-bottom"></i>
        </div>
      </span>
    </span>

    <div class="d-flex justify-content-between align-items-center tempBig">
      <p class="mb-0 px-2">
        {{ temps.mainTemp[settings.weather.format] }}
      </p>
      <img class="img-fluid weatherIcon" :src="`https://openweathermap.org/img/wn/${data.weather['0']?.icon}.png`"
        :alt="`${data.weather['0']?.description}`">
    </div>
    <p class="tempSmall mb-4">
      Feels like: {{ temps.feels_like[settings.weather.format] }}
    </p>

  </div>
</template>


<script>
import { AppState } from '../../../AppState';
import { computed, onMounted } from 'vue';

export default {
  props: { data: { type: Object } },

  setup(props) {

    const temps = {}

    function _mainTempFormatted(format) {
      let temp = props.data.temp;
      if (format == 'F') { return `${((temp - 273.15) * (9 / 5) + 32).toFixed(0)}ºF` }
      if (format == 'C') { return `${(temp - 273.15).toFixed(1)}ºC` }
      return `${temp.toFixed(2)}ºK`
    }

    function _minTempFormatted(format) {
      let temp = props.data.temp_min;
      if (format == 'F') { return `${((temp - 273.15) * (9 / 5) + 32).toFixed(0)}ºF` }
      if (format == 'C') { return `${(temp - 273.15).toFixed(1)}ºC` }
      return `${temp.toFixed(2)}ºK`
    }

    function _maxTempFormatted(format) {
      let temp = props.data.temp_max;
      if (format == 'F') { return `${((temp - 273.15) * (9 / 5) + 32).toFixed(0)}ºF` }
      if (format == 'C') { return `${(temp - 273.15).toFixed(1)}ºC` }
      return `${temp.toFixed(2)}ºK`
    }

    function _feelsLikeTempFormatted(format) {
      let temp = props.data.feels_like;
      if (format == 'F') { return `${((temp - 273.15) * (9 / 5) + 32).toFixed(0)}ºF` }
      if (format == 'C') { return `${(temp - 273.15).toFixed(1)}ºC` }
      return `${temp.toFixed(2)}ºK`
    }

    function _calcVariables() {
      const formats = ['K', 'F', 'C'] // HAH
      formats.forEach(format => {
        temps.mainTemp[format] = _mainTempFormatted(format)
        temps.minTemp[format] = _minTempFormatted(format)
        temps.maxTemp[format] = _maxTempFormatted(format)
        temps.feels_like[format] = _feelsLikeTempFormatted(format)
      })
    }

    onMounted(() => {
      _calcVariables
    })
    return {
      temps,
      settings: computed(() => AppState.settings)

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