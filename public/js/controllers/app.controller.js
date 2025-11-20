//@ts-check

/**
 * @copyright 2025 - Eazicom Servicios Profesionales.
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

'use strict';

/**
 * 
 */
export default class AppController {
´
    //#region  -- Definiciòn de propiedades --
    
    /**
     * @property {HTMLBodyElement}
     * Vista HTML asociada al controlador.
     */
    get view() {
        return /** @type {HTMLBodyElement} */ ( document.querySelector( 'body' ) );
    }
    
    //#endregion
    
    /**
     * @constructor
     * Crea una nueva instancia de de la clase {@link AppController}.
     */
    constructor() {
        this.#init();
    }

    /**
     * 
     */
    #init = () => { } 
    
    /**
     * Elimina la clase 'active' de todos los elementos del menú.
     * @returns {void} Este método no retorna ningún valor.
     */
    #resetActiveLinks = () => {
        const a = this.view.querySelector( 'a.active' );
        a?.classList.remove( 'active' );
        a?.setAttribute( 'aria-current', 'false' );
    }

    #activeMenu = ( menu ) => {
        this.#resetActiveLinks();
        menu.classList.add( 'active' );
    }
}

const getAPI = async () => {
    try {
        const response = await fetch( '/api', {
            method: 'GET',
        } );
        const data = await response.json();
        let folio = document.querySelector( '#folio' );
        if ( folio ) {
            folio.textContent = data.folio;
        }
        folio = document.querySelector( '#mensaje' );
        if ( folio ) {
            folio.textContent = data.mensaje;
        }
        folio = document.querySelector( '#version' );
        if ( folio ) {
            folio.textContent = data.api.version;
        }
        
    } catch ( error ) {
        console.error( 'Error fetching API:', error );
    }
};

/** 
 * Evento principal de la aplicación, se ejecuta al terminar la carga del DOM.
 */
document.addEventListener( 'DOMContentLoaded', () => {
    items.forEach( item => {
        item.addEventListener( 'click', ( ev ) => {
            reset( items );
            (/** @type { HTMLAnchorElement } */
                ( ev.target ) ).classList.add( 'active' );
        } );
    } );
    getAPI().then();
} );
