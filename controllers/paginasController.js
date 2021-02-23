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

const paginaDetalleDestino = async (req, res) => {
  const { destino } = req.params;

  try {
    const viaje = await Viajes.findOne({ where: { slug: destino } });

    res.render("destino", {
      pagina: "Información del destino",
      viaje,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleDestino,
};
