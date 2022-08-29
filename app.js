const express = require("express");
const { randomUUID } = require("crypto");

const app = express();

app.use(express.json());

const produtos = [];

app.post("/products", (request, response) => {
  const { name, price } = request.body;

  const product = {
    name,
    price,
    id: randomUUID(),
  };

  produtos.push(product);

  return response.json(product);
});

app.get("/products", (request, response) => 
{
    
     return response.json(produtos)
});

app.get("/products/:id", (request, response) => 
{
  const {id} = request.params;

  const prod = produtos.find(product => product.id === id)

  return response.json(prod)
})

app.put("/products/:id", (request, response) =>
{
  const {id} = request.params;
  const {name, price} = request.body;

  const prodIndex = produtos.findIndex((prod) => prod.id === id)

  produtos[prodIndex] = { 
    ...produtos[prodIndex], 
    name, price
  }

  return response.json({message: "Alterado com sucesso !"})

})

app.delete("/products/:id",(request,response) => {
  const {id} = request.params;

  const prodIndex = produtos.findIndex((prod) => prod.id === id)

  produtos.splice(prodIndex, 1)

  return response.json({message:"removido com sucesso"})
})

app.listen(4002, () => {
  console.log("server is runing");
});
