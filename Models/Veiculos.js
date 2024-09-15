import mongoose from "mongoose";

// Aninhado
const specificationsSchema = new mongoose.Schema({
    engine: String,
    fuel: String,
    torque: Number,
    displacement: Number,
    steering: String,
    drivetrain: String
})


const veiculoSchema = new mongoose.Schema({
    model: String,
    year: Number,
    brand: String,
    color: String,
    category: String,
    specifications: [specificationsSchema]
})

const Veiculo = mongoose.model('Veiculo',veiculoSchema)

export default Veiculo