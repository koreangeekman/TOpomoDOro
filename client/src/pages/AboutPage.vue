<template>
  <div class="container-fluid">
    <section class="row justify-content-around">
      <div class="col-12 d-flex flex-column p-3 justify-content-center align-items-center">
        <p class="fs-1 bgBlur p-2 rounded mb-1 fw-bold">TOpomoDOro</p>
        <p class="fs-4 bgBlur p-2 rounded">[ TO-DO + pomodoro ]</p>
      </div>
      <div class="col-12 col-md-6 d-flex p-3">
        <p class="fs-5 bgBlur p-2 rounded">
          Full Stack Application built by DJ Aaron <br>
          built from Express & Vue
        </p>
      </div>
      <div class="col-12 col-md-4 d-flex p-3">

      </div>
      <div class="col-12 col-md-4 d-flex p-3">

      </div>
      <div class="col-12 col-md-6 d-flex p-3">
        <p class="fs-5 bgBlur p-2 rounded">
          Personal project to create a ToDo & Pomodoro blended application with
          additional custom functionality
        </p>
      </div>
    </section>
    <section class="row justify-content-evenly align-items-center">
      <div class="col-12 col-md-6 mt-5 mt-md-0 text-center text-light">
        <UserCard />
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from "vue";
import UserCard from "../components/UserCard.vue";
import { accountService } from "../services/AccountService.js";
import Pop from "../utils/Pop.js";
import { AppState } from "../AppState.js";

export default {
  setup() {

    async function _getAppAuthors() {
      try {
        await accountService.getAppAuthors();
      } catch (error) {
        Pop.error(error);
      }
    }

    onMounted(() => {
      _getAppAuthors();
    })

    return {
      authors: computed(() => AppState.authors)

    };
  },
  components: { UserCard }
}
</script>


<style lang="scss" scoped>
.bgBlur {
  background-color: #dadadab9;
  backdrop-filter: blur(2px);
}
</style>