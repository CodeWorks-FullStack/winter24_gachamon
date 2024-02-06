import { AppState } from "../AppState.js"


export class Gachamon {

  constructor (data) {
    // NOTE use debugger to run code line by line, handy for debugging
    // debugger
    this.name = data.name
    this.emoji = data.emoji
    this.rarity = data.rarity
  }

  get GachamonCatalogHTMLTemplate() {
    return `
    <div class="col-2 text-center">
      <p onclick="app.GachamonsController.setActiveGachamon('${this.name}')" role="button" class="display-2 mb-0" title="My name is ${this.name}">
        ${this.emoji}
      </p>
    </div>
    `
  }
}


