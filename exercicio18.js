const verificarIdade = (idade) => {
    if (idade >= 18) {
        return "Maior de Idade"
    } else {
        return "Menor de idade"
    };
};
console.log(verificarIdade(17));
