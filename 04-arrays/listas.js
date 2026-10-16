// Exemplo 04 - Funções que trabalham com listas (arrays)

function somarLista(numeros) {
  return numeros.reduce((total, numero) => total + numero, 0);
}

function maiorValor(numeros) {
  return Math.max(...numeros);
}

function filtrarPares(numeros) {
  return numeros.filter((numero) => numero % 2 === 0);
}

function adicionarItem(lista, item) {
  return [...lista, item];
}

module.exports = { somarLista, maiorValor, filtrarPares, adicionarItem };
