import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/code", (req, res) => {
  res.render("code");
});
router.get("/about", (req, res) => {
  res.send("Photographer turned Developer");
});
router.get("/contact", (req, res) => {
  res.send("Contact me @mdcarron");
});

export default router;
