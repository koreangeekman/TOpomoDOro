<template>
  <div class="card shadow p-3 position-relative">
    <p v-if="task.project || task.folder" class="fs-5 fw-bold">
      {{ task.project ? task.project : '' }} {{ (task.project && task.folder) ? ' & ' : '' }} {{ task.folder ? task.folder : '' }}
    </p>
    <hr v-if="task.project || task.folder">
  
    <textarea v-if="task.edit" name="body" id="body" rows="3"></textarea>
    <p v-else>{{ task.body }}</p>
  
    <hr>
    <span class="d-flex justify-content-between">
      <button title="Edit" class="shadow btn btn-primary" @click="toggleEdit(task.id)">
        <i class="mdi mdi-pencil-outline"></i>
      </button>
      <button title="Archive" class="shadow btn btn-success" @click="archiveTask(task.id)">
        <i class="mdi mdi-package-down"></i>
      </button>
      <button title="Delete" class="shadow btn btn-danger" @click="deleteTask(task.id)">
        <i class="mdi mdi-trash-can"></i>
      </button>
    </span>
  </div>
</template>


<script>
import { Task } from "../models/Task";
import { tasksService } from "../services/TasksService.js";

export default {
  props: { task: { type: Task } },

  setup() {

    return {

      toggleEdit(taskId) {
        tasksService.toggleEdit(taskId);
      },

      archiveTask(taskId) {
        tasksService.archiveTask(taskId);
      },

      deleteTask(taskId) {
        tasksService.deleteTask(taskId);
      }



    }
  }
};
</script>


<style lang="scss" scoped>
.btn{
opacity: .8;
}
</style>