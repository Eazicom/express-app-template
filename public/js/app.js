//@ts-check

/**
 * @copyright 2025 - Eazicom Servicios Profesionales.
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

'use strict';

/**
 * Contiene los elementos del menú de navegación.
 * @type {HTMLAnchorElement[]}
 */
const items = /** @type {HTMLAnchorElement[]} */ (
    /** @type {unknown} */ ( document.querySelectorAll( '.nav-link' ) )
);

/**
 * Elimina la clase 'active' de todos los elementos del menú.
 * @param {HTMLAnchorElement[]} items
 * @returns {void} Este método no retorna ningún valor.
 */
const reset = ( items ) => {
    items.forEach( item => item.classList.remove( 'active' ) );
}

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
} );
