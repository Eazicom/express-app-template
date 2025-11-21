/**
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

import type { HomeModelInterface } from './home.model.js';

class HomeService {

    public async getApiInfo(): Promise<HomeModelInterface> {
        try {
            const response = await fetch( '/api/demo' );
            if ( response.ok ) {
                return <HomeModelInterface>( await response.json() );
            } else {
                return {
                    folio: `ERROR-${response.status}`,
                    mensaje: response.statusText,
                    api: { version: 'N/A' }
                };
            }
        } catch ( error ) {
            const mensaje = error instanceof Error ? error.message : String(error);
            return {
                folio: 'ERROR-500',
                mensaje,
                api: { version: 'N/A' }
            };
        }
    }
}

export default HomeService;