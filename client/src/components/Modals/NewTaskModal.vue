<template>
  <div class="modal fade" id="newTaskModal" tabindex="-1" aria-labelledby="newTaskModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="newTaskModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <span class="d-flex justify-content-between">
              <div class="mb-3">
                <label for="project">Project</label>
                <select name="project" id="project" class="form-select">
                  <option v-for="project in projects" :key="project.id" :value="project.Id">
                    <i class="fs-5 mdi mdi-circle" :style="'color:', project.color"></i>
                    {{ project.name }}
                  </option>
                </select>
              </div>
              <div class="bar mx-2"></div>
              <div class="mb-3">
                <label for="folder">Folder</label>
                <select name="folder" id="folder" class="form-select">
                  <option v-for="folder in folders" :key="folder.id" :value="folder.Id">
                    <i class="fs-5 mdi mdi-circle" :style="'color:', folder.color"></i>
                    {{ folder.name }}
                  </option>
                </select>
              </div>
            </span>

            <div class="modal-footer">
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
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

export default {
  setup() {
    const newTask = ref({})

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
  border-left: 1px dashed #ff8000;
  opacity: .67
}
</style>