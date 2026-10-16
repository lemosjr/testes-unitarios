// Exemplo 01 - Testes das 4 operações matemáticas
// Observações gerais (valem para todos os exemplos):
// - "() => { ... }" é uma arrow function: o bloco de código que o Jest executa.
// - "});" fecha a função e a chamada do describe/test/it aberta antes.
// - test e it são a mesma coisa; it deixa a frase mais natural em inglês ("it should...").

// require importa as funções exportadas pelo arquivo calculadora.js (o "./" indica a mesma pasta)
const { somar, subtrair, multiplicar, dividir } = require("./calculadora");

// describe cria um GRUPO de testes; o texto aparece como título no resultado
describe("Somar", () => {
  // test cria um caso de teste: 1º argumento = descrição, 2º = função com a verificação
  test("2 + 3 deve ser 5", () => {
    // expect recebe o valor OBTIDO; toBe verifica se ele é exatamente igual ao ESPERADO (5)
    expect(somar(2, 3)).toBe(5);
  });

  // it funciona igual ao test, só muda o nome
  it("soma com número negativo: -2 + 5 deve ser 3", () => {
    // chama somar(-2, 5) e espera que o resultado seja 3
    expect(somar(-2, 5)).toBe(3);
  });
});

// grupo de testes da subtração
describe("Subtrair", () => {
  // caso de teste com resultado positivo
  test("10 - 4 deve ser 6", () => {
    // verifica se subtrair(10, 4) retorna 6
    expect(subtrair(10, 4)).toBe(6);
  });

  // caso de teste com resultado negativo
  it("resultado negativo: 3 - 8 deve ser -5", () => {
    // verifica se subtrair(3, 8) retorna -5
    expect(subtrair(3, 8)).toBe(-5);
  });
});

// grupo de testes da multiplicação
describe("Multiplicar", () => {
  // caso de teste simples
  test("3 * 4 deve ser 12", () => {
    // verifica se multiplicar(3, 4) retorna 12
    expect(multiplicar(3, 4)).toBe(12);
  });

  // caso especial: multiplicação por zero
  it("qualquer número vezes 0 deve ser 0", () => {
    // verifica se multiplicar(7, 0) retorna 0
    expect(multiplicar(7, 0)).toBe(0);
  });
});

// grupo de testes da divisão
describe("Dividir", () => {
  // caso de teste simples
  test("10 / 2 deve ser 5", () => {
    // verifica se dividir(10, 2) retorna 5
    expect(dividir(10, 2)).toBe(5);
  });

  // caso com resultado decimal (dízima)
  it("divisão com resultado decimal: 1 / 3", () => {
    // toBeCloseTo compara números decimais com tolerância (evita erros de arredondamento)
    expect(dividir(1, 3)).toBeCloseTo(0.333);
  });

  // caso de erro: divisão por zero
  test("dividir por zero deve lançar erro", () => {
    // para testar erros, passamos uma FUNÇÃO para o expect; toThrow verifica a mensagem do erro
    expect(() => dividir(10, 0)).toThrow("Não é possível dividir por zero");
  });
});
