<template>
  <div class="d-flex align-items-center justify-content-end rounded shadow p-1 ps-2 mb-1">
    <span class="d-flex w-100 shown">
      <i v-if="todo.edit" class="fs-4 text-secondary mdi mdi-cancel" type="button" title="Cancel edit" tabindex="0"
        @click="cancelEdit(todo)"></i>
      <input v-if="!todo.edit" v-model="todo.isCompleted" type="checkbox" @change="toggleCompleted(todo)"
        :checked="todo.isCompleted">
      <input v-if="todo.edit" v-model="todo.body" id="editMe" type="text" maxlength="200" class="ms-2 me-3 form-control"
        @blur="saveEdit(todo)">
      <p v-else :class="`listItem px-1 mx-1 mb-0 ${todo.isCompleted ? 'text-secondary' : ''}`" tabindex="0">
        <s v-if="todo.isCompleted">{{ todo.body }}</s>
        <span v-else>{{ todo.body }}</span>
      </p>
    </span>
    <span class="d-flex" :class="!todo.edit ? 'hidden' : ''">
      <span class="d-flex mx-3">
        <i v-if="!todo.edit && todo.isCompleted" class="fs-4 invisible mdi mdi-pencil"></i>
        <i v-else-if="!todo.edit" class="fs-4 text-secondary mdi mdi-pencil" id="enableEdit" type="button"
          title="Edit entry" @click="enableEdit(todo)" tabindex="0"></i>
        <i v-else class="fs-4 text-primary mdi mdi-content-save" type="button" tabindex="0" title="Save edits"
          @click="saveEdit(todo)"></i>
      </span>
      <i class="fs-4 text-danger mdi mdi-trash-can" type="button" tabindex="0" title="Remove entry"
        @click="removeToDo(todo)"></i>
    </span>
  </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../../../AppState';
import Pop from "../../../utils/Pop.js";
import { ToDo } from "../../../models/Widget/ToDo.js";
import { toDoService } from "../../../services/Widgets/ToDoService.js";

export default {
  props: { todo: { type: ToDo, required: true } },

  setup() {
    return {
      account: computed(() => AppState.account),

      async toggleCompleted(todoObj) {
        try {
          !todoObj.isCompleted;
          await toDoService.updateToDo(todoObj);
        }
        catch (error) { Pop.error(error); }
      },

      enableEdit(todoObj) {
        toDoService.enableEdit(todoObj);
        document.getElementById('enableEdit').addEventListener('click', () => {
          document.getElementById('editMe').focus();
        })
      },

      cancelEdit(todoObj) {
        toDoService.cancelEdit(todoObj);
      },

      async saveEdit(todoObj) {
        try { await toDoService.updateToDo(todoObj); }
        catch (error) { Pop.error(error); }
      },

      async removeToDo(todoObj) {
        try {
          const yes = await Pop.confirm('Remove this ToDo entry?');
          if (!yes) { return }
          await toDoService.removeToDo(todoObj);
        }
        catch (error) { Pop.error(error); }
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
  transition: .25s;
}

.mdi-pencil:hover,
.mdi-trash-can:hover {
  transform: scale(1.2);
}

.mdi-cancel {
  margin-left: -.15rem;
}

.listItem {
  border-radius: .25rem;
}

.offlineOutline {
  border: 1px dashed red;
  opacity: .5;
}

.hidden {
  opacity: 0;
  transition: .25s;
}

.hidden:hover {
  opacity: 1;
}

.shown:hover+.hidden {
  opacity: 1;
}
</style>