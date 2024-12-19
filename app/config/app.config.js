//@ts-check

/**
 * @copyright 2025 - Eazicom Servicios Profesionales.
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

'use strict';

import Env from 'dotenv';

/**
 * @description Provee los valores establecidos para las variables de entorno.
 */
export default class AppConfig {

    /**
     * @description Constructor estático de la clase.
     */
    static {
        Env.config();
    }
    
    /**
     * Obtiene el puerto establecido en el archivo de configuración para
     * recibir solicitudes del cliente.
     * @returns {number} Puerto de escucha del servidor.
     */
    static get port() {
        let value = ( process.env.PORT || '80' );
        return parseInt( value );
    }
}