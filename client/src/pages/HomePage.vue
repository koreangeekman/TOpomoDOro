<template>
  <div class="position-relative">
    <div class="container-fluid">
      <section class="row p-1 p-md-4">
        <div v-if="viewMode.name == 'defaultPoDo'" class="col-12">
          <Anon />
          <!-- Session storage only - no DB saves -->
        </div>
        <div v-else-if="viewMode.name == 'singleToDo'" class="col-12">
          <SingleToDo />
        </div>
        <div v-else-if="viewMode.name == 'multiToDo'" class="col-12">
          <!-- <MultiToDo /> -->
        </div>
        <div v-else-if="viewMode.name == 'streamerPoDo'" class="col-12">
          <!-- <StreamerPoDo /> -->
        </div>
        <div v-else-if="viewMode.name == 'streamerToDo'" class="col-12">
          <!-- <StreamerToDo /> -->
        </div>
        <div v-else-if="viewMode.name == 'streamerMultiToDo'" class="col-12">
          <!-- <StreamerMultiToDo /> -->
        </div>
      </section>
    </div>
  </div>
  <!-- rename to PoDo? Logo of korean grapes? bunches of ToDos with max 3-5 items? -->
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import Anon from "../components/Views/Anon.vue";
import SingleToDo from "../components/Views/SingleToDo.vue";

export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      viewMode: computed(() => AppState.settings.viewMode),

    };
  },
  components: { Anon, SingleToDo }
}
</script>


<style scoped lang="scss">
.blueBlur {
  background-color: #123456b0;
  color: whitesmoke;
  border-radius: .25rem;
  backdrop-filter: blur(5px);
}

hr,
i {
  color: orange;
  text-shadow: 0 0 5px black;
}
</style>
