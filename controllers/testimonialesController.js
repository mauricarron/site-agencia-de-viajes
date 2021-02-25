export const guardarTestimonial = (req, res) => {
  const errores = [];
  const { nombre, email, comentario } = req.body;
  if (nombre.trim() === "") {
    errores.push({ mensaje: "El NOMBRE esta vacio" });
  }
  if (email.trim() === "") {
    errores.push({ mensaje: "El EMAIL esta vacio" });
  }
  if (comentario.trim() === "") {
    errores.push({ mensaje: "El COMENTARIO esta vacio" });
  }

  console.log(errores);
};
