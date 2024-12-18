//@ts-check

/**
 * @copyright 2025 - Eazicom Servicios Profesionales.
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

'use strict';

import Model from "../models/model.js";

export class Control {

    /**
     * @type {HTMLElement}
     */
    #element;

    /**
     * 
     * @param {string} selector 
     */
    constructor( selector ) {
        this.#element = /** @type {HTMLElement} */ (
            document.querySelector( selector )
        );
    }

    /**
     * @param {Model} model
     */
    update = ( model ) => { }
}
