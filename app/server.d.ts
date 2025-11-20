/**
 * @description Provee las funciones necesarias para configurar e iniciar el
 * servidor de Express.
 */
export default class Server {
    #private;
    /**
     * @description Crea una nueva instancia de la clase {@link Server}.
     */
    constructor();
    /**
     * Agrega la configuración de rutas para un recurso especificado.
     * @param {express.Router} router
     * @returns {void}
     */
    addRouter: (router: any) => void;
    /**
     * Inicia el servidor de Express en el puerto especificado.
     * @param {number} port Puerto en el que se iniciará el servidor.
     * @returns {void} Este método no retorna ningún valor.
     */
    listen: (port: any) => void;
}
//# sourceMappingURL=server.d.ts.map