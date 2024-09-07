import veiculoService from "../services/veiculoService.js";

//Criando um metodo para buscar todos os registros no banco
const getAllVeiculos = async (req,res) =>{
    try{
        const veiculos = await veiculoService.getAll();
        res.status(200).json({veiculos: veiculos})
    }catch(error){
        console.log(error)
        res.status(500).json({ error: "Erro interno do servidor!"})
    }
};

//Cadastrando um novo veículo
const createVeiculo = async(req,res) =>{
    try{
        const{modelo,year,marca,cor} = req.body;
        await veiculoService.Create(modelo,year,marca,cor);
        res.sendStatus(201); //Código 201(CREATED)
    }catch(error){
        console.log(error)
        res.status(500).json({error: "Erro interno do servidor!"})
    }
}

export default {getAllVeiculos, createVeiculo};

