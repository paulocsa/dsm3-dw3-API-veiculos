import veiculoService from "../services/veiculoService.js";
import { ObjectId } from "mongodb";

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
};

//Deletando um veiculo
const deleteVeiculo = async (req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            veiculoService.Delete(id)
            res.sendStatus(204)// Código 204 (NO CONTENT)
        }else{
            res.sendStatus(400)// Código 400 (BAD REQUEST)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro interno do servidor.'}) // Código 500 (BAD REQUEST)
    }
};

//Alterando um Veiculo
const updateVeiculo = async (req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)) {
            const id = req.params.id;
            const { modelo,year,marca,cor } = req.body;
            const veiculo = await veiculoService.Update(id, modelo, year, marca, cor);
            res.status(200).json({ veiculo }); //Código 200(OK)
        } else {
            res.sendStatus(400) //Código 400 (BAD REQUEST)
        }
    }catch (error){
        console.log(error);
        res.sendStatus(500); //Código 500 (Erro interno do servidor)
    }
};

//listando um unico Veiculo
const getOneVeiculo = async (req, res) => {
    try{
        if (ObjectId.isValid(req.params.id)){
            const id = req.params.id
            const veiculo = await veiculoService.getOne(id)
            if (!veiculo) {
                res.sendStatus(404) //Jogo não encontrado
            } else {
                res.status(200).json({ veiculo })
            }
        } else {
            res.sendStatus(400) //Requisição inválida - Bad request
        }
        } catch (error) {
            console.log(error)
            res.sendStatus(500) // Erro interno do Servidor
        }
};

export default {getAllVeiculos, createVeiculo, deleteVeiculo, updateVeiculo, getOneVeiculo};

