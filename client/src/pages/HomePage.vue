<template>
  <div class="position-relative">
    <div class="container-fluid">
      <section class="row justify-content-center p-0">
        <div class="col-12 p-0 position-relative d-flex justify-content-end">
          <div class="p-0 pt-md-4 pe-md-4 ToDoWidget">
            <ToDoWidget />
          </div>
        </div>
      </section>
    </div>
  </div>
  <div class="QuoteWidget d-flex justify-content-center position-absolute fixed-bottom mx-3 p-0">
    <QuoteWidget />
  </div>
  <div class="BGImgControls d-flex justify-content-start position-absolute fixed-bottom mx-2 p-0">
    <BGImgControlWidget />
  </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import BGImgControlWidget from "../components/Widgets/BGImgControlWidget.vue";
import QuoteWidget from "../components/Widgets/QuoteWidget.vue";
import ToDoWidget from "../components/Widgets/ToDoWidget.vue";

export default {
  setup() {
    return {
      projects: computed(() => AppState.projects),
      folders: computed(() => AppState.folders),
      tasks: computed(() => AppState.tasks),
    };
  },
  components: { BGImgControlWidget, QuoteWidget, ToDoWidget }
}
</script>


<style scoped lang="scss">
.BGImgControls {
  bottom: 3rem;
  left: 2rem;
}

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

@media screen and (max-width:768px) {
  .BGImgControls {
    bottom: 11rem;
  }
}
</style>
