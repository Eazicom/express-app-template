/**
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

import WebController from '../web.controller.js';
import HomeService from './home.service.js';

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
        this.showApiInfo();
    }

    private showApiInfo(): void {
        const service = new HomeService()
        service.getApiInfo().then( ( data ) => {
            const tbody = <HTMLTableSectionElement>this.view.querySelector( "tbody" );
            tbody.innerHTML = `<tr>
                <td>${ data.folio }</td>
                <td>${ data.api.version }</td>
                <td>${ new Date().toLocaleString()}</td>
                <td>${ data.mensaje }</td>
            </tr>`;
        } );
    }
}

// Inicializa la clase HomeJS al cargar el DOM.
document.addEventListener( "DOMContentLoaded", () => {
    const controller = new HomeController();
} );
