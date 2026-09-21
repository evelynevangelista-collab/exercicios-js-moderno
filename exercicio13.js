const produto = {
  nome: "Mouse",
  preco: 80
};
const mostrarProduto = ({ nome, preco }) => {

console.log(`Produto: ${nome} - Preço $ ${preco} `);
};
console.log(mostrarProduto(produto));