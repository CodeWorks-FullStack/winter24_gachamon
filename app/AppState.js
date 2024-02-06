import { Gachamon } from './models/Gachamon.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  coins = 0

  gachamons = [
    new Gachamon({ name: 'Doctor Alligator', emoji: '🐊', rarity: 'common' }),
    new Gachamon({ name: 'Larry', emoji: '🦆', rarity: 'uncommon' }),
    new Gachamon({ name: 'Tiger', emoji: '🐅', rarity: 'common' }),
    new Gachamon({ name: 'Oslo', emoji: '🦧', rarity: 'common' }),
    new Gachamon({ name: 'Mick', emoji: '🐏', rarity: 'ultra rare' }),
    new Gachamon({ name: 'Jake', emoji: '🐍', rarity: 'common' }),

  ]
}

export const AppState = createObservableProxy(new ObservableAppState())