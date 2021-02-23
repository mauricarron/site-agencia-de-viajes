import { Viajes } from "../models/Viajes.js";

const paginaInicio = (req, res) => {
  res.render("home", {
    pagina: "Inicio",
  });
};

const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros",
  });
};

const paginaViajes = async (req, res) => {
  const viajes = await Viajes.findAll();

  res.render("viajes", {
    pagina: "Proximos Viajes",
    viajes,
  });
};

const paginaTestimoniales = (req, res) => {
  res.render("testimoniales", {
    pagina: "Testimoniales",
  });
};

export { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales };
