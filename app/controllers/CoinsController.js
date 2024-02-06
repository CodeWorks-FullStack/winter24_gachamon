import { coinsService } from "../services/CoinsService.js";

export class CoinsController {

  constructor () {
    console.log('Coins Controller loaded! 🪙');
  }

  addCoin() {
    console.log('Adding coin in the controller');
    coinsService.addCoin()
  }
}
