const express = require("express");
const router = express.Router();

// home
router.get("/", (req, res) => {
  res.render("index", { title: "CTBJ STUDY" });
});

// livros
router.get("/livros", (req, res) => {
  res.render("livros", { title: "CTBJ STUDY - Livros Didáticos" });
});

// materiais
router.get("/materiais", (req, res) => {
  res.render("materiais", { title: "CTBJ STUDY - Materiais Complementares" });
});

// resumos
router.get("/resumos", (req, res) => {
  res.render("resumos", { title: "CTBJ STUDY - Resumos" });
});

// contato
router.get("/contatos", (req, res) => {
  res.render("contatos", { title: "CTBJ STUDY - Contatos" });
});

module.exports = router;
