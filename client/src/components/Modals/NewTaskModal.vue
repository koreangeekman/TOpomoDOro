<template>
  <div class="modal fade" id="newTaskModal" tabindex="-1" aria-labelledby="newTaskModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-light">
        <div class="modal-body">
          <form @submit.prevent="createTask()">
            <div class="d-flex justify-content-between">
              <span class="d-flex">
                <select v-bind="newTask.workspace" name="workspace" id="workspace">
                  <option v-for="workspace in workspaces" value="workspace.id"
                    :selected="workspace.id == appState.activeWorkspace.id">
                    <i class="fs-3 mdi mdi-office-building me-2" :style="`color:${workspace.color}`"></i>
                    {{ workspace.name }}
                  </option>
                </select>
                <h1 class="modal-title fs-5" id="newTaskModalLabel">New Task</h1>
              </span>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <hr>
            <span class="d-flex">
              <div class="mb-3 me-2 w-100">
                <label for="project">Project</label>
                <select v-model="newTask.projectId" name="project" id="project" class="form-control">
                  <option v-for="project in projects" :key="project.id" :value="project.Id"
                    :selected="project.id == appState.activeProject.id">
                    <i class="fs-3 mdi mdi-briefcase me-2" :style="`color:${project.color}`"></i>
                    {{ project.name }}
                  </option>
                </select>
              </div>
              <div class="mb-3 ms-2 w-100">
                <label for="folder">Folder</label>
                <select v-model="newTask.folderId" name="folder" id="folder" class="form-control">
                  <option v-for="folder in folders" :key="folder.id" :value="folder.Id"
                    :selected="folder.id == appState.activeFolder.id">
                    <i class="fs-3 mdi mdi-folder me-2" :style="`color:${folder.color}`"></i>
                    {{ folder.name }}
                  </option>
                </select>
              </div>
            </span>
            <span class="d-flex align-items-center">
              <div class="mb-3 me-3 w-100">
                <label for="body">Task</label>
                <input v-model="newTask.body" type="body" name="body" id="body" class="form-control" maxlength="100"
                  required>
              </div>
              <div class="mb-3 position-relative colorPicker">
                <label for="color">Color</label>
                <input v-model="newTask.color" type="color" class="border-0">
                <!-- <i class="position-absolute colorIcon fs-1 mdi mdi-calendar-check" :style="`color:${newTask.color}`"></i> -->
              </div>
            </span>
            <div class="modal-footer">
              <button type="submit" class="btn btn-success" data-bs-dismiss="modal">Create Task</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { AppState } from '../../AppState';
import { computed, onMounted, ref } from 'vue';
import Pop from "../../utils/Pop.js";
import { tasksService } from "../../services/TasksService.js";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const newTask = ref({});

    async function _getProjectList() {
      try {
        // await projectsService.getProjectList();
      } catch (error) {
        Pop.error(error)
      }
    }

    async function _getFolderList() {
      try {
        // await foldersService.getFolderList();
      } catch (error) {
        Pop.error(error)
      }
    }

    onMounted(() => {
      _getProjectList();
      _getFolderList();
    })

    return {
      newTask,
      appState: computed(() => AppState),
      account: computed(() => AppState.account),
      workspaces: computed(() => AppState.workspaces),
      projects: computed(() => AppState.projects),
      folders: computed(() => AppState.folders),
      // bgColor: computed(() => newTask.value.color),

      async createTask() {
        try {
          await tasksService.createTask(newTask.value);
          newTask.value = {};
          router.push({ name: 'Tasks' })
        } catch (error) {
          Pop.error(error)
        }
      }

    }
  }
};
</script>


<style lang="scss" scoped>
.bar {
  border-left: 1px solid darkgrey;
  opacity: .5;
}

.colorIcon {
  z-index: 0;
  top: .6rem;
  left: .5rem;
}

input[type="color"] {
  -webkit-appearance: none;
  // border-radius: 2rem;
  width: 2.5rem;
  height: 2.4rem;
  background-color: transparent;
}

input[type="color"]::-webkit-color-swatch {
  border-radius: 2rem;
}
</style>