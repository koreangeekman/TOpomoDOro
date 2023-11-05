<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 col-lg-6">

      </div>
    </section>
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

    onMounted(() => {
      // _getWorkspaces();
    })

    return {
      account: computed(() => AppState.account)
    }
  }
};
</script>


<style lang="scss" scoped></style>