
# API Rest com MongoDB 
![NPM](https://img.shields.io/npm/l/react)

## API Veiculos
Esta API é utilizada para gerenciar um catálogo de veículos, permitindo operações de CRUD (criar, ler, atualizar e deletar) sobre registros de veículos. Desenvolvida com Node.js e Express, ela oferece integração eficiente em sistemas e aplicações, com o MongoDB como banco de dados para armazenamento das informações.




# Documentação da API


## End Points

### Para retornar todos os veículos
```http
  GET /veiculos
```
Esse endpoint é responsável por retornar a listagem de todos os veículos cadastrados no banco de dados.



| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `-` | `-` | Não há parâmetros para este endpoint. |

#### Código
```
veiculoRoutes.get("/veiculos", veiculoController.getAllVeiculos);
```

### Respostas

#### Resposta de Sucesso (200)

Quando a solicitação é processada com sucesso, a API retorna um status 200, indicando que a listagem de todos os veículos cadastrados no banco de dados foi obtida com êxito. A resposta inclui um corpo com os dados dos veículos.


```
{
	"veiculos": [
		{
			"_id": "66e71a32e79b81722c67ca9f",
			"modelo": "Mustang",
			"year": 2024,
			"marca": "Ford",
			"cor": "Vermelho",
			"categoria": "Esportivo",
			"especificacoes": [
				{
					"motorizacao": "5.0 V8",
					"combustivel": "Gasolina",
					"torque": 450,
					"cilindrada": 4951,
					"direcao": "Hidráulica",
					"typeTracao": "Tração traseira",
					"_id": "66e71a32e79b81722c67caa0"
				}
			],
			"__v": 0
		}
	]
}
```

#### Resposta de Erro Interno do Servidor! 500

Quando ocorre um erro inesperado no servidor durante o processamento da solicitação, a API retorna um status 500 Internal Server Error. Isso indica que houve uma falha interna no sistema. O corpo da resposta pode conter uma mensagem de erro detalhada, útil para depuração, mas geralmente não revela informações sensíveis.

```
{
    "err": "Erro interno do servidor!"
}
```






### Para retornar um veículo específico
```http
  GET /veiculo/:id
```
Esse endpoint é responsável por retornar os detalhes de um veículo específico identificado pelo seu id.



| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | Obrigatório. O ID do veículo a ser retornado. |

#### Código
```
veiculoRoutes.get("/veiculo/:id", veiculoController.getOneVeiculo);
```

### Respostas

#### Resposta de Sucesso (200)

Quando a solicitação é processada com sucesso, a API retorna um status 200, indicando que o veículo específico foi obtido com êxito. A resposta inclui um corpo com os dados do veículo solicitado.


```
{
	"veiculos": [
		{
			"_id": "66e71a32e79b81722c67ca9f",
			"modelo": "Mustang",
			"year": 2024,
			"marca": "Ford",
			"cor": "Vermelho",
			"categoria": "Esportivo",
			"especificacoes": [
				{
					"motorizacao": "5.0 V8",
					"combustivel": "Gasolina",
					"torque": 450,
					"cilindrada": 4951,
					"direcao": "Hidráulica",
					"typeTracao": "Tração traseira",
					"_id": "66e71a32e79b81722c67caa0"
				}
			],
			"__v": 0
		}
	]
}
```

#### Erro (404 Not Found)

Retornado quando não há um veículo com o id especificado no banco de dados. O código de status 404 indica que o recurso solicitado não foi encontrado.

```
{
  "error": "Veículo não encontrado!"
}
```

#### Erro (400 Bad Request)

Retornado quando o id fornecido não é um formato válido. O código de status 400 indica que a requisição é inválida devido a um problema com o parâmetro fornecido.

```
{
  "error": "ID inválido fornecido!"
}
```


#### Erro (500 Internal Server Error)

Retornado quando ocorre um erro inesperado no servidor. O código de status 500 indica que houve um problema interno que impediu o processamento da requisição.

```
{
  "error": "ID inválido fornecido!"
}
```





## Para cadastrar um novo veículo
```http
  POST /veiculo
```
Esse endpoint é responsável por cadastrar um novo veículo no banco de dados.

### Parametros da requisição
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `modelo` | `String` | Obrigatório. O modelo do veículo. |
| `year` | `Number` | Obrigatório. O ano do veículo. |
| `marca` | `String` | Obrigatório. A marca do veículo. |
| `cor` | `String` | Obrigatório. A cor do veículo. |
| `categoria` | `String` |Obrigatório. A categoria do veículo. |
| `especificacoes` | `object[]` | Obrigatório. Especificações detalhadas do veículo. |

### Parametros do objeto "especificacoes"
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `motorizacao` | `String` | Obrigatório. O tipo de motorização do veículo. |
| `combustivel` | `string` |Obrigatório. Tipo de combustível utilizado.|
| `torque` | `number` | Obrigatório. O torque do motor (Nm).|
| `cilindrada` | `string` |Obrigatório. A cilindrada do motor (cc).|
| `direcao` | `string` |Obrigatório. Tipo de direção (ex: hidráulica).|
| `typeTracao` | `string` | Obrigatório. Especificações detalhadas do veículo.|

#### Código
```
veiculoRoutes.post("/veiculo",veiculoController.createVeiculo);
```

## Exemplo da Requisição

```
{
    "modelo": "Mustang",
    "year": 2024,
    "marca": "Ford",
    "cor": "Vermelho",
    "categoria": "Esportivo",
    "especificacoes": [
      {
        "motorizacao": "5.0 V8",
        "combustivel": "Gasolina",
        "torque": 450,
        "cilindrada": 4951,
        "direcao": "Hidráulica",
        "typeTracao": "Tração traseira"
      }
    ]
}
```

### Respostas

#### Resposta de Sucesso (201)
Caso essa resposta seja retornada, o novo veículo foi criado com sucesso.
```
Created
```

#### Resposta de Erro Interno do Servidor(500)
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.
```
{
    "err": "Erro interno do servidor!"
}
```






## Para deletar um veículo

```http
    DELETE /veiculo/:id
```
Esse endpoint é responsável por deletar um veículo específico identificado pelo seu id.


| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | Obrigatório. O ID do veículo a ser deletado.|

#### Código
```
veiculoRoutes.delete("/veiculo/:id", veiculoController.deleteVeiculo);
```


### Respostas

#### Resposta de Sucesso (204)
O veículo foi deletado com sucesso. O código de status 204 indica que a requisição foi bem-sucedida e não há conteúdo adicional na resposta.



#### Erro (400 Bad Request)
Retornado quando o id fornecido não é um formato válido. O código de status 400 indica que a requisição é inválida devido a um problema com o parâmetro fornecido.

```
{
  "error": "ID inválido fornecido!"
}
```

#### Resposta de Erro Interno do Servidor(500)
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.
```
{
    "err": "Erro interno do servidor!"
}## Para Alterar um veículo
```http
     PUT /veiculo/:id
```
Esse endpoint é responsável por alterar os detalhes de um veículo específico identificado pelo seu id.


### Parametros da requisição
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `modelo` | `String` | Opcional. O modelo do veículo. |
| `year` | `Number` | Opcional. O ano do veículo. |
| `marca` | `String` | Opcional. A marca do veículo. |
| `cor` | `String` | Opcional. A cor do veículo. |
| `categoria` | `String` |Opcional. A categoria do veículo. |
| `especificacoes` | `object[]` | Opcional. Especificações detalhadas do veículo. |

### Parametros do objeto "especificacoes"
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `motorizacao` | `String` | Opcional. O tipo de motorização do veículo. |
| `combustivel` | `string` |Opcional. Tipo de combustível utilizado.|
| `torque` | `number` | Opcional. O torque do motor (Nm).|
| `cilindrada` | `string` |Opcional. A cilindrada do motor (cc).|
| `direcao` | `string` |Opcional. Tipo de direção (ex: hidráulica).|
| `typeTracao` | `string` | Opcional. Especificações detalhadas do veículo.|

#### Código
```
veiculoRoutes.put("/veiculo/:id", veiculoController.updateVeiculo);
```
## Exemplo da Requisição

```
{
  "modelo": "Civic",
  "year": 2021,
  "marca": "Honda",
  "cor": "Azul",
  "categoria": "Sedan",
  "especificacoes": [
    {
      "motorizacao": "2.0",
      "combustivel": "Gasolina",
      "torque": 310,
      "cilindrada": 1996,
      "direcao": "Elétrica",
      "typeTracao": "Dianteira"
    }
  ]
}
```

### Respostas

#### Resposta de Sucesso (200)
Retorna os detalhes atualizados do veículo após a modificação. O corpo da resposta contém um objeto com as informações do veículo, incluindo as especificações técnicas.

```
{
  "veiculo": {
    "modelo": "Civic",
    "year": 2021,
    "marca": "Honda",
    "cor": "Azul",
    "categoria": "Sedan",
    "especificacoes": [
      {
        "motorizacao": "2.0",
        "combustivel": "Gasolina",
        "torque": 310,
        "cilindrada": 1996,
        "direcao": "Elétrica",
        "typeTracao": "Dianteira"
      }
    ]
  }
}
```



#### Erro (400 Bad Request)
Retornado quando o id fornecido não é um formato válido. O código de status 400 indica que a requisição é inválida devido a um problema com o parâmetro fornecido.

```
{
  "error": "ID inválido fornecido!"
}
```

#### Resposta de Erro Interno do Servidor(500)
Retornado quando ocorre um erro inesperado no servidor. O código de status 500 indica que houve um problema interno que impediu o processamento da requisição.
```
{
    "err": "Erro interno do servidor!"
}
```


## VARIAVEIS DE AMBIENTE

Para configurar e rodar o projeto corretamente, você precisa definir algumas variáveis de ambiente. Siga as instruções abaixo para configurar seu arquivo .env:

- Crie um arquivo .env na raiz do seu projeto, se ainda não existir.
   
- Adicione as seguintes variáveis de ambiente ao arquivo .env:
```
MONGODB_URI=mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.juxr5.mongodb.net/api-veiculos?retryWrites=true&w=majority&appName=Cluster0



