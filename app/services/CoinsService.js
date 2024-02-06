import { AppState } from "../AppState.js";

class CoinsService {
  addCoin() {
    console.log('Adding coin, but in the service');
    // REVIEW makes a new value in memory, because coins is a primitive
    // let coins = AppState.coins

    // manipulate the value stored in the object directly
    AppState.coins++
    console.log('coins in appstate', AppState.coins);

  }
}

export const coinsService = new CoinsService()