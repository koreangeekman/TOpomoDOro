<template>
  <div class="position-relative">
    <div class="container-fluid">
      <section class="row justify-content-center p-0">
        <div v-if="account.id" class="col-12 p-0 position-relative d-flex justify-content-end">
          <div class="p-0 pt-md-4 pe-md-4 ToDoWidget">
            <ToDoWidget />
          </div>
        </div>
        <div v-else class="col-12 p-5 d-flex flex-column align-items-center">
          <span class="d-flex mb-4 align-items-center justify-content-center flex-wrap">
            <p class="fs-1 mx-5 p-3 blueBlur rounded-pill"> (●'◡'●)</p>
            <p class="fs-1 p-5 blueBlur rounded-pill loginNote">Login for additional functionality!</p>
            <p class="fs-1 mx-5 p-3 blueBlur rounded-pill"> ✍️(◔◡◔)</p>
          </span>
          <p class="fs-5 p-3 mb-5 blueBlur rounded-pill">
            ( See the <i @click="router.push({ name: 'About' })" type="button">ABOUT</i> page for more info )
          </p>
          <p class="fs-3 p-3 mb-5 blueBlur rounded-pill"> ● Personal ToDo list for quick and easy basic task tracking </p>

          <p class="fs-3 p-3 blueBlur rounded-pill"> ● Shared Workspaces for larger workloads</p>
          <p class="fs-3 p-3 blueBlur rounded-pill"> ● Create Projects, Folders, Notes, and Tasks </p>
          <p class="fs-3 p-3 blueBlur rounded-pill"> ● Assign notes to projects and folders </p>
          <p class="fs-3 p-3 blueBlur rounded-pill"> ● Assign tasks to projects, folders and notes </p>
          <p class="fs-3 p-3 blueBlur rounded-pill"> ● Populate your ToDo list with tasks from the workspace</p>

        </div>
      </section>
    </div>
  </div>
  <div class="QuoteWidget d-flex justify-content-center position-absolute fixed-bottom mx-3 p-0">
    <QuoteWidget />
  </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import QuoteWidget from "../components/Widgets/QuoteWidget.vue";
import ToDoWidget from "../components/Widgets/ToDoWidget.vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    return {
      router,
      account: computed(() => AppState.account),
      projects: computed(() => AppState.projects),
      folders: computed(() => AppState.folders),
      tasks: computed(() => AppState.tasks),
    };
  },
  components: { QuoteWidget, ToDoWidget }
}
</script>


<style scoped lang="scss">
.blueBlur {
  background-color: #123456b0;
  color: whitesmoke;
  border-radius: .25rem;
}

hr,
i {
  color: orange;
  text-shadow: 0 0 5px black;
}
</style>
