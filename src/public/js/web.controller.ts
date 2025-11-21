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
    protected active( resource: string = '/' ): void {
        if ( resource.startsWith( '/' ) === false ) {
            resource = `/${ resource }`;
        }
        const a = <HTMLAnchorElement>document
            .querySelector( `a.nav-link[href='${resource}']` );
        a.classList.add( 'active' );
        a.setAttribute( 'aria-current', 'page' );
    }
}

export default WebController; 