<template>
  <div class="component">
    <div class="weatherData">
      {{ temperature }}
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed } from 'vue';

export default {
  setup() {

    function _calcFormat(temp, format) {
      if (format == 'F') { return `${((temp - 273.15) * (9 / 5) + 32).toFixed(0)}ºF` }
      if (format == 'C') { return `${(temp - 273.15).toFixed(1)}ºC` }
      return `${temp.toFixed(2)}ºK`
    }

    return {
      // account: computed(() => AppState.account),
      settings: computed(() => AppState.settings.weather),
      temperature: computed(() => {
        let kelvin = AppState.widgets.weather.data.temp;
        let format = settings.format;
        return _calcFormat(kelvin, format);
      }),
    }
  }
};
</script>


<style lang="scss" scoped></style>