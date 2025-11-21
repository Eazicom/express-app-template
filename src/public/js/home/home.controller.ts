/**
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

import WebController from '../web.controller.js';

/**
 * 
 */
class HomeController extends WebController {
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
        const anchor = this.view.querySelector( 'a[href="/"]' ) as HTMLAnchorElement;
        this.active( anchor );
    }
}

// Inicializa la clase HomeJS al cargar el DOM.
document.addEventListener( "DOMContentLoaded", () => {
    const controller = new HomeController();
} );
