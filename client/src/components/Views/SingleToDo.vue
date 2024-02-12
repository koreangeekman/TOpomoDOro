<template>
  <div class="position-relative">
    <div class="container-fluid">
      <section :class="`row p-0 ${viewMode.hAlign}`">
        <div :class="`col-12 col-md-${todoColWidth} p-0 pt-md-4 pe-md-4 ${viewMode.vAlign}`">
          <ToDoWidget />
        </div>
      </section>
    </div>
  </div>
</template>


<script>
import { AppState } from '../../AppState';
import { computed } from 'vue';
import ToDoWidget from "../Widgets/ToDo/ToDoWidget.vue";

export default {
  setup() {
    return {
      viewMode: computed(() => AppState.settings.viewMode),
      todoColWidth: computed(() => AppState.settings.todo.todoColWidth),

    }
  },
  components: { ToDoWidget }
};
</script>


<style lang="scss" scoped></style>