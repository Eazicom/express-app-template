/**
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

/**
 * @class WebView
 * @description Provee las herramientas básicas para manipular los elementos HTML
 * que contienen las páginas web.
 */
class WebView {
    
    protected static _body: HTMLBodyElement;

    /**
     * Constructor estático.
     */
    static {
        this._body = document.querySelector( 'body' ) as HTMLBodyElement;
    }
}

export default WebView;
