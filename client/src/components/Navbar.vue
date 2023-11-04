<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
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
      <ul class="navbar-nav ms-2 me-auto">
        <li class="d-flex align-items-center">
          <router-link :to="{ name: 'Projects' }" class="btn text-primary lighten-30 selectable text-uppercase">
            Projects
          </router-link>
          <i class="fs-4 ms-2 me-4 mdi mdi-text-box-plus" type="button"></i>
        </li>
        <div class="bar me-3"></div>
        <li class="d-flex align-items-center">
          <router-link :to="{ name: 'Folders' }" class="btn text-primary lighten-30 selectable text-uppercase">
            Folders
          </router-link>
          <i class="fs-4 ms-2 me-4 mdi mdi-folder-plus" type="button"></i>
        </li>
        <div class="bar me-3"></div>
        <li class="d-flex align-items-center">
          <router-link :to="{ name: 'Tasks' }" class="btn text-primary lighten-30 selectable text-uppercase">
            Tasks
          </router-link>
          <i class="fs-4 ms-2 me-4 mdi mdi-checkbox-marked-circle-plus-outline" type="button"></i>
        </li>
        <div class="bar me-3"></div>
        <li>
          <router-link :to="{ name: 'About' }" class="btn text-primary lighten-30 selectable text-uppercase">
            About
          </router-link>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>

<script>
import Login from './Login.vue';
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>

<style scoped>
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

.bar {
  border-left: 1px dashed #ff8000;
  opacity: .67
}

@media screen and (min-width: 992px) {
  nav {
    height: 64px;
  }
}
</style>
