<template>
  <header class="z2">
    <Navbar />
  </header>
  <main class="z0">
    <router-view />
  </main>
  <footer>
    <div class="QuoteWidget d-flex justify-content-center position-absolute fixed-bottom mx-4 mx-md-5 p-0">
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
      bgImg: computed(() => `url('${AppState.widgets.bgImg.largeImgUrl}'')`),
      bgColor: computed(() => AppState.settings.bgImg.bgColor),

    }
  },
  components: { Navbar, QuoteWidget }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 64px);
}

body {
  background-image: v-bind(bgImg);
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
