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

//Cadastro de veiculo na API
async Create(model,year,brand,color,category,specifications) {
    try{
        const newVeiculo = new Veiculo({
            model,
            year,
            brand,
            color,
            category,
            specifications
        })
        await newVeiculo.save()
    }catch(error){
        console.log(error)
    }
}

// Delete veiculo na API
async Delete(id){
    try{
        await Veiculo.findByIdAndDelete(id);
        console.log(`Veiculo com a id: ${id} foi deletado.`)
    } catch (error) {
        console.log(error)
    }
}

// Alterando dados de um veiculo na API
async Update(id,model,year,brand,color,category,specifications){
    try{
        const updateVeiculo = await Veiculo.findByIdAndUpdate(
            id,
            {
                model,
                year,
                brand,
                color,
                category,
                specifications
            },
            { new: true }
        );
        console.log(`Dados do veiculo com id: ${id} alterandos com sucesso.`);
        return updateVeiculo;
    } catch (error) {
        console.log(error)
    }
}


// Buscando um veiculo especifico na API
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