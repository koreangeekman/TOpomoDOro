<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-2">

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

        <li class="d-flex align-items-center me-1">
          <router-link :to="{ name: 'Home' }" class="btn text-primary lighten-30 selectable text-uppercase">
            Home
          </router-link>
        </li>

        <div class="bar mx-1"></div>

        <li class="d-flex align-items-center mx-1" v-if="account.id">
          <router-link :to="{ name: 'Workspaces' }" class="btn text-primary lighten-30 selectable text-uppercase">
            Workspace
          </router-link>
          <i class="fs-3 px-1 px-xl-2  mdi mdi-office-building-plus btn text-light lighten-30 selectable" data-bs-toggle="modal"
            data-bs-target="#newWorkspaceModal" type="button"></i>
        </li>

        <div class="bar mx-1" v-if="account.id"></div>

        <li class="d-flex align-items-center mx-1" v-if="account.id">
          <router-link :to="{ name: 'Projects' }" class="btn text-primary lighten-30 selectable text-uppercase">
            Projects
          </router-link>
          <i class="fs-3 px-1 px-xl-2 mdi mdi-briefcase-plus btn text-light lighten-30 selectable" data-bs-toggle="modal"
            data-bs-target="#newProjectModal" type="button"></i>
        </li>

        <div class="bar mx-1" v-if="account.id"></div>

        <li class="d-flex align-items-center mx-1" v-if="account.id">
          <router-link :to="{ name: 'Folders' }" class="btn text-primary lighten-30 selectable text-uppercase">
            Folders
          </router-link>
          <i class="fs-3 px-1 px-xl-2  mdi mdi-folder-plus btn text-light lighten-30 selectable" data-bs-toggle="modal"
            data-bs-target="#newFolderModal" type="button"></i>
        </li>

        <div class="bar mx-1" v-if="account.id"></div>

        <li class="d-flex align-items-center mx-1" v-if="account.id">
          <router-link :to="{ name: 'Tasks' }" class="btn text-primary lighten-30 selectable text-uppercase">
            Tasks
          </router-link>
          <i class="fs-3 px-1 px-xl-2  mdi mdi-checkbox-marked-circle-plus-outline btn text-light lighten-30 selectable"
            data-bs-target="#newTaskModal" data-bs-toggle="modal" type="button"></i>
        </li>

        <div class="bar mx-1" v-if="account.id"></div>

        <li class="d-flex align-items-center mx-1">
          <router-link :to="{ name: 'About' }" class="btn text-primary lighten-30 selectable text-uppercase">
            About
          </router-link>
        </li>

        <div class="bar mx-1"></div>

        <li class="d-flex align-items-center position-relative">
          <p title="Change background" @click="changeBG()" type="button"
            class="m-1 btn text-primary lighten-30 selectable text-uppercase showInfo">
            <i class="fs-2 mdi mdi-image-refresh"></i>
          </p>
          <div class="BGImgControls hide d-flex justify-content-start position-absolute mx-2 p-0">
            <BGImgControlWidget />
          </div>
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
import BGImgControlWidget from "../components/Widgets/BGImgControlWidget.vue";
import { bgImageService } from "../services/BGImageService.js";


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
  components: { Login, BGImgControlWidget }
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
  border-left: 1px dashed #ff8000;
  opacity: .67
}

@media screen and (min-width: 992px) {
  nav {
    height: 64px;
  }
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
