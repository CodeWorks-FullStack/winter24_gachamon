import { AppState } from "../AppState.js";

class GachamonsService {
  setActiveGachamon(gachamonName) {
    console.log('setting active gachamon', gachamonName);

    const foundGachamon = AppState.gachamons.find(gachamon => gachamon.name == gachamonName)

    console.log('gachamon:', foundGachamon);

    AppState.activeGachamon = foundGachamon

  }
  purchaseRandomGachamon() {

    if (AppState.coins < 1) {
      window.alert('Not enough coins, dawg')
      // FULL STOP
      return
    }


    // NOTE triggers listener assigned by CoinsController
    AppState.coins--

    const gachamons = AppState.gachamons

    const randomIndex = Math.floor(Math.random() * gachamons.length)

    const randomGachamon = gachamons[randomIndex]

    console.log('randomg gachamon', randomGachamon);
  }
}

export const gachamonsService = new GachamonsService()