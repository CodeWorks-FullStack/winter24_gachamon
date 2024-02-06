class CoinsService {
  addCoin() {
    console.log('Adding coin, but in the service');
  }
}

export const coinsService = new CoinsService()