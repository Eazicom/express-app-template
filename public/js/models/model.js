//@ts-check

/**
 * @copyright 2025 - Eazicom Servicios Profesionales.
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

'use strict';

import { Control } from "../views/control.view.js";

export default class Model {

    /**
     * @type {Control[]}
     */
    #controls;

    constructor() {
        this.#controls = [];
    }

    /**
     * 
     */
    suscribe = ( control ) => {
        this.#controls.push( control );
    }

    unsuscribe = ( control ) => {
        this.#controls = this.#controls.filter( c => c !== control );
    }

    /**
     * @public
     * @param {any} value
     */
    notify = ( value ) => {
        this.#controls.forEach( control => control.update( value ) );
    }
}
