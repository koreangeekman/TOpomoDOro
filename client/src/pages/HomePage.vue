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
            <p class="fs-1 mx-5 p-3 blueBlur shadow rounded-pill"> (●'◡'●)</p>
            <p class="fs-1 p-4 blueBlur shadow rounded-pill loginNote">Login for additional functionality!</p>
            <p class="fs-1 mx-5 p-3 blueBlur shadow rounded-pill"> ✍️(◔◡◔)</p>
          </span>
        </div>
      </section>
    </div>
  </div>
  <div class="QuoteWidget d-flex justify-content-center position-absolute fixed-bottom mx-4 mx-md-5 p-0">
    <QuoteWidget />
  </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import QuoteWidget from "../components/Widgets/QuoteWidget.vue";
import ToDoWidget from "../components/Widgets/ToDo/ToDoWidget.vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    return {
      router,
      account: computed(() => AppState.account),
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
  backdrop-filter: blur(5px);
}

hr,
i {
  color: orange;
  text-shadow: 0 0 5px black;
}
</style>
