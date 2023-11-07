<template>
  <div class="d-flex align-items-center justify-content-end rounded shadow p-1 ps-2 pb-2">
    <span class="d-flex w-100">
      <input v-if="!todo.edit" v-model="todo.isCompleted" type="checkbox" @change="toggleCompleted(todo)"
        :checked="todo.isCompleted">
      <input v-if="todo.edit" v-model="todo.body" type="text" maxlength="100" class="ms-2 me-3 form-control">
      <p v-else :class="`listItem px-1 mx-1 mb-0 ${todo.isCompleted ? 'text-secondary' : ''}`">
        <s v-if="todo.isCompleted">{{ todo.body }}</s>
        <span v-else>{{ todo.body }}</span>
      </p>
    </span>
    <span class="d-flex">
      <i v-if="todo.anchor" class="fs-4 ms-3 text-secondary mdi mdi-link-variant" type="button" title="Anchored note link"
        @click="routeToNotes(todo.anchor)"></i>
      <i v-else class="fs-4 ms-3 invisible mdi mdi-link-variant"></i>
      <span class="d-flex ms-4">
        <i v-if="!todo.edit && todo.isCompleted" class="fs-4 invisible mdi mdi-pencil"></i>
        <i v-else-if="!todo.edit" class="fs-4 text-secondary mdi mdi-pencil" type="button" title="Edit entry"
          @click="enableEdit(todo)"></i>
        <i v-else class="fs-4 text-primary mdi mdi-content-save" type="button" title="Save edits"
          @click="saveEdit(todo)"></i>
      </span>
      <i class="fs-4 ms-2 text-danger mdi mdi-trash-can" type="button" title="Remove entry" @click="removeToDo(todo)"></i>
    </span>
  </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../../../AppState';
import { toDoService } from "../../../services/Widgets/ToDoService.js";
import { ToDo } from "../../../models/Widget/ToDo.js";
import Pop from "../../../utils/Pop.js";

export default {
  props: { todo: { type: ToDo, required: true } },

  setup() {
    return {
      account: computed(() => AppState.account),


      async toggleCompleted(todoObj) {
        try {
          !todoObj.isCompleted;
          await toDoService.updateToDo(todoObj)
        } catch (error) {
          Pop.error(error)
        }
      },

      async enableEdit(todoObj) {
        try {
          await toDoService.enableEdit(todoObj)
        } catch (error) {
          Pop.error(error)
        }
      },

      async saveEdit(todoObj) {
        try {
          await toDoService.updateToDo(todoObj)
        } catch (error) {
          Pop.error(error)
        }
      },

      async removeToDo(todoObj) {
        try {
          const yes = await Pop.confirm('Remove this ToDo entry?');
          if (!yes) { return }
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
input[type="text"] {
  width: 100%;
}

input[type="checkbox"] {
  width: 1.2rem;
}

i {
  text-shadow: 0 0 8px black;
}

.invisible {
  visibility: hidden;
}

.mdi-pencil,
.mdi-trash-can {
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