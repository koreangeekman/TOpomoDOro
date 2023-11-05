<template>
  <div v-if="quote.content" class="position-relative">
    <div class="d-flex flex-column align-items-center text-center text-white d-block" id="quote">
      <div class="blueBlur quoteContent rounded-pill border px-3 py-2">{{ quote.content }}</div>
      <div class="quoteInfo d-flex flex-wrap justify-content-end align-items-center my-2 px-2 py-1">
        <p class="blueBlur border mx-1 py-1 px-2">{{ quote.author }}</p>
        <p class="blueBlur px-2 rounded-circle"> • </p>
        <p v-for="tag in quote.tags" class="blueBlur border py-1 px-2 mx-1 rounded-pill">{{ tag }}</p>
      </div>
    </div>
    <i class="position-absolute fs-4 refreshQuote mdi mdi-refresh-circle" type="button" @click="refresh()"></i>
  </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../../AppState';
import Pop from "../../utils/Pop.js";
import { logger } from "../../utils/Logger.js";
import { quotesService } from "../../services/QuotesService.js";

export default {
  setup() {

    async function _getQuote() {
      try {
        await quotesService.getQuote();
      } catch (error) {
        logger.error(error);
        Pop.error(error);
      }
    }

    onMounted(() => {
      quotesService.clearData();
      _getQuote();
    })

    return {
      quote: computed(() => AppState.widgets.quote),

      refresh() { _getQuote() },

    }
  }
};
</script>


<style lang="scss" scoped>
#quote {
  width: fit-content;
}

.quoteContent {
  cursor: help;
  font-size: large;
  // width: fit-content;
}

.quoteInfo {
  font-size: small;
  opacity: 0;
  visibility: hidden;
  transition: ease-in-out .25s;
}

.quoteContent:hover+.quoteInfo {
  opacity: 1;
  visibility: visible;
}

.refreshQuote {
  top: -.8rem;
  left: -.5rem;
  text-shadow: 0 0 5px black;
}

.blueBlur {
  background-color: #12345678;
  color: whitesmoke;
  border-radius: .25rem;
  /* width: fit-content; */
  backdrop-filter: blur(3px);
}

i {
  color: orange;
  text-shadow: 0 0 5px black;
}
</style>