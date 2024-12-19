//@ts-check

/**
 * @copyright 2025 - Eazicom Servicios Profesionales.
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

'use strict';

import Controller from "./controller.js";

/**
 * @description Controlador para la página de inicio.
 */
export default class HomeController extends Controller {

    constructor( request, response ) {
        super( request, response );
    }

    home = () => {
        this._response.status( 200 ).render( 'home' );
    }
}
