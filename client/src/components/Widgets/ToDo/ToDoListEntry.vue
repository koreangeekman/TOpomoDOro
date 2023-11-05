<template>
  <div class="d-flex align-items-center justify-content-between p-1">
    <span class="d-flex">
      <input v-model="todo.body" type="checkbox" @change="toggle(todo)" :checked="todo.completed">
      <p :class="`listItem px-1 ms-1 mb-0 shadow ${todo.isCompleted ? 'text-secondary' : ''}`"><s>{{ todo.body }}</s>
      </p>
    </span>
    <i class="fs-4 text-danger mdi mdi-trash-can" type="button" title="Remove entry" @click="removeToDo(todo)"></i>
  </div>
</template>


<script>
import { ToDo } from "../../../models/Widget/ToDo.js";
import { AppState } from '../../../AppState';
import { computed } from 'vue';
import { toDoService } from "../../../services/ToDoService.js";
import Pop from "../../../utils/Pop.js";

export default {
  props: { todo: { type: ToDo, required: true } },

  setup(props) {
    return {
      account: computed(() => AppState.account),

      async removeToDo(todoObj) {
        try {
          await toDoService.removeToDo(todoObj);
        } catch (error) {
          Pop.error(error)
        }
      }

    }
  }
};
</script>


<style lang="scss" scoped>
i {
  opacity: .8;
}

.listItem {
  border-radius: .25rem;
}

.offlineOutline {
  border: 1px dashed red;
  opacity: .5;
}
</style>