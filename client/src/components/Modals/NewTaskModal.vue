<template>
  <div class="modal fade" id="newTaskModal" tabindex="-1" aria-labelledby="newTaskModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-light">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="newTaskModalLabel">New Task</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <span class="d-flex">
              <div class="mb-3 w-100">
                <label for="project">Project</label>
                <select name="project" id="project" class="form-control">
                  <option v-for="project in projects" :key="project.id" :value="project.Id">
                    <i class="fs-5 mdi mdi-text-box" :style="'color:', project.color"></i>
                    {{ project.name }}
                  </option>
                </select>
              </div>
              <div class="bar mx-3"></div>
              <div class="mb-3 w-100">
                <label for="folder">Folder</label>
                <select name="folder" id="folder" class="form-control">
                  <option v-for="folder in folders" :key="folder.id" :value="folder.Id">
                    <i class="fs-5 mdi mdi-folder" :style="'color:', folder.color"></i>
                    {{ folder.name }}
                  </option>
                </select>
              </div>
            </span>
            <div class="mb-3">
              <label for="body">Task</label>
              <input type="body" name="body" id="body" class="form-control" maxlength="100" required>
            </div>
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

export default {
  setup() {
    const newTask = ref({})

    async function _getProjectList() {
      try {
        // await projectsService.getProjectList()
      } catch (error) {
        Pop.error(error)
      }
    }
    async function _getFolderList() {
      try {
        // await foldersService.getFolderList()
      } catch (error) {
        Pop.error(error)
      }
    }

    onMounted(() => {
      _getProjectList();
      _getFolderList();
    })

    return {
      account: computed(() => AppState.account),
      projects: computed(() => AppState.projects),
      folders: computed(() => AppState.folders),

    }
  }
};
</script>


<style lang="scss" scoped>
.bar {
  border-left: 1px solid darkgrey;
  opacity: .5;
}
</style>