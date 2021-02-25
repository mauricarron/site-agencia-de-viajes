import Sequelize from "sequelize";
import db from "../config/db.js";

export const Testimoniales = db.define("testimoniales", {
  nombre: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  comentario: {
    type: Sequelize.STRING,
  },
});
