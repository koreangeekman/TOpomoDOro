<template>
  <form class="d-flex align-items-center rounded my-2 blur sticky-top todoForm" @submit.prevent="createToDo()">
    <input v-model="newToDo.body" class="form-control ms-2 shadow" type="text" name="body" placeholder="New ToDo?"
      maxlength="200" required>
    <button class="btn p-0" type="submit" tabindex="0" title="Add ToDo">
      <i class="fs-1 p-1 mdi mdi-plus-box"></i></button>
  </form>

  <section v-if="todos.length > 0" class="card p-2" id="todoList">
    <div class="d-flex justify-content-between todoSmall mx-1 my-2">

      <!-- <span class="d-flex align-items-center pe-3" type="button" tabindex="0" @click="sortList()">
        <p class="fs-6 mb-0 px-1 orange">Sort List</p>
        <i class="fs-5 ms-1 headerIcon mdi mdi-sort-bool-ascending-variant"></i>
      </span> -->

      <div class="bar"></div>

      <span type="button" @click="toggleCompleted()" class="position-relative"
        title="Click to show/hide completed entries">
        <p class="fs-6 mb-0 px-3 orange showToggleNote" tabindex="0" v-if="todos.length == incomplete.length">
          <b>{{ todos.length }}</b> things To Do
        </p>
        <p class="fs-5 mb-0 px-3 orange showToggleNote" tabindex="0"
          v-else-if="todos.length > 0 && incomplete.length == 0">
          <b> Great Job! </b>
        </p>
        <p class="fs-6 mb-0 px-3 orange" v-else tabindex="0">
          Remaining: <b>{{ incomplete.length }}</b> of <b>{{ todos.length }}</b>
        </p>
        <p v-if="completed.length > 0"
          class="hiddenToggleNote position-absolute text-nowrap card border pb-1 px-2 rounded">
          {{ completed.length }} completed task{{ completed.length > 1 ? 's' : '' }} hidden </p>
      </span>

      <div class="bar"></div>

      <span class="d-flex align-items-center ps-2" type="button" @click="removeAllCompleted()"
        title="Remove completed tasks">
        <p class="fs-6 mb-0 px-1 orange">Clean up list</p>
        <i class="fs-4 ms-1 headerIcon mdi mdi-broom"></i>
      </span>

      <div class="bar"></div>

    </div>

    <hr class="my-1">

    <div v-for="todo in todos" :key="todo.id">
      <ToDoListEntry :todo="todo" />
    </div>

  </section>
</template>


<script>
import { computed, ref } from 'vue';
import { AppState } from '../../../AppState';
import Pop from "../../../utils/Pop.js";
import ToDoListEntry from "./ToDoListEntry.vue";
import { toDoService } from "../../../services/Widgets/ToDoService.js";

export default {
  setup() {
    const newToDo = ref({});
    const sortOpt = ref('alpha');

    return {
      newToDo,
      sortOpt,

      account: computed(() => AppState.account),
      todos: computed(() => {
        let arr = AppState.todos;
        if (AppState.settings.todo.showAll) {
          if (sortOpt.value == 'alpha') { return arr.sort((a, b) => a.body - b.body) }
          return arr
        } else {
          return arr.filter(todo => !todo.isCompleted)
        }
      }),
      incomplete: computed(() => AppState.todos.filter(todo => !todo.isCompleted)),
      completed: computed(() => AppState.todos.filter(todo => todo.isCompleted)),

      async createToDo() {
        try {
          await toDoService.createToDo(newToDo.value);
          newToDo.value = {};
        }
        catch (error) {
          Pop.error(error);
        }
      },

      async removeAllCompleted() {
        try {
          const yes = await Pop.confirm('Remove all completed entries?');
          if (!yes) { return }
          await toDoService.removeAllCompleted();
        } catch (error) {
          Pop.error(error)
        }
      },

      toggleCompleted() {
        toDoService.toggleCompleted()
      },

      sortList() {
        AppState.todos = AppState.todos.sort((a, b) => a.body - b.body)
        // toDoService.sortByFilters()
      },

    };
  },
  components: { ToDoListEntry }
};
</script>


<style lang="scss" scoped>
hr,
i,
.orange {
  color: orange;
  text-shadow: 0 0 5px black;
}

.headerIcon {
  line-height: 1rem;
}

.mdi-plus-box {
  line-height: 3.2rem;
}

.bar {
  border-left: 1px dashed grey;
}

.card {
  background-color: #123456b0;
  color: whitesmoke;
  width: fit-content;
  backdrop-filter: blur(2px);
}

.blur {
  background-color: #12345678;
  backdrop-filter: blur(5px);
}

.hiddenToggleNote {
  opacity: 0;
  visibility: hidden;
  transition: .25s;
  left: -.5rem;
  top: 1.85rem;
}

.showToggleNote:hover+.hiddenToggleNote {
  opacity: .95;
  visibility: visible;
}

.todoForm {
  top: 76px;
}
</style>