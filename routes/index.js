const express = require("express");
const router = express.Router();

// inicio
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

// erros
router.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

router.get("/erro", (req, res) => {
  const statusCode = req.query.codigo || 500;
  const mensagem = req.query.mensagem || "Ocorreu um erro";

  res.status(statusCode).render("error", {
    title: `Erro ${statusCode}`,
    message: mensagem,
  });
});

module.exports = router;
