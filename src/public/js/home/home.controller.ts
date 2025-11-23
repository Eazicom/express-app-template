/**
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

import WebController from '../web.controller.js';
import type { APIResponse } from './home.model.js';
import HomeService from './home.service.js';
import HomeView from './home.view.js';

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
        this.active();
        const service = new HomeService();
        service.demo().then( ( model: APIResponse ): void => {
            HomeView.bind( model );
        } );
    }
}

// Inicializa la clase HomeJS al cargar el DOM.
document.addEventListener( "DOMContentLoaded", () => {
    const controller = new HomeController();
} );
