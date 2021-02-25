const guardarTestimonial = (req, res) => {
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
    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      email,
      comentario,
    });
  }
};

export { guardarTestimonial };
