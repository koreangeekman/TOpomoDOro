<template>
  <span class="d-flex justify-content-between">
    <p class="mb-0">City: </p>
    <p class="mb-0">${details.location}</p>
  </span>
  <span class="d-flex justify-content-between">
    <p class="mb-0">Timezone: &nbsp</p>
    <p class="mb-0">GMT${details.timezone / 3600}</p>
  </span>
  <span class="d-flex justify-content-between">
    <p class="mb-0">Sunrise: &nbsp</p>
    <p class="mb-0">${details.formatSunrise}am</p>
  </span>
  <span class="d-flex justify-content-between">
    <p class="mb-0">Sunset: </p>
    <p class="mb-0">${details.formatSunset}pm</p>
  </span>
  <span class="d-flex justify-content-between">
    <p class="mb-0">Weather: </p>
    <p class="mb-0">${details.weather['0']?.main}</p>
  </span>
  <span class="d-flex justify-content-between">
    <p class="mb-0">Humidity: </p>
    <p class="mb-0">${details.humidity}%</p>
  </span>
</template>


<script>
export default {
  props: { details: { type: Object } },

  setup() {

    return {

    }
  }
};
</script>


<style lang="scss" scoped></style>