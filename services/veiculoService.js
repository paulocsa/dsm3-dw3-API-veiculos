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

//Cadastro de veiculos na API
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

// Delete de veiculos na API
async Delete(id){
    try{
        await Veiculo.findByIdAndDelete(id);
        console.log(`Veiculo com a id: ${id} foi deletado.`)
    } catch (error) {
        console.log(error)
    }
}

// Alterando dados de um veiculo na API
async Update(id,modelo,year,marca,cor){
    try{
        const updateVeiculo = await Veiculo.findByIdAndUpdate(
            id,
            {
                modelo,
                year,
                marca,
                cor,
            },
            { new: true }
        );
        console.log(`Dados do veiculo com id: ${id} alterandos com sucesso.`);
        return updateVeiculo;
    } catch (error) {
        console.log(error)
    }
}

async getOne(id){
    try{
        const veiculo = await Veiculo.findOne({_id: id})
        return veiculo
    } catch(error){
        console.log(error)
    }
}
}

export default new veiculoService();