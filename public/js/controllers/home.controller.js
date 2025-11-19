//@ts-check

"use strict";

/**
 * Copyright 2025 - Eazicom Servicios Profesionales.
 * Author: Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

class HomeJS {
    /**
     * Inicializa la clase HomeJS.
     */
    constructor() {
        this.init();
    }
    /**
     * Método de inicialización.
     * @returns {void} Este método no retorna ningún valor.
     * */
    init() {
        getAPI();
    }
}

// Inicializa la clase HomeJS al cargar el DOM.
document.addEventListener( "DOMContentLoaded", () => {
    new HomeJS();
} );
