<template>
  <div class="m-2">
    <div class="card px-2 py-5">
      <div class="fs-1" v-html="clockTime"></div>
    </div>
  </div>
</template>


<script>
import { AppState } from '../../../AppState';
import { computed, onMounted, ref } from 'vue';

export default {
  setup() {

    const clockTime = ref('');
    const timer = ref('');

    function _drawClock() {
      const date = new Date();
      let hh = date.getHours();
      let mm = date.getMinutes();
      let ss = date.getSeconds();
      clockTime.value =
        hh +
        (ss % 2 == 0 ? '<span class="text-secondary">:</span>' : ':') +
        (mm < 10 ? '0' + mm : mm) +
        (ss % 2 == 0 ? '<span class="text-secondary">:</span>' : ':') +
        (ss < 10 ? '0' + ss : ss);
    }

    onMounted(() => {
      setInterval(_drawClock, 500);
    })

    return {
      clockTime,
      account: computed(() => AppState.account),
      settings: computed(() => AppState.settings.pomodoro),
    }

  }
};
</script>


<style lang="scss" scoped></style>