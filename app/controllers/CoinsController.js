import { AppState } from "../AppState.js";
import { coinsService } from "../services/CoinsService.js";
import { setText } from "../utils/Writer.js";

// SECTION private
function _drawCoins() {
  console.log('Drawing coins');

  setText('coinsCount', AppState.coins)
}
// !SECTION

export class CoinsController {

  constructor () {
    console.log('Coins Controller loaded! 🪙');

    // NOTE attaches listener to property in the appstate, and runs callback function when that value changes
    AppState.on('coins', _drawCoins)
  }

  // SECTION public

  addCoin() {
    console.log('Adding coin in the controller');
    coinsService.addCoin()
    // _drawCoins()

  }


  // !SECTION
}
