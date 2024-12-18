//@ts-check

/**
 * @copyright 2025 - Eazicom Servicios Profesionales.
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

'use strict';

import express from 'express';

export const appRouter = express.Router();
appRouter.get( '/', ( req, res ) => {
    res.render( 'home' );
} );