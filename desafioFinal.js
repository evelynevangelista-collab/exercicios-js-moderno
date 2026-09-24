const notebook = {
  marca: "Dell",
  modelo: "Inspiron",
  preco: 3500,
  desconto: 500
};

const calcularPrecoFinal = (preco, desconto) => preco - desconto;

const {marca, modelo, preco, desconto} = notebook;

console.log(`Notebook ${marca} ${modelo}`);
console.log(`Preco original: ${preco}`);
console.log(`Desconto:  R$ ${desconto}`);
console.log(`Preço final: R$ ${calcularPrecoFinal(preco, desconto)}`);

