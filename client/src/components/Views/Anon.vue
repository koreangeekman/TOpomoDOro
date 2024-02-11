<template>
  <div class="position-relative">
    <div class="container-fluid">
      <section class="row justify-content-center p-0">
        <div class="col-12">
          <PomodoroWidget />
        </div>
        <div v-if="account.id" class="col-12 p-0 pt-md-4 pe-md-4 d-flex justify-content-end">
          <div class="row p-0">
            <div class="col-12 ToDoWidget">
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
import { computed, onMounted } from 'vue';
import ToDoWidget from "../Widgets/ToDo/ToDoWidget.vue";
import PomodoroWidget from "../Widgets/Pomodoro/PomodoroWidget.vue";

export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  },
  components: { ToDoWidget, PomodoroWidget }
};
</script>


<style lang="scss" scoped></style>