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

  get ActiveGachamonHTMLTemplate() {
    return `
    <div class="col-8 m-auto">
      <div class="border border-1 border-dark bg-light shadow text-center p-3 m-3">
        <p class="display-1">${this.emoji}</p>
        <p class="fs-1">${this.name}</p>
        <p class="fs-1">Rarity: ${this.rarity}</p>
      </div>
    </div>
    `
  }
}


