<template>
  <div class="component">

    <span class="d-flex pt-2 align-items-center">
      <span class="d-block tempSmall pt-3 ps-2">
        <div class="d-flex align-items-center">
          <i class="mdi mdi-format-vertical-align-top"></i>
          <p class="mb-0 px-2">
            ${this.maxTempFormat}
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
            ${this.minTempFormat}
          </p>
          <i class="mdi mdi-format-vertical-align-bottom"></i>
        </div>
      </span>
    </span>

    <div class="d-flex justify-content-between align-items-center tempBig">
      <p class="mb-0 px-2">
        ${this.mainTempFormat}
      </p>
      <img class="img-fluid weatherIcon" src="https://openweathermap.org/img/wn/${this.weather['0']?.icon}.png"
        alt="${this.weather['0']?.description}">
    </div>
    <p class="tempSmall mb-4">
      Feels like: ${this.feelsLikeTempFormat}
    </p>

  </div>
</template>


<script>
import { AppState } from '../../../AppState';
import { computed, onMounted } from 'vue';

export default {
  props: { data: { type: Object } },

  setup() {

    return {

    }
  }
};
</script>


<style lang="scss" scoped></style>