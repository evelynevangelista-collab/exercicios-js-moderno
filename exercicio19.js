const jogo = {
    titulo: "Minecraft",
    genero:"Sandbox",
    preco: 99
};

const exibirFunction = {titulo, genero, preco} = jogo;
console.log(`${titulo} é um jogo do gênero ${genero} e custa R$ ${preco}. `);