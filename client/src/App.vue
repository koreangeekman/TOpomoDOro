<template>
  <header class="z2 sticky-top">
    <Navbar />
  </header>
  <main class="z0">
    <router-view />
  </main>
  <footer>
    <div class="d-flex justify-content-center mx-4 mx-md-5 p-0 pt-4">
      <QuoteWidget />
    </div>
  </footer>
  <!-- SECTION MODALS -->
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import QuoteWidget from "./components/Widgets/QuoteWidget.vue";

export default {
  setup() {
    return {
      appState: computed(() => AppState),
      bgImg: computed(() => `url('')`),
      bgColor: computed(() => AppState.settings.bgImg.bgColor),

    }
  },
  components: { Navbar, QuoteWidget }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 76px - 5rem);
}

body {
  background-image: url('https://images.unsplash.com/photo-1542923910-f391dea9f674?q=80&w=2428&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  background-size: cover;
  background-color: v-bind(bgColor);
  background-repeat: no-repeat;
}

footer {
  display: grid;
  place-content: center;
  // height: 32px;
}

.z2 {
  z-index: 2;
}

.z1 {
  z-index: 1;
}

.z0 {
  z-index: 0;
}
</style>
