//@ts-check

/**
 * @copyright 2025 - Eazicom Servicios Profesionales.
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

'use strict';

import Model from "./model.js";

export default class TextModel extends Model {

    /**
     * @type {string}
     */
    #value;

    constructor() {
        super();
        this.#value = '';
    }

    notify = ( text ) => {
        this.#value = text;
        super.notify( this );
    }
}
