<template>
  <div class="position-relative">
    <div class="container-fluid">
      <section class="row justify-content-center p-0">
        <div v-if="account.id" class="col-12 p-0 pt-md-4 pe-md-4 d-flex justify-content-end">
          <div class="row p-0">
            <div class="col-12 ToDoWidget">
              <ToDoWidget />
            </div>
          </div>
        </div>
        <div v-else-if="!authQueried" class="col-12 p-5 d-flex justify-content-center">
          <span class="fs-1 text-white blueBlur rounded-pill px-3 d-flex align-items-center">
            <i class="mdi mdi-tire mdi-spin"></i>
            <p class="mb-0 mx-3 fs-3">LOADING</p>
            <i class="mdi mdi-tire mdi-spin"></i>
          </span>
        </div>
        <div v-else-if="!account.id && authQueried" class="col-12 p-5 d-flex flex-column align-items-center">
          <span class="d-flex mb-4 align-items-center justify-content-center flex-wrap">
            <p class="fs-1 mx-5 p-3 blueBlur shadow rounded-pill"> (●'◡'●)</p>
            <p class="fs-1 p-4 blueBlur shadow rounded-pill loginNote">Login for additional functionality!</p>
            <p class="fs-1 mx-5 p-3 blueBlur shadow rounded-pill"> ✍️(◔◡◔)</p>
          </span>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import ToDoWidget from "../components/Widgets/ToDo/ToDoWidget.vue";

export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      authQueried: computed(() => AppState.authQueried),

    };
  },
  components: { ToDoWidget }
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

// .ToDoWidget{
//   height: 69dvh;
// }
</style>
