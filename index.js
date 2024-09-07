import express from "express"; // importando o express
import mongoose from "mongoose"; //importando o mongoose
import Veiculo from "./Models/Veiculos.js";//importando o model
import veiculosRoutes from "./routes/veiculoRoutes.js" //importando as rotas

const app = express();

//Configurano o Express
app.use(express.urlencoded({extend: false}));
app.use(express.json());
app.use("/",veiculosRoutes);

//Testando a API
app.get("/", (req,res) => {
    const veiculos = [
        {
            modelo: "Golf Gti",
            year: "2024",
            marca: "Volkswagen",
            cor: "Vermelho",
        },
        {
            modelo: "Audi A3",
            year: "2021",
            marca: "Audi",
            cor: "Branco",  
        }
    ];
    res.json(veiculos);
})

//Conexão com o banco de dados do mongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-veiculos") 




//Configurando a API na porta 4000
const port = 4000;
app.listen(port, (error) => {
    if(error){
        console.log(error);
    }
    console.log(`API rodando em http://localhost:${port}.`);
});

