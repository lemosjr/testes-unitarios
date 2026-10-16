// Exemplo 09 - Testes de conta bancária (incluindo erros)

// importa as funções do arquivo conta.js
const { depositar, sacar } = require("./conta");

// grupo de testes do depósito
describe("depositar", () => {
  // depósito válido
  test("depositar 50 em saldo 100 deve resultar em 150", () => {
    // verifica o novo saldo
    expect(depositar(100, 50)).toBe(150);
  });

  // depósito inválido
  it("depositar valor negativo deve lançar erro", () => {
    // a chamada fica dentro de uma função () => ... para o Jest capturar o erro
    expect(() => depositar(100, -10)).toThrow("Valor de depósito inválido");
  });
});

// grupo de testes do saque
describe("sacar", () => {
  // saque válido
  test("sacar 30 de saldo 100 deve resultar em 70", () => {
    // verifica o novo saldo
    expect(sacar(100, 30)).toBe(70);
  });

  // saque de todo o saldo
  it("sacar todo o saldo deve zerar a conta", () => {
    // verifica que o saldo final é 0
    expect(sacar(100, 100)).toBe(0);
  });

  // saque maior que o saldo
  test("sacar mais que o saldo deve lançar erro", () => {
    // toThrow sem mensagem só verifica se algum erro foi lançado
    expect(() => sacar(50, 80)).toThrow();
  });

  // saque válido não deve dar erro
  it("sacar valor válido não deve lançar erro", () => {
    // .not.toThrow garante que nenhum erro foi lançado
    expect(() => sacar(50, 20)).not.toThrow();
  });
});
