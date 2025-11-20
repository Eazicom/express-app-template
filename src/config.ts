/**
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

import Enviroment from 'dotenv';

/**
 * @description Provee los valores establecidos para las variables de entorno.
 */
class Config {

    /**
     * @description Constructor estático de la clase.
     */
    static {
        Enviroment.config();
    }
    
    /**
     * Obtiene el puerto establecido en el archivo de configuración para
     * recibir solicitudes del cliente.
     * @returns {number} Puerto de escucha del servidor.
     */
    static get port(): number {
        let value = ( process.env.PORT || '80' );
        return parseInt( value );
    }
}

export default Config;