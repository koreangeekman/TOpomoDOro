<template>
  <div class="fs-1" v-html="clock"></div>
</template>


<script>
import { AppState } from '../../../AppState';
import { computed, onMounted, ref } from 'vue';

export default {
  setup() {

    const clock = ref('');
    const timer = ref('');

    function _drawClock() {
      const date = new Date(); let ampm = '';
      let hh = date.getHours(); let mm = date.getMinutes(); let ss = date.getSeconds();
      if (AppState.settings.clock.timeFormat == 12) {
        if (hh == 0) {
          hh = 12;
          ampm = 'am';
        } else if (hh == 12) {
          ampm = 'pm';
        } else if (hh > 12) {
          hh -= 12;
          ampm = 'pm';
        } else {
          ampm = 'am';
        }
      }
      clock.value = hh + (ss % 2 == 0 ? '<span class="text-secondary">:</span>' : ':') + (mm < 10 ? '0' + mm : mm) + `${ampm}`;
    }

    onMounted(() => {
      setInterval(_drawClock, 500);
    })

    return {
      clock,
      account: computed(() => AppState.account),
      settings: computed(() => AppState.settings.pomodoro),
    }

  }
};
</script>


<style lang="scss" scoped></style>