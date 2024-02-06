
// SECTION PRIVATE

import { AppState } from "../AppState.js";
import { gachamonsService } from "../services/GachamonsService.js";
import { setHTML } from "../utils/Writer.js";

function _drawGachamons() {
  console.log('drawing gachamons');
  const gachamons = AppState.gachamons

  let htmlString = ''

  gachamons.forEach(gachamon => htmlString += gachamon.GachamonCatalogHTMLTemplate)

  setHTML('gachamonsCatalog', htmlString)
}

function _drawActiveGachamon() {
  const gachamon = AppState.activeGachamon

  console.log('drawing active gachamon', gachamon);

  setHTML('activeGachamonDetails', gachamon.ActiveGachamonHTMLTemplate)
}

function _drawMyGachamons() {
  const myGachamons = AppState.myGachamons
  console.log('my gachamons', myGachamons);


  let htmlString = ''

  myGachamons.forEach(gachamon => htmlString += gachamon.GachamonCatalogHTMLTemplate)

  setHTML('myGachamons', htmlString)
}

// !SECTION

export class GachamonsController {
  constructor () {
    console.log('Gachamons controller loaded');
    _drawGachamons()

    AppState.on('activeGachamon', _drawActiveGachamon)
    AppState.on('myGachamons', _drawMyGachamons)
  }

  // SECTION public
  setActiveGachamon(gachamonName) {
    console.log('setting active gachamon', gachamonName);
    gachamonsService.setActiveGachamon(gachamonName)
    // _drawActiveGachamon()
  }

  purchaseRandomGachamon() {
    console.log('purchasing random gachamon');

    gachamonsService.purchaseRandomGachamon()

  }



  // !SECTION
}
