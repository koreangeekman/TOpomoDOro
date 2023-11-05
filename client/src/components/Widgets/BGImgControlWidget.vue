<template>
  <div class="position-relative text-center blueBlur shadow BGImgCredit">
    <p>Background Image Credit & Controls</p>
    <div class="d-flex flex-wrap p-2" id="BGImgCredit">
      <span class="d-flex w-100 justify-content-between">
        <p>Author:</p>
        <p>{{ bgImg.author }}</p>
      </span>
      <span class="d-flex w-100 justify-content-between">
        <p>Tags: </p>
        <p>{{ bgImg.query }}</p>
      </span>
      <span class="d-flex w-100 justify-content-between">
        <p>Query: </p>
        <p>{{ bgImg.tags }}</p>
      </span>
    </div>
    <div class="position-absolute changeBG">
      <i class="fs-4 mdi mdi-dice-d20" type="button" title="Change background" @click="rng()"></i>
    </div>
  </div>
</template>


<script>
import { AppState } from '../../AppState';
import { computed, onMounted } from 'vue';
import Pop from "../../utils/Pop.js";
import { bgImageService } from "../../services/BGImageService.js";

export default {
  setup() {
    async function _getBGImg() {
      try {
        await bgImageService.getBGImg();
        document.body.style.backgroundImage = `url('${AppState.widgets.bgImg.largeImgUrl}')`
      } catch (error) {
        Pop.error(error);
      }
    }

    onMounted(() => {
      if (!AppState.widgets.bgImg.largeImgUrl) {
        _getBGImg();
      }
    })

    return {
      backgrounds: computed(() => AppState.backgrounds),
      bgImg: computed(() => AppState.widgets.bgImg),

      rng() {
        _getBGImg();
      }

    }
  }
};
</script>


<style lang="scss" scoped>
.changeBG {
  bottom: -0.8rem;
  right: -0.42rem;
  color: orange;
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