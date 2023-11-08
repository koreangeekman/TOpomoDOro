<template>
  <div class="container-fluid">
    <section class="row justify-content-center p-4 pt-5">
      <div class="col-auto d-flex flex-column justify-content-center align-items-center rounded bgBlur py-2 px-3">
        <p class="fs-1 p-2 rounded mb-1 fw-bold">TOpomoDOro</p>
        <p class="fs-4 p-2 rounded">[ TO-DO + pomodoro ]</p>
        <p class="fs-5 p-2 rounded text-center">
          Personal project to create a ToDo & Pomodoro blended <br>
          application with additional custom functionality
        </p>
        <p class="fs-5 p-2 m-2 rounded text-center">
          Full Stack Application <br>
        </p>
        <p class="fs-5 p-2 m-2 rounded text-center">
          MongoDB, Mongoose, Express, Vue
        </p>
        <p class="p-2 m-2 rounded text-center">
          - Weather info pulled from the <a href="https://openweathermap.org/" target="_blank">OpenWeather</a> API - <br>
          - Background Image & Quote pulled from
          <a href="https://boisecodeworks.com/" target="_blank">Boise Codeworks'</a> Sandbox -
        </p>
      </div>
    </section>
    <section v-if="authors.length > 0" class="row justify-content-evenly align-items-center">
      <div class="col-12 d-flex justify-content-center">
        <p class="fs-3 py-2 px-3 mt-3 mb-5 bgBlur rounded text-center">
          Like the app? <br>
          Find out more about the creator below!
        </p>
      </div>
      <div v-for="author in authors" :key="author.email" class="col-12 col-md-6 mb-5 px-4 text-center text-light">
        <UserCard :profile="author" />
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import Pop from "../utils/Pop.js";
import UserCard from "../components/UserCard.vue";
import { accountService } from "../services/AccountService.js";

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
      if (AppState.authors.length == 0) {
        _getAppAuthors();
      }
    })

    return {
      authors: computed(() => AppState.authors)

    };
  },
  components: { UserCard }
}
</script>


<style lang="scss" scoped>
// hr {
//   margin: 0.5rem;
//   color: #ffffff;
//   box-shadow: 0 0 5px 5px white;
// }

a {
  color: orange;
}

a:hover {
  color: rgb(255, 210, 125);
}

.bgBlur {
  backdrop-filter: blur(5px);
  background-color: #123456b9;
  color: whitesmoke;
}
</style>