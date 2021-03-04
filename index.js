import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

db.authenticate()
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.log(error));

app.set("view engine", "pug");

app.use((req, res, next) => {
  const date = new Date();
  res.locals.currentYear = date.getFullYear();
  res.locals.siteTitle = "Agencia de Viajes";

  next();
});

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use("/", router);

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
  console.log(`Express se esta ejecutando en el puerto ${port}`);
});
