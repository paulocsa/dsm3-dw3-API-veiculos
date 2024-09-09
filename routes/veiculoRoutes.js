import express from 'express' //importando o express
const veiculoRoutes = express.Router()
import veiculoController from '../controllers/veiculoController.js'

// Endpoint para listar todos os veículos
veiculoRoutes.get("/veiculos", veiculoController.getAllVeiculos);

// Endpoint para cadastrar um veículo
veiculoRoutes.post("/veiculo",veiculoController.createVeiculo);

// Endpoint para deletar um veiculo
veiculoRoutes.delete("/veiculo/:id", veiculoController.deleteVeiculo);

// Endpoint para alterar um veiculo
veiculoRoutes.put("/veiculo/:id", veiculoController.updateVeiculo);

// Endpoint para listar um veiculo
veiculoRoutes.put("/veiculo/:id", veiculoController.getOneVeiculo);
export default veiculoRoutes