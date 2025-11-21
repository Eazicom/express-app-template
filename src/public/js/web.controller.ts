/**
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

/**
 * 
 */
abstract class WebController {

    //#region  -- Definiciòn de propiedades --
    
    /**
     * Vista HTML asociada al controlador.
     */
    public get view(): HTMLBodyElement {
        return document.querySelector( 'body' ) as HTMLBodyElement;
    }
    
    //#endregion
    
    /**
     * Crea una nueva instancia de de la clase {@link WebController}.
     */
    constructor() {
        this.init();
    }

    /**
     * 
     */
    protected abstract init(): void;
    
    /**
     * 
     * @param anchor 
     */
    protected active( anchor: HTMLAnchorElement ): void {
        anchor.classList.add( 'active' );
        anchor.setAttribute( 'aria-current', 'page' );
    }
}

export default WebController; 