import { AppState } from "../AppState.js";

class GachamonsService {
  setActiveGachamon(gachamonName) {
    console.log('setting active gachamon', gachamonName);

    const foundGachamon = AppState.gachamons.find(gachamon => gachamon.name == gachamonName)

    console.log('gachamon:', foundGachamon);
  }
}

export const gachamonsService = new GachamonsService()