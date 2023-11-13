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

        <li class="d-flex align-items-center mx-1">
          <router-link :to="{ name: 'Home' }" class="btn text-primary lighten-30 selectable text-uppercase">
            Home
          </router-link>
        </li>

        <div class="bar mx-2"></div>

        <li class="d-flex align-items-center mx-1">
          <router-link :to="{ name: 'About' }" class="btn text-primary lighten-30 selectable text-uppercase">
            About
          </router-link>
        </li>

        <div class="bar mx-2"></div>

        <li class="d-flex align-items-center position-relative">
          <p title="Change background" @click="changeBG()" type="button"
            class="m-1 btn text-primary lighten-30 selectable text-uppercase showInfo">
            <i class="fs-2 mdi mdi-image-refresh"></i>
          </p>
          <div class="BGImgControls hide d-flex justify-content-start position-absolute mx-2 p-0">
            <BGImgWidget />
          </div>
        </li>

        <div class="bar mx-2"></div>

        <li class="d-flex align-items-center">
          <WeatherWidget />
        </li>

      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";
import Login from './Login.vue';
import Pop from "../utils/Pop.js";
import { bgImageService } from "../services/Widgets/BGImageService.js";
import BGImgWidget from "./Widgets/BGImgWidget.vue";
import WeatherWidget from "./Widgets/Weather/WeatherWidget.vue";

export default {
  setup() {
    return {
      account: computed(() => AppState.account),

      async changeBG() {
        try {
          await bgImageService.getBGImg();
          document.body.style.backgroundImage = `url('${AppState.widgets.bgImg.largeImgUrl}')`
        } catch (error) {
          Pop.error(error);
        }
      }

    }
  },
  components: { Login, BGImgWidget, WeatherWidget }
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

/* SECTION BG IMG CONTROLS CSS */
.hide {
  cursor: default;
  transition: ease-in-out .25s;
  opacity: 0;
  visibility: hidden;
  width: 15rem;
}

.showInfo:hover+.hide {
  opacity: 1;
  visibility: visible;
}

.BGImgControls {
  bottom: -6rem;
  left: 0;
}

/* SECTION MEDIA TRANSFORMS */

@media screen and (min-width: 992px) {
  nav {
    height: 64px;
  }
}

@media screen and (max-width:1100px) {
  .BGImgControls {
    left: -11.8em;
  }
}

@media screen and (max-width:768px) {
  .BGImgControls {
    left: 5rem;
    bottom: 0rem;
  }
}
</style>
