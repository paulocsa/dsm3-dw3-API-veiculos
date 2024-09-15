import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

// Conectando aplicação com MongoDB Atlas (nuvem)
mongoose.connect(process.env.MONGODB_URI);
const connection = mongoose.connection;

connection.on("error", () => {
  console.log("Erro ao conectar com o mongoDB Atlas!");
});

connection.on("open", () => {
  console.log("Conectado ao mongoDB Atlas com sucesso!");
});


export default mongoose;