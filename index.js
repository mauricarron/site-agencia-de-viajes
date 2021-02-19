const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Este es el homepage");
});

app.listen(port, () => {
  console.log(`Express se esta ejecutando en el puerto ${port}`);
});
