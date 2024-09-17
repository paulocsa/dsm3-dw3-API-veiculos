
# API Rest com MongoDB 
![NPM](https://img.shields.io/npm/l/react)

## API Veiculos
Esta API é utilizada para gerenciar um catálogo de veículos, permitindo operações de CRUD (criar, ler, atualizar e deletar) sobre registros de veículos. Desenvolvida com Node.js e Express, ela oferece integração eficiente em sistemas e aplicações, com o MongoDB como banco de dados para armazenamento das informações.




# Documentação da API


## Endpoints

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

Quando a solicitação é processada com sucesso, a API retorna um status 200, indicando que a listagem de todos os veículos cadastrados no banco de dados foi obtida com êxito. A resposta inclui um colorpo com os dados dos veículos.


```
{
	"veiculos": [
		{
			"_id": "66e72b88e79b81722c67cad1",
			"model": "Mustang",
			"year": 2024,
			"brand": "Ford",
			"color": "Vermelho",
			"category": "Esportivo",
			"specifications": [
				{
					"engine": "5.0 V8",
					"fuel": "Gasolina",
					"torque": 450,
					"displacement": 4951,
					"steering": "Hidráulica",
					"drivetrain": "Tração traseira"
				}
			],
			"__v": 0
		},
		{
			"_id": "66e7335be79b81722c67cad6",
			"model": "colorolla",
			"year": 2024,
			"brand": "Toyota",
			"color": "Prata",
			"category": "Sedã",
			"specifications": [
				{
					"engine": "2.0 Flex",
					"fuel": "Gasolina/Álcool",
					"torque": 200,
					"displacement": 1987,
					"steering": "Elétrica",
					"drivetrain": "Tração dianteira"
				}
			],
			"__v": 0
		}
	]
}
```

#### Resposta de Erro Interno do Servidor! 500

Quando ocolorre um erro inesperado no servidor durante o processamento da solicitação, a API retorna um status 500 Internal Server Error. Isso indica que houve uma falha interna no sistema. O colorpo da resposta pode conter uma mensagem de erro detalhada, útil para depuração, mas geralmente não revela informações sensíveis.

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

Quando a solicitação é processada com sucesso, a API retorna um status 200, indicando que o veículo específico foi obtido com êxito. A resposta inclui um colorpo com os dados do veículo solicitado.


```
{
	"veiculos": [
		{
			"_id": "66e71a32e79b81722c67ca9f",
			"model": "Mustang",
			"year": 2024,
			"brand": "Ford",
			"color": "Vermelho",
			"category": "Esportivo",
			"specifications": [
				{
					"engine": "5.0 V8",
					"fuel": "Gasolina",
					"torque": 450,
					"displacement": 4951,
					"steering": "Hidráulica",
					"drivetrain": "Tração traseira"
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

Retornado quando ocolorre um erro inesperado no servidor. O código de status 500 indica que houve um problema interno que impediu o processamento da requisição.

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
| `model` | `String` | Obrigatório. O modelo do veículo. |
| `year` | `Number` | Obrigatório. O ano do veículo. |
| `brand` | `String` | Obrigatório. A marca do veículo. |
| `color` | `String` | Obrigatório. A cor do veículo. |
| `category` | `String` |Obrigatório. A categoria do veículo. |
| `specifications` | `object[]` | Obrigatório. Especificações detalhadas do veículo. |

### Parametros do objeto "specifications"
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `engine` | `String` | Opcional . O tipo de motorização do veículo. |
| `fuel` | `string` |Opcional . Tipo de combustível utilizado.|
| `torque` | `number` | Opcional . O torque do motor (Nm).|
| `displacement` | `string` |Opcional . A cilindrada do motor (cc).|
| `steering` | `string` |Opcional . Tipo de direção (ex: hidráulica).|
| `drivetrain` | `string` | Opcional . Especificações detalhadas do veículo.|

#### Código
```
veiculoRoutes.post("/veiculo",veiculoController.createVeiculo);
```

## Exemplo da Requisição

```
{
    "model": "Mustang",
    "year": 2024,
    "brand": "Ford",
    "color": "Vermelho",
    "category": "Esportivo",
    "specifications": [
      {
        "engine": "5.0 V8",
        "fuel": "Gasolina",
        "torque": 450,
        "displacement": 4951,
        "steering": "Hidráulica",
        "drivetrain": "Tração traseira"
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
Caso essa resposta aconteça, significa que ocolorreu um erro interno no servidor.
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
Caso essa resposta aconteça, significa que ocolorreu um erro interno no servidor.
```
{
    "err": "Erro interno do servidor!"
}
```
## Para Alterar um veículo
```http
     PUT /veiculo/:id
```
Esse endpoint é responsável por alterar os detalhes de um veículo específico identificado pelo seu id.


### Parametros da requisição
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `model` | `String` | Opcional. O modelo do veículo. |
| `year` | `Number` | Opcional. O ano do veículo. |
| `brand` | `String` | Opcional. A marca do veículo. |
| `color` | `String` | Opcional. A cor do veículo. |
| `category` | `String` |Opcional. A categoria do veículo. |
| `specifications` | `object[]` | Opcional. Especificações detalhadas do veículo. |

### Parametros do objeto "specifications"
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `engine` | `String` | Opcional. O tipo de motorização do veículo. |
| `fuel` | `string` |Opcional. Tipo de combustível utilizado.|
| `torque` | `number` | Opcional. O torque do motor (Nm).|
| `displacement` | `string` |Opcional. A cilindrada do motor (cc).|
| `steering` | `string` |Opcional. Tipo de direção (ex: hidráulica).|
| `drivetrain` | `string` | Opcional. Especificações detalhadas do veículo.|

#### Código
```
veiculoRoutes.put("/veiculo/:id", veiculoController.updateVeiculo);
```
## Exemplo da Requisição

```
{
  "model": "Civic",
  "year": 2021,
  "brand": "Honda",
  "color": "Azul",
  "category": "Sedan",
  "specifications": [
    {
      "engine": "2.0",
      "fuel": "Gasolina",
      "torque": 310,
      "displacement": 1996,
      "steering": "Elétrica",
      "drivetrain": "Dianteira"
    }
  ]
}
```

### Respostas

#### Resposta de Sucesso (200)
Retorna os detalhes atualizados do veículo após a modificação. O colorpo da resposta contém um objeto com as informações do veículo, incluindo as especificações técnicas.

```
{
  "veiculo": {
    "model": "Civic",
    "year": 2021,
    "brand": "Honda",
    "color": "Azul",
    "category": "Sedan",
    "specifications": [
      {
        "engine": "2.0",
        "fuel": "Gasolina",
        "torque": 310,
        "displacement": 1996,
        "steering": "Elétrica",
        "drivetrain": "Dianteira"
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
Retornado quando ocolorre um erro inesperado no servidor. O código de status 500 indica que houve um problema interno que impediu o processamento da requisição.
```
{
    "err": "Erro interno do servidor!"
}
```


## VARIAVEIS DE AMBIENTE

Para configurar e rodar o projeto colorretamente, você precisa definir algumas variáveis de ambiente. Siga as instruções abaixo para configurar seu arquivo .env:

- Crie um arquivo .env na raiz do seu projeto, se ainda não existir.
   
- Adicione as seguintes variáveis de ambiente ao arquivo .env:
```
MONGODB_URI=mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.juxr5.mongodb.net/api-veiculos?retryWrites=true&w=majority&appName=Cluster0



