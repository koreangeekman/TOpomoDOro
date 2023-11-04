import { bcwSandbox } from "./AxiosService.js";
import { AppState } from "../AppState.js";
import { BGImg } from "../models/Widget/BGImg.js";

function _saveBGs() {
  // import writer util? save to local for quicker forward/backward - needs timeout clearing of old expired data
  return
}

class BGImageService {

  async getBGImg() {
    const res = await bcwSandbox.get('api/images');
    const newBGImg = new BGImg(res.data);
    AppState.widgets.bgImg = newBGImg;
    AppState.backgrounds.push(newBGImg);
    _saveBGs();
  }

}

export const bgImageService = new BGImageService();