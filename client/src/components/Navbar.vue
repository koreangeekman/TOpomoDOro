<template>
  <nav class="navbar navbar-expand-lg navbar-dark shadow bg-dark px-3">

    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img alt="logo" src="../assets/img/powersymbol2048.png" height="50" />
      </div>
    </router-link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">

        <li class="d-flex align-items-center mx-1 my-2 my-md-0">
          <router-link :to="{ name: 'Home' }" class="btn text-primary lighten-30 selectable text-uppercase">
            Home
          </router-link>
        </li>

        <div class="bar mx-2"></div>

        <li class="d-flex align-items-center mx-1 my-2 my-md-0">
          <router-link :to="{ name: 'About' }" class="btn text-primary lighten-30 selectable text-uppercase">
            About
          </router-link>
        </li>

        <div class="bar mx-2"></div>

        <li class="d-flex align-items-center position-relative my-2 my-md-0">
          <BGImgWidget />
        </li>

        <div class="bar mx-2"></div>

        <li class="d-flex align-items-center mx-4 my-2 my-md-0">
          <WeatherWidget />
        </li>

        <div class="bar mx-2"></div>

        <li class="d-flex align-items-center mx-3 my-2 my-md-0">
          <ClockWidget />
        </li>

      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>


<script>
import Login from './Login.vue';
import WeatherWidget from "./Widgets/Weather/WeatherWidget.vue";
import BGImgWidget from "./Widgets/BGImgWidget.vue";
import ClockWidget from "./Widgets/ClockWidget.vue";

export default {
  setup() {
    return {}
  },
  components: { Login, BGImgWidget, WeatherWidget, ClockWidget }
}
</script>

<style scoped>
i {
  line-height: 2rem;
}

a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.bg-dark {
  backdrop-filter: blur(3px);
}

.bar {
  border-left: 1px dashed #ffbb77;
  opacity: .32;
}

/* SECTION MEDIA TRANSFORMS */

@media screen and (min-width: 992px) {
  nav {
    height: 76px;
  }
}
</style>
