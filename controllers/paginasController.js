import { Viajes } from "../models/Viajes.js";
import { Testimoniales } from "../models/Testimoniales.js";

const paginaInicio = async (req, res) => {
  const getDB = [];
  getDB.push(Viajes.findAll({ limit: 3 }));
  getDB.push(Testimoniales.findAll({ limit: 3 }));

  try {
    const resultados = await Promise.all(getDB);

    res.render("home", {
      pagina: "Inicio",
      clase: "home",
      viajes: resultados[0],
      testimoniales: resultados[1],
    });
  } catch (error) {
    console.log(error);
  }
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

const paginaTestimoniales = async (req, res) => {
  try {
    const testimoniales = await Testimoniales.findAll();

    res.render("testimoniales", {
      pagina: "Testimoniales",
      testimoniales,
    });
  } catch (error) {
    console.log(error);
  }
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
