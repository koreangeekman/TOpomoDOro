<template>
  <div class="container-fluid">
    <section class="row justify-content-center" data-masonry>

      <div v-for="task in tasks" :key="task.id"
        class="col-12 col-md-6 col-lg-5 col-xl-4 col-xxl-3 p-2 p-lg-3 p-xxl-4 pe-2 pe-md-3 ">
        <TaskCard :task="task" />
      </div>

    </section>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import TaskCard from "../components/TaskCard.vue";
import { tasksService } from "../services/TasksService";
// import Masonry from "masonry-layout";

export default {
  setup() {
    async function _getTasks() {
      try {
        await tasksService.getTasks();
        let row = document.querySelector("[data-masonry]")
        new Masonry(row, { percentPosition: true })
      }
      catch (error) {
        logger.error(error);
        Pop.error(error);
      }
    }
    onMounted(() => {
      _getTasks();
    });
    return {
      tasks: computed(() => AppState.tasks),
    };
  },
  components: { TaskCard }
};
</script>

<style lang="scss" scoped></style>