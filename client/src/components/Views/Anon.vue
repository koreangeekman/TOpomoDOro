<template>
  <div class="position-relative">
    <div class="container-fluid">
      <section :class="`row p-0 ${viewMode.hAlign}`">
        <div :class="`col-12 col-md-${viewMode.pomoColWidth} p-0 pt-md-4 pe-md-4 ${viewMode.vAlign}`">
          <PomodoroWidget />
        </div>
        <div v-if="account.id" :class="`col-12 col-md-${viewMode.todoColWidth} p-0 pt-md-4 pe-md-4  ${viewMode.vAlign}`">
          <div class="row p-0">
            <div class="col-12">
              <ToDoWidget />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
import { AppState } from '../../AppState';
import { computed } from 'vue';
import ToDoWidget from "../Widgets/ToDo/ToDoWidget.vue";
import PomodoroWidget from "../Widgets/Pomodoro/PomodoroWidget.vue";

export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      viewMode: computed(() => AppState.settings.viewMode),

    }
  },
  components: { ToDoWidget, PomodoroWidget }
};
</script>


<style lang="scss" scoped></style>