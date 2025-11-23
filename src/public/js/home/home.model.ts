/**
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

export interface APIResponse {
    folio: string;
    mensaje: string;
    api: {
        version: string;
    };
}