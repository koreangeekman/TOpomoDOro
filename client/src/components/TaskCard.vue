<template>
  <div class="card bg-light shadow p-3 position-relative">
    <div v-if="!task.edit && (task.project || task.folder)" class="fs-5 fw-bold d-flex justify-content-between">
      <p v-if="task.project" class="mb-0">
        <i class="mdi mdi-text-box" :style="'color:', task.project.color"></i>
        {{ task.project }}
      </p>
      <p class="mb-0">{{ (task.project && task.folder) ? ' & ' : '' }} </p>
      <p v-if="task.folder" class="mb-0">
        <i class="mdi mdi-folder" :style="'color:', task.folder.color"></i>
        {{ task.folder }}
      </p>
    </div>
    <div v-if="task.edit" class="d-flex align-items-center">
      <input id="Project" type="text" class="form-control" placeholder="project">
      <p class="mb-0 mx-2">&</p>
      <input id="Folder" type="text" class="form-control" placeholder="folder">
    </div>
    <hr v-if="task.project || task.folder || task.edit">
    <div v-if="task.edit">
      <textarea v-model="task.body" class="form-control" name="body" id="body" rows="3"></textarea>
    </div>
    <p v-else class="mb-0 ms-4 ms-md-0">{{ task.body }}</p>

    <div v-if="task.creatorId == account.id">
      <hr>
      <span class="d-flex justify-content-between align-items-center">
        <button v-if="!task.edit" title="Edit" class="shadow btn btn-secondary me-auto" @click="enableEdit(task)">
          <i class="fs-3 mdi mdi-pencil-outline"></i>
        </button>
        <button v-else title="Save" class="shadow btn btn-primary me-auto" @click="saveTask(task)">
          <i class="fs-3 mdi mdi-content-save"></i>
        </button>

        <button title="Archive" class="shadow px-2 mx-2 btn btn-success" @click="archiveTask(task)">
          <i class="fs-5 mdi mdi-package-down"></i>
        </button>
        <button title="Delete" class="shadow px-2 btn btn-danger" @click="deleteTask(task)">
          <i class="fs-5 mdi mdi-trash-can"></i>
        </button>
      </span>
    </div>
    <img :src="task.creator.picture" :alt="task.creator.name" class="user rounded-circle border p-1 bg-dark">
  </div>
</template>


<script>
import { computed } from "vue";
import { Task } from "../models/Task";
import { tasksService } from "../services/TasksService.js";
import Pop from "../utils/Pop.js";
import { AppState } from "../AppState.js";

export default {
  props: { task: { type: Task } },

  setup() {

    return {
      account: computed(() => AppState.account),

      enableEdit(taskObj) {
        tasksService.enableEdit(taskObj);
      },
      saveTask(taskObj) {
        tasksService.saveTask(taskObj);
      },

      archiveTask(taskId) {
        try {
          tasksService.archiveTask(taskId);
        } catch (error) {
          Pop.error(error);
        }
      },

      deleteTask(taskId) {
        try {
          tasksService.deleteTask(taskId);
        } catch (error) {
          Pop.error(error);
        }
      }



    }
  }
};
</script>


<style lang="scss" scoped>
.user {
  position: absolute;
  height: 2.4rem;
  width: 2.4rem;
  bottom: -10px;
  right: -10px;
}

i {
  line-height: 1.5rem;
}

.btn {
  opacity: .8;
}

@media screen and (max-width: 768px) {
  .user {
    top: 0;
    left: 0;
  }
}
</style>