import express from 'express' //importando o express
const veiculoRoutes = express.Router()
import veiculoController from '../controllers/veiculoController.js'

// Endpoint para listar todos os veículos
veiculoRoutes.get("/veiculos", veiculoController.getAllVeiculos)

// Endpoint para cadastrar um veículo
veiculoRoutes.post("/veiculo",veiculoController.createVeiculo)


export default veiculoRoutes