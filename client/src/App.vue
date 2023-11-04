<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <!-- SECTION MODALS -->
  <NewTaskModal />
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import NewTaskModal from './components/Modals/NewTaskModal.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState),
      bgImg: computed(() => `url(${AppState.widgets.bgImg.largeImgUrl})`)

    }
  },
  components: { Navbar, NewTaskModal }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 64px);
}

body {
  background-image: var(bgImg);
}

footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
