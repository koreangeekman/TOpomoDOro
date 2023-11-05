<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 col-md-auto d-none">
        <form class="d-flex align-items-center" @submit="addTask()">
          <input class="form-control" type="text" name="description" placeholder="New Task?" maxlength="32">
          <button class="btn p-0" type="submit"><i class="fs-3 p-1 mdi mdi-plus-box"></i>
          </button>
        </form>
        <section v-if="todos.length > 0" class="card p-2" id="todoList">
          <div class="d-flex justify-content-between todoSmall mx-1 my-2">
            <i @click="sortList('completed')" type="button" class="pe-2">Sort List <i
                class="mdi mdi-sort-bool-ascending-variant"></i></i>
            <div class="bar"></div>
            <i @click="toggleVisibility()" type="button" class="px-2">Tasks remaining: &nbsp
              ${incomplete.length}</i>
            <div class="bar"></div>
            <i @click="clearAll()" type="button" class="ps-2" disabled>Clear list <i class="mdi mdi-broom"></i></i>
          </div>

          <div v-for="todo in todos" :key="todo.id">
            <ToDoListEntry :todo="todo" />
          </div>

        </section>
      </div>
    </section>
  </div>
</template>


<script>
import { AppState } from '../../AppState';
import { computed, onMounted, ref } from 'vue';
import Pop from "../../utils/Pop.js";
import ToDoListEntry from "./ToDo/ToDoListEntry.vue";
import { toDoService } from "../../services/ToDoService.js";

export default {
  setup() {
    const newToDo = ref('');

    // async function _getToDos() {
    //   try {
    //     await toDoService.getToDos();
    //   }
    //   catch (error) {
    //     Pop.error(error);
    //   }
    // }

    onMounted(() => {
      // via AuthService
    });

    return {
      account: computed(() => AppState.account),
      todos: computed(() => AppState.todos),

      async createToDo() {
        try {
          await toDoService.createToDo(newToDo.value);
        }
        catch (error) {
          Pop.error(error);
        }
      }

    };
  },
  components: { ToDoListEntry }
};
</script>


<style lang="scss" scoped></style>