import { Gachamon } from './models/Gachamon.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  coins = 0

  name = ''

  gachamons = [
    new Gachamon({ name: 'Doctor Alligator', emoji: '🐊', rarity: 'common' }),
    new Gachamon({ name: 'Larry', emoji: '🦆', rarity: 'uncommon' })
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())