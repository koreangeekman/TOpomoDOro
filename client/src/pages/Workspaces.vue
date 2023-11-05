<template>
  <div class="component">


  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, onMounted } from 'vue';
import Pop from "../utils/Pop.js";

export default {
  setup() {

    async function _getWorkspaces() {
      try {
        await workspaceService.getWorkspaces();
      } catch (error) {
        Pop.error(error)
      }
    }
    onMounted(() = {
      _getWorkspaces();
    })

    return {
      account: computed(() => AppState.account)
    }
  }
};
</script>


<style lang="scss" scoped></style>