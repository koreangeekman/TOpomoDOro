<template>
  <div class="position-relative">
    <div class="container-fluid">
      <section class="row justify-content-center p-5">
        <div class="col-12">
          <Anon />
        </div>
      </section>
    </div>
  </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import Anon from "../components/Views/Anon.vue";

export default {
  setup() {
    return {
      account: computed(() => AppState.account),

    };
  },
  components: { Anon }
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
