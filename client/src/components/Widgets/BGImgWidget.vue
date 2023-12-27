<template>
  <p title="Change background" @click="_getBGImg()" type="button"
    class="m-1 btn text-primary lighten-30 selectable text-uppercase showInfo">
    <i class="fs-2 mdi mdi-image-refresh"></i>
  </p>
  <div class="BGImgControls hide d-flex justify-content-start position-absolute mx-3 p-0">
    <div class="position-relative text-center blueBlur shadow BGImgCredit p-1 pb-2">
      <p class="mb-1 text-nowrap shadow">Background Image Credit & Controls</p>
      <div class="" id="BGImgCredit">
        <div class="d-flex justify-content-between shadow px-2">
          <p>Author:</p>
          <p>{{ bgImg.author }}</p>
        </div>
        <div class="d-flex justify-content-between shadow px-2">
          <p>Tags: </p>
          <p>{{ bgImg.query }}</p>
        </div>
        <div class="d-flex justify-content-between shadow px-2">
          <p class="me-2">Query: </p>
          <p class="pe-1 text-nowrap">{{ bgImg.tags }}</p>
        </div>
      </div>
      <!-- <div class="position-absolute changeBG">
        <i class="fs-3 mdi mdi-dice-d20" type="button" title="Change background" @click="rng()"></i>
      </div> -->
    </div>
  </div>
</template>


<script>
import { AppState } from '../../AppState';
import { computed, onMounted } from 'vue';
import { bgImageService } from "../../services/Widgets/BGImageService.js";
import Pop from "../../utils/Pop.js";

export default {
  setup() {
    async function _getBGImg() {
      try {
        await bgImageService.getBGImg();
        document.body.style.backgroundImage = `url('${AppState.widgets.bgImg.largeImgUrl}')`
      }
      catch (error) { Pop.error(error); }
    }

    onMounted(() => {
      if (!AppState.widgets.bgImg.largeImgUrl) {
        _getBGImg();
      }
    })

    return {
      _getBGImg,

      backgrounds: computed(() => AppState.backgrounds),
      bgImg: computed(() => AppState.widgets.bgImg),

    }
  }
};
</script>


<style lang="scss" scoped>
// .changeBG {
//   top: 22%;
//   left: 46%;
//   color: orange;
// }

// .changeBG {
//   bottom: -0.96rem;
//   right: -0.5rem;
//   color: orange;
// }

.BGImgCredit {
  height: fit-content;
  width: 250px;
  border: 1px solid #ffffffb9;
}

.BGImgCredit p {
  font-size: .75rem;
  margin: 0;
}

.blueBlur {
  background-color: #123456b9;
  color: whitesmoke;
  border-radius: .25rem;
  backdrop-filter: blur(3px);
}

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