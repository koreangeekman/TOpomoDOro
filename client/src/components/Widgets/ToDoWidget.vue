<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12">
        <form class="d-flex align-items-center rounded my-2 blur" @submit.prevent="createToDo()">
          <input v-model="newToDo.body" class="form-control ms-2 shadow" type="text" name="body" placeholder="New ToDo?"
            maxlength="100">
          <button class="btn p-0" type="submit"><i class="fs-1 p-1 mdi mdi-plus-box"></i>
          </button>
        </form>
        <section v-if="todos.length > 0" class="card p-2" id="todoList">
          <div class="d-flex justify-content-between todoSmall mx-1 my-2">
            <p @click="sortList('completed')" type="button" class="mb-0 ps-1 pe-4 orange">Sort List <i
                class="mdi mdi-sort-bool-ascending-variant"></i></p>
            <div class="bar"></div>
            <p @click="toggleVisibility()" type="button" class="mb-0 px-4 orange">Remaining ToDo: {{ incomplete.length }}
            </p>
            <div class="bar"></div>
            <p @click="removeAllCompleted()" type="button" class="mb-0 ps-4 pe-1 orange" disabled>Clean up list <i
                class="mdi mdi-broom"></i></p>
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
import { AppState } from '../../AppState';
import { computed, onMounted, ref } from 'vue';
import Pop from "../../utils/Pop.js";
import ToDoListEntry from "./ToDo/ToDoListEntry.vue";
import { toDoService } from "../../services/ToDoService.js";

export default {
  setup() {
    const newToDo = ref({});

    const visibility = true; // show all

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
      account: computed(() => AppState.account),
      incomplete: computed(() => AppState.todos.filter(todo => !todo.isCompleted)),
      todos: computed(() => {
        if (visibility) {
          return AppState.todos
        } else {
          return AppState.todos.filter(todo => !todo.isCompleted)
        }
      }),

      async createToDo() {
        try {
          await toDoService.createToDo(newToDo.value);
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
}

.blur {
  background-color: #12345678;
  backdrop-filter: blur(5px);
}
</style>