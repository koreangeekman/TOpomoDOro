<template>
  <div class="position-relative">
    <div class="container-fluid">
      <section class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8 col-xxl-6 d-flex justify-content-center py-5">
        </div>
      </section>
    </div>
    <div class="position-absolute BGImgControls">
      <BGImgControlWidget />
    </div>
  </div>
  <div class="d-flex justify-content-center position-absolute fixed-bottom mx-5 p-0 QuoteWidget">
    <QuoteWidget />
  </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import QuoteWidget from "../components/Widgets/QuoteWidget.vue";
import BGImgControlWidget from "../components/Widgets/BGImgControlWidget.vue";

export default {
  setup() {
    return {
      projects: computed(() => AppState.projects),
      folders: computed(() => AppState.folders),
      tasks: computed(() => AppState.tasks),
    };
  },
  components: { QuoteWidget, BGImgControlWidget }
}
</script>


<style scoped lang="scss">
.BGImgControls {
  top: 1rem;
  left: 1rem;
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

@media screen and (max-width:768px) {
  .BGImgControls {
    // top: -64px;
    // left: 33%;
  }
}
</style>
