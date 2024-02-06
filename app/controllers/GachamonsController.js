
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

// !SECTION

export class GachamonsController {
  constructor () {
    console.log('Gachamons controller loaded');
    _drawGachamons()
  }

  // SECTION public
  setActiveGachamon(gachamonName) {
    console.log('setting active gachamon', gachamonName);
    gachamonsService.setActiveGachamon(gachamonName)
    _drawActiveGachamon()
  }

  purchaseRandomGachamon() {
    console.log('purchasing random gachamon');

    gachamonsService.purchaseRandomGachamon()

  }



  // !SECTION
}
