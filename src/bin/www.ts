/**
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
*/

import type { Router } from 'express';
import Config from '../config.js';
import ROUTERS from '../routers/router.js';
import Server from "../server.js";

/**
 * @description Contiene la referencia al objeto del servidor de aplicaciones.
 * @type {Server}
 */
const SERVER: Server = new Server();
ROUTERS.forEach( ( router: Router ) => {
    SERVER.addRouter( router );
} );

SERVER.listen( Config.port );
