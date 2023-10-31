<template>
  <div class="container-fluid">
    <section class="row justify-content-center" data-masonry='{"percentPosition": true }'>
    
      <div v-for="task in tasks" :key="task.id" class="col-3 p-3">
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

export default {
    setup() {
        async function _getTasks() {
            try {
                await tasksService.getTasks();
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


<style lang="scss" scoped>

</style>