const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Conectado com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    process.exit(1);
  }
}

module.exports = { main };
