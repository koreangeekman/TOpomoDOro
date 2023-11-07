<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12">
        <form class="d-flex align-items-center rounded my-2 blur" @submit.prevent="createToDo()">
          <input v-model="newToDo.body" class="form-control ms-2 shadow" type="text" name="body" placeholder="New ToDo?"
            maxlength="100">
          <button class="btn p-0" type="submit"><i class="fs-1 p-1 mdi mdi-plus-box"></i></button>
        </form>
        <section v-if="todos.length > 0" class="card p-2" id="todoList">
          <div class="d-flex justify-content-between todoSmall mx-1 my-2">
            <span class="d-flex align-items-center pe-3" type="button" @click="sortList()">
              <p class="fs-5 mb-0 px-1 orange">Sort List</p>
              <i class="fs-4 ms-1 headIcon mdi mdi-sort-bool-ascending-variant"></i>
            </span>
            <div class="bar"></div>
            <p v-if="todos.length == incomplete.length" class="fs-5 mb-0 px-4 mx-4 orange" type="button"
              @click="toggleVisibility()">
              <b>{{ todos.length }}</b> things To Do
            </p>
            <p v-else class="fs-5 mb-0 px-3 orange" type="button" @click="toggleVisibility()">
              Remaining ToDo: <b>{{ incomplete.length }}</b> of <b>{{ todos.length }}</b>
            </p>
            <div class="bar"></div>
            <span class="d-flex align-items-center ps-2" type="button" @click="removeAllCompleted()">
              <p class="fs-5 mb-0 px-1 orange" disabled>Clean up list</p>
              <i class="fs-3 ms-1 headIcon mdi mdi-broom"></i>
            </span>
          </div>
          <hr class="my-1">
          <div v-for="todo in todos" :key="todo.id">
            <ToDoListEntry :todo="todo" />
          </div>

        </section>
      </div>
    </section>
  </div>
</template>


<script>
import { computed, onMounted, ref } from 'vue';
import { AppState } from '../../../AppState';
import Pop from "../../../utils/Pop.js";
import ToDoListEntry from "./ToDoListEntry.vue";
import { toDoService } from "../../../services/Widgets/ToDoService.js";

export default {
  setup() {
    const newToDo = ref({});

    const visibility = ref(true); // show all

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
      newToDo,
      visibility: computed(() => AppState.visibility),
      account: computed(() => AppState.account),
      incomplete: computed(() => AppState.todos.filter(todo => !todo.isCompleted)),
      todos: computed(() => {
        if (visibility) {
          return AppState.todos
        } else {
          return AppState.todos.filter(todo => !todo.isCompleted)
        }
      }),

      toggleVisibility() {
        visibility = false;
      },

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
      }

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

.headIcon {
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
</style>