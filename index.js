import express from "express";
import router from "./routes/index.js";

const app = express();
const port = process.env.PORT || 4000;

app.set("view engine", "pug");

app.use((req, res, next) => {
  const date = new Date();
  res.locals.currentYear = date.getFullYear();
  res.locals.siteTitle = "Agencia de Viajes";

  next();
});

app.use(express.static("public"));

app.use("/", router);

app.listen(port, () => {
  console.log(`Express se esta ejecutando en el puerto ${port}`);
});
