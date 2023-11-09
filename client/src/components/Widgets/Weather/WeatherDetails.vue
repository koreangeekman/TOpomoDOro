<template>
  <span class="d-flex justify-content-between">
    <p class="mb-0">City: </p>
    <p class="mb-0">{{ details.city }}</p>
  </span>
  <span class="d-flex justify-content-between">
    <p class="mb-0">Timezone: &nbsp</p>
    <p class="mb-0">GMT{{ details.timezone / 3600 }}</p>
  </span>
  <span class="d-flex justify-content-between">
    <p class="mb-0">Sunrise: &nbsp</p>
    <p class="mb-0">{{ formatSunrise() }}am</p>
  </span>
  <span class="d-flex justify-content-between">
    <p class="mb-0">Sunset: </p>
    <p class="mb-0">{{ formatSunset() }}pm</p>
  </span>
  <span class="d-flex justify-content-between">
    <p class="mb-0">Weather: </p>
    <p class="mb-0">{{ details.weather }}</p>
  </span>
  <span class="d-flex justify-content-between">
    <p class="mb-0">Humidity: </p>
    <p class="mb-0">{{ details.humidity }}%</p>
  </span>
</template>


<script>
export default {
  props: { details: { type: Object } },

  setup(props) {

    return {

      formatSunrise() {
        const sunrise = props.details.sunrise
        console.log('sunrise formatted', sunrise);
        const hh = sunrise.getHours(); const mm = sunrise.getMinutes(); const ss = sunrise.getSeconds();
        return hh + ':' + (mm < 10 ? "0" + mm : mm) + ':' + (ss < 10 ? "0" + ss : ss)
      },

      formatSunset() {
        const sunset = props.details.sunset
        console.log('sunset formatted', sunset);
        const hh = sunset.getHours(); const mm = sunset.getMinutes(); const ss = sunset.getSeconds();
        return hh + ':' + (mm < 10 ? "0" + mm : mm) + ':' + (ss < 10 ? "0" + ss : ss)
      }
    }
  }
};
</script>


<style lang="scss" scoped></style>