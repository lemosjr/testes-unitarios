// Exemplo 02 - Funções que trabalham com textos (strings)

function paraMaiusculas(texto) {
  return texto.toUpperCase();
}

function inverterTexto(texto) {
  return texto.split("").reverse().join("");
}

function contarCaracteres(texto) {
  return texto.length;
}

function saudacao(nome) {
  return `Olá, ${nome}!`;
}

module.exports = { paraMaiusculas, inverterTexto, contarCaracteres, saudacao };
