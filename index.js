function somar(a, b){
    return a + b;
}
function subtrair(a, b){
    return a - b;
}
function multiplicar(a, b){
    return a * b;
}
function dividir(a, b){
    if (b === 0) {
        return "Não é possível dividir por zero.";
    } else {
        return a / b;
    }
}

console.log(soma(10, 5));
console.log(subtracao(10, 5));
console.log(multiplicacao(10, 5));
console.log(divisao(10, 5));

// Comentário de teste adicionado

// COMENTÁRIO PARA TESTAR O STASH