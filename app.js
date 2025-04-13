require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const indexRoutes = require("./routes/index");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", indexRoutes);

app.use((req, res, next) => {
  next(createError(404, "Página não encontrada"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  if (req.headers.accept.includes("application/json")) {
    return res.json({
      error: {
        status: err.status,
        message: err.message,
      },
    });
  }

  res.render("error", {
    title: `Erro ${err.status || 500}`,
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`init server em http://localhost:${PORT}`);
});

module.exports = app;
