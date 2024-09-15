import mongoose from "mongoose";

// Aninhado
const especificacoesSchema = new mongoose.Schema({
    motorizacao: String,
    combustivel: String,
    torque: Number,
    cilindrada: Number,
    direcao: String,
    typeTracao: String,
})


const veiculoSchema = new mongoose.Schema({
    modelo: String,
    year: Number,
    marca: String,
    cor: String,
    categoria: String,
    especificacoes: [especificacoesSchema]
})

const Veiculo = mongoose.model('Veiculo',veiculoSchema)

export default Veiculo