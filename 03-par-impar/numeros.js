// Exemplo 03 - Funções que retornam verdadeiro ou falso (booleanos)

function ehPar(numero) {
  return numero % 2 === 0;
}

function ehImpar(numero) {
  return numero % 2 !== 0;
}

function ehPositivo(numero) {
  return numero > 0;
}

module.exports = { ehPar, ehImpar, ehPositivo };
