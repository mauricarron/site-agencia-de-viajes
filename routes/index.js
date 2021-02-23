import express from "express";
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleDestino,
} from "../controllers/paginasController.js";

const router = express.Router();

router.get("/", paginaInicio);
router.get("/nosotros/", paginaNosotros);
router.get("/viajes/", paginaViajes);
router.get("/viajes/:destino", paginaDetalleDestino);
router.get("/testimoniales/", paginaTestimoniales);

export default router;
