import { Testimoniales } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
  const errores = [];
  const { nombre, email, comentario } = req.body;

  if (nombre.trim() === "") {
    errores.push({ mensaje: "El nombre esta vacio" });
  }
  if (email.trim() === "") {
    errores.push({ mensaje: "El email esta vacio" });
  }
  if (comentario.trim() === "") {
    errores.push({ mensaje: "El comentario esta vacio" });
  }

  if (errores.length > 0) {
    const testimoniales = await Testimoniales.findAll();

    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      email,
      comentario,
      testimoniales,
    });
  } else {
    try {
      await Testimoniales.create({
        nombre,
        email,
        comentario,
      });
      res.redirect("/testimoniales/");
    } catch (error) {
      console.log(error);
    }
  }
};

export { guardarTestimonial };
