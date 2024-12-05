const express = require("express");
const path = require("path");
const app = express();
const indexRoutes = require("./routes/index");

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuração para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", indexRoutes);

// Middleware para lidar com páginas não encontradas (404)
app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`Rodando em http://localhost:${PORT}`);
});
