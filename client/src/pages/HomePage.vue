<template>
  <div class="container-fluid">
    <section class="row justify-content-center">
      <div class="col-6 d-flex justify-content-center py-5">
        <QuoteWidget />


      </div>
    </section>
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import QuoteWidget from "../components/Widgets/QuoteWidget.vue";

export default {
  setup() {
    return {
      projects: computed(() => AppState.projects),
      folders: computed(() => AppState.folders),
      tasks: computed(() => AppState.tasks),
    };
  },
  components: { QuoteWidget }
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

.blueBlur {
  background-color: #123456b0;
  color: whitesmoke;
  border-radius: .25rem;
  /* width: fit-content; */
}

hr,
i {
  color: orange;
  text-shadow: 0 0 5px black;
}
</style>
