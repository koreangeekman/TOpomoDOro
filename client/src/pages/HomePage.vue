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
        <div v-else-if="!account.id" class="col-12 p-5 d-flex flex-column align-items-center">
          <span class="d-flex mb-4 align-items-center justify-content-center flex-wrap" @click="hideMe()" id="hideMe">
            <p class="fs-1 mx-5 p-3 blueBlur shadow rounded-pill"> (●'◡'●)</p>
            <div class="p-4 blueBlur shadow rounded-pill loginNote text-center">
              <p class="fs-1 mb-0">
                Login for your personal To Do list!
              </p>
              <small class="tiny">(<i> Or click to hide </i>)</small>
            </div>
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

      hideMe() {
        document.getElementById('hideMe').classList.add('d-none');
      }

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
