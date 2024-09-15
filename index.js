import express from "express";
const app = express();
// import mongoose from "mongoose"
import mongoose from "./config/db-connection.js";
import Veiculo from "./Models/Veiculos.js";//importando o model
import veiculosRoutes from "./routes/veiculoRoutes.js" //importando as rotas

//Configurano o Express
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/",veiculosRoutes);


//Conexão com o banco de dados do mongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/api-veiculos") 

//Configurando a API na porta 4000
const port = 4000;
app.listen(port, (error) => {
    if(error){
        console.log(error);
    }
    console.log(`API rodando em http://localhost:${port}.`);
});

