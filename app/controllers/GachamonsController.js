
// SECTION PRIVATE

import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

function _drawGachamons() {
  console.log('drawing gachamons');
  const gachamons = AppState.gachamons

  let htmlString = ''

  gachamons.forEach(gachamon => htmlString += gachamon.GachamonCatalogHTMLTemplate)

  setHTML('gachamonsCatalog', htmlString)
}

// !SECTION

export class GachamonsController {
  constructor () {
    console.log('Gachamons controller loaded');
    _drawGachamons()
  }
}
