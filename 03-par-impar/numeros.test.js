// Exemplo 03 - Testes de funções que retornam true ou false

// importa as funções do arquivo numeros.js
const { ehPar, ehImpar, ehPositivo } = require("./numeros");

// grupo de testes da função ehPar
describe("ehPar", () => {
  // caso em que o número é par
  test("4 é par", () => {
    // toBe(true) verifica se o retorno é exatamente true
    expect(ehPar(4)).toBe(true);
  });

  // caso em que o número é ímpar
  it("7 não é par", () => {
    // toBe(false) verifica se o retorno é exatamente false
    expect(ehPar(7)).toBe(false);
  });
});

// grupo de testes da função ehImpar
describe("ehImpar", () => {
  // caso em que o número é ímpar
  test("9 é ímpar", () => {
    // toBeTruthy aceita qualquer valor considerado verdadeiro
    expect(ehImpar(9)).toBeTruthy();
  });

  // caso em que o número é par
  it("10 não é ímpar", () => {
    // toBeFalsy aceita qualquer valor considerado falso (false, 0, "", null, undefined)
    expect(ehImpar(10)).toBeFalsy();
  });
});

// grupo de testes da função ehPositivo
describe("ehPositivo", () => {
  // caso com número positivo
  test("5 é positivo", () => {
    // verifica se o retorno é true
    expect(ehPositivo(5)).toBe(true);
  });

  // caso com número negativo
  it("-3 não é positivo", () => {
    // .not inverte o matcher: espera que o resultado NÃO seja true
    expect(ehPositivo(-3)).not.toBe(true);
  });
});
