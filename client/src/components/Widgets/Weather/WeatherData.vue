<template>
  <div v-if="temps.C?.mainTemp" class="weatherData">

    <span class="d-flex align-items-center pt-2">

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
      <img class="img-fluid weatherIcon" :src="data.weatherIcon" :alt="data.weather">
    </div>

    <p class="tempSmall">
      Feels like: {{ temps[format].feels_like }}
    </p>

  </div>
</template>


<script>
export default {
  props: {
    data: { type: Object },
    temps: { type: Object },
    format: { type: String }
  },
  setup() { return {} }
};
</script>


<style lang="scss" scoped>
.tempSmall {
  font-size: 1rem;
  line-height: 1rem;
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