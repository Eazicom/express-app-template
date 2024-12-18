//@ts-check

/**
 * @copyright 2025 - Eazicom Servicios Profesionales.
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

'use strict';

import TextModel from "../models/text.model.js";

const model = new TextModel();

const input = document.getElementsByTagName( 'input' )[0];
input.addEventListener( 'input', ( ev ) => {
    model.notify( (/** @type {HTMLInputElement} */ ( ev.target ) ).value );
} );