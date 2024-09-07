import Veiculo from "../Models/Veiculos.js";

class veiculoService{

//Listar todos os veículos
    async getAll(){
        try{
            const veiculos = await Veiculo.find();
            return veiculos
        }catch(error){
            console.log(error);
        }
    }

//Cadastro de veiculos na api
async Create(modelo,year,marca,cor) {
    try{
        const newVeiculo = new Veiculo({
            modelo,
            year,
            marca,
            cor
        })
        await newVeiculo.save()
    }catch(error){
        console.log(error)
    }
}

}

export default new veiculoService();