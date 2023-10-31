<template>
  <div>
    <p class="fs-1">some stuff</p>
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState";

export default {
  setup() {
    return {
      projects: computed(() => AppState.projects),
      folders: computed(() => AppState.folders),
      tasks: computed(() => AppState.tasks),

    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
