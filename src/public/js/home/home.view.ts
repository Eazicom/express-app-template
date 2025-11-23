/**
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

import WebView from "../web.view.js";
import type { APIResponse } from "./home.model.js";

/**
 * @class HomeView
 * @description Provee las herramientas para manipular los elementos HTML
 * que contiene la página de inicio.
 */
class HomeView extends WebView {

    static async bind( model: APIResponse ): Promise<void> {
        let tbody = this.createElement( 'tbody' );
        tbody.classList.add( 'text-center' );
        let tr = this.createElement( 'tr' );
        tr.innerHTML = `<td>${model.folio}</td>
                        <td>${model.api.version}</td>
                        <td>${new Date().toLocaleString()}</td>
                        <td>${model.mensaje}</td>`;
        tbody.appendChild( tr );
        const table = <HTMLTableElement>document.querySelector( 'table' );
        table.appendChild( tbody );
    }
}

export default HomeView;