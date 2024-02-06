import { AppState } from "../AppState.js"


export class Gachamon {

  constructor (data) {
    // NOTE use debugger to run code line by line, handy for debugging
    // debugger
    this.name = data.name
    this.emoji = data.emoji
    this.rarity = data.rarity
  }

  get gachamonCatalogHTMLTemplate() {
    return `
    <div class="col-2 text-center">
      <p role="button" class="display-2 mb-0" title="My name is Larry">
        🦆
      </p>
    </div>
    `
  }
}


