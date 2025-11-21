/**
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

import type { Router } from "express";
import express from "express";
/**
 * @description Rutas de la API.
 * @type {Router}
 */
const API_DEMO_ROUTER: Router = express.Router();

API_DEMO_ROUTER.get( "/api/demo", ( req, res ) => {
    const today = new Date();
    today.getTime();
    res.json( {
        folio: `API-${today.getTime()}`,
        mensaje: "La API de demostración está funcionando correctamente.",
        api: { version: "1.0.0" },
    } );
} );

export default API_DEMO_ROUTER;
