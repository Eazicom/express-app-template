/**
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

import WebView from "../web.view.js";
import type { HomeModelInterface } from "./home.model.js";

/**
 * @class HomeView
 * @description Provee las herramientas para manipular los elementos HTML
 * que contiene la página de inicio.
 */
class HomeView extends WebView {

    static async fillTable( model: Array<HomeModelInterface> ): Promise<void> {
        
    } 
}

export default HomeView;