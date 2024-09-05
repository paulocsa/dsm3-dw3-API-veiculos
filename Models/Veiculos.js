import mongoose from "mongoose";

const veiculoSchema = new mongoose.Schema({
    modelo: String,
    year: Number,
    marca: String,
    cor: String
})

const Veiculo = mongoose.model('Veiculo',veiculoSchema)

export default Veiculo