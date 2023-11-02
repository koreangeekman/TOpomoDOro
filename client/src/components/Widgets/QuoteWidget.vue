<template>
  <div class="component">


  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped>
#quote {
  text-align: center;
  align-self: center;
  width: fit-content;
}

.quoteContent {
  cursor: help;
  font-size: large;
  max-width: 69%;
  width: fit-content;
  border-radius: 2rem;
}

.quoteInfo {
  font-size: small;
  width: fit-content;
  border-radius: 2rem;
  opacity: 0;
  visibility: hidden;
  transition: ease-in-out .25s;
}

.quoteContent:hover+.quoteInfo {
  opacity: 1;
  visibility: visible;
}

.refreshQuote {
  position: relative;
  top: 10px;
  left: 10px;
  text-shadow: 0 0 5px black;
}
</style>