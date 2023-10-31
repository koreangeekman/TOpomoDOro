<template>
  <div class="container-fluid">
    <section class="row justify-content-center" data-masonry='{"percentPosition": true }'>

      <div v-for="task in tasks" :key="task._id" class="col-3 p-3">
        <div class="card shadow p-3 position-relative">
          <p v-if="task.project || task.folder" class="fs-5 fw-bold">
            {{ task.project? task.project : '' }} {{ (task.project && task.folder)? ' & ' : '' }} {{ task.folder? task.folder : '' }}
          </p>
          <hr v-if="task.project || task.folder">
          
          <textarea v-if="task.edit" name="body" id="body" rows="3"></textarea>
          <p v-else>{{ task.body }}</p>
          
          <hr>
          <span class="d-flex justify-content-between">
            <button class="btn btn-danger" @click="deleteTask(task._id)">
              Delete <i class="mdi mdi-trash-can"></i>
            </button>
            <button class="btn btn-primary" @click="editTask()">
              Edit <i class="mdi mdi-pencil-outline"></i>
            </button>
          </span>
        </div>
      </div>

    </section>
  </div>
</template>


<script>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export default {
  setup() {
    async function _getTasks() {
      try {
        await tasksService.getTasks();
      } catch (error) {
        logger.error(error);
        Pop.error(error);
      }
    }

    onMounted(() => {
      _getTasks();
    })
    return {

      tasks: computed(() => AppState.tasks),
    
    }
  }
};
</script>


<style lang="scss" scoped>

</style>