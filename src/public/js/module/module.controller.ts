/**
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

import WebController from '../web.controller.js';

/**
 * 
 */
class ModuleController extends WebController {
    /**
     * Inicializa la clase HomeJS.
     */
    constructor() {
        super();
    }
    /**
     * Método de inicialización.
     **/
    protected init(): void {
        this.active( '/module' );
    }
}

// Inicializa la clase HomeJS al cargar el DOM.
document.addEventListener( "DOMContentLoaded", () => {
    const controller = new ModuleController();
} );
