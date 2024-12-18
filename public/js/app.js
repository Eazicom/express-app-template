//@ts-check

/**
 * @copyright 2025 - Eazicom Servicios Profesionales.
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

'use strict';

const items = /** @type {HTMLAnchorElement[]} */ (
    /** @type {unknown} */ ( document.querySelectorAll( '.nav-link' ) )
);

/**
 * @param {HTMLAnchorElement[]} items
 */
const reset = ( items ) => {
    items.forEach( item => item.classList.remove( 'active' ) );
}

/** Evento ejecutado al terminar la carga del DOM. */
document.addEventListener( 'DOMContentLoaded', () => {
    items.forEach( item => {
        item.addEventListener( 'click', ( ev ) => {
            reset( items );
            const a = /** @type { HTMLAnchorElement } */ ( ev.target );
            a.classList.add( 'active' );
        } );
    } );
} );
