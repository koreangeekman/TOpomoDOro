<template>
  <div class="col-6 col-md-1 d-block text-center blueBlur BGImgCredit">
    <p>Background Image Credit & Controls</p>
    <div class="d-flex flex-wrap p-2" id="BGImgCredit">
      <!-- draw in bg credit info -->
    </div>
    <div class="d-flex justify-content-evenly">
      <!-- <i class="fs-4 mdi mdi-skip-backward" onclick="prev()"></i> -->
      <!-- <i class="fs-4 mdi mdi-dice-d20" onclick="rng()"></i> -->
      <!-- <i class="fs-4 mdi mdi-skip-forward" onclick="next()"></i> -->
    </div>
  </div>
</template>


<script>
import { AppState } from '../../AppState';
import { computed, onMounted } from 'vue';
import { logger } from "../../utils/Logger.js";
import Pop from "../../utils/Pop.js";
import { bgImageService } from "../../services/BGImageService.js";

export default {
  setup() {
    async function _getBGImg() {
      try {
        await bgImageService.getBGImg();
      } catch (error) {
        Pop.error(error);
      }
    }

    onMounted(() => {
      _getBGImg();
    })

    return {
      backgrounds: computed(() => AppState.backgrounds)
    }
  }
};
</script>


<style lang="scss" scoped>
body {
  background-color: #123456b0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.BGImgCredit {
  cursor: help;
  height: fit-content;
  width: 250px;
  filter: blur(1px);
  opacity: .25;
  transition: ease-in-out .25s;
}

.BGImgCredit:hover {
  filter: blur(0);
  opacity: 1;
  /*  */
}

.BGImgCredit p {
  font-size: .75rem;
  margin: 0;
}

.blueBlur {
  background-color: #123456b0;
  color: whitesmoke;
  border-radius: .25rem;
  /* width: fit-content; */
}
</style>