import { CoinsController } from "./controllers/CoinsController.js";
import { ExamplesController } from "./controllers/ExamplesController.js";
import { GachamonsController } from "./controllers/GachamonsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [CoinsController, GachamonsController],
    view: ''
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])