//@ts-check
/**
 * @copyright 2025 - Eazicom Servicios Profesionales.
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

"use strict";

import { Router } from "express";
/**
 * @description Rutas de la API.
 * @type {Router}
 */
export const apiRouter = Router();

apiRouter.get("/api", (req, res) => {
  const today = new Date();
  today.getTime();
  res.json({
    folio: `API-${today.getTime()}`,
    mensaje: "Operación exitosa",
    api: { version: "1.0.0" },
  });
});
