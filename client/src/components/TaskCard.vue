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
      <button class="btn btn-danger" @click="deleteTask(task._id)">
        Delete <i class="mdi mdi-trash-can"></i>
      </button>
      <button class="btn btn-primary" @click="toggleEdit()">
        Edit <i class="mdi mdi-pencil-outline"></i>
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
      }
    }
  }
};
</script>


<style lang="scss" scoped></style>