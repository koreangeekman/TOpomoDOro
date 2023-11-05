<template>
  <span class="d-flex align-items-center justify-content-between p-1">
    <span class="d-flex offlineOutline">
      <input v-model="todo.body" type="checkbox" @change="toggle(todo)" :checked="todo.completed">
      <p :class="`listItem px-1 ms-1 mb-0 shadow ${todo.completed ? 'text-secondary' : ''}`"><s>{{ todo.body }}</s>
      </p>
    </span>
    <i class="fs-4 text-danger mdi mdi-trash-can" type="button" @click="removeTask(todo)"></i>
  </span>
</template>


<script>
import { ToDo } from "../../../models/Widget/ToDo.js";
import { AppState } from '../../../AppState';
import { computed } from 'vue';

export default {
  props: { todo: { type: ToDo, required: true } },

  setup(props) {
    return {
      account: computed(() => AppState.account),

    }
  }
};
</script>


<style lang="scss" scoped></style>