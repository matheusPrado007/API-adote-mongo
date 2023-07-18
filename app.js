const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const pictureRouter = require("./routes/picture");
const db = require("./db");

dotenv.config();
const port = process.env.PORT || 3000;

// Middleware de tratamento de erros global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Middleware de configuração CORS
app.use(cors({ origin: "*" }));

// Middleware de análise do corpo da requisição
app.use(express.json());

// Rota para as imagens
app.use("/pictures", pictureRouter);

// Conecta ao banco de dados
db.main().catch((err) => {
  console.error(err);
  process.exit(1);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
