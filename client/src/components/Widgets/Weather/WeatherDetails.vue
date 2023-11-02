<template>
  <span class="d-flex justify-content-between">
    <p class="mb-0">City: </p>
    <p class="mb-0">${this.location}</p>
  </span>
  <span class="d-flex justify-content-between">
    <p class="mb-0">Timezone: &nbsp</p>
    <p class="mb-0">GMT${this.timezone / 3600}</p>
  </span>
  <span class="d-flex justify-content-between">
    <p class="mb-0">Sunrise: &nbsp</p>
    <p class="mb-0">${this.formatSunrise}am</p>
  </span>
  <span class="d-flex justify-content-between">
    <p class="mb-0">Sunset: </p>
    <p class="mb-0">${this.formatSunset}pm</p>
  </span>
  <span class="d-flex justify-content-between">
    <p class="mb-0">Weather: </p>
    <p class="mb-0">${this.weather['0']?.main}</p>
  </span>
  <span class="d-flex justify-content-between">
    <p class="mb-0">Humidity: </p>
    <p class="mb-0">${this.main.humidity}%</p>
  </span>
</template>


<script>
import { AppState } from '../../../AppState';
import { computed, onMounted } from 'vue';

export default {
  props: { details: { type: Object } },

  setup() {

    return {

    }
  }
};
</script>


<style lang="scss" scoped></style>