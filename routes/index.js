import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Este es el homepage");
});

export default router;
