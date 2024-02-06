import { coinsService } from "../services/CoinsService.js";

// SECTION private
function _drawCoins() {
  console.log('Drawing coins');
}
// !SECTION

export class CoinsController {

  constructor () {
    console.log('Coins Controller loaded! 🪙');
  }

  addCoin() {
    console.log('Adding coin in the controller');
    coinsService.addCoin()
    _drawCoins()
  }

}

