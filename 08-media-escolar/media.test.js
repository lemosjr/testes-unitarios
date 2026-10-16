// Exemplo 08 - Testes de média escolar

// importa as funções do arquivo media.js
const { calcularMedia, situacao } = require("./media");

// grupo de testes do cálculo da média
describe("calcularMedia", () => {
  // média de notas inteiras
  test("média de [8, 6, 10] deve ser 8", () => {
    // verifica o valor exato da média
    expect(calcularMedia([8, 6, 10])).toBe(8);
  });

  // a média nunca pode passar de 10
  it("média de notas válidas deve estar entre 0 e 10", () => {
    // calcula a média e guarda na variável
    const media = calcularMedia([10, 9, 7.5]);
    // toBeGreaterThanOrEqual: maior ou igual a 0
    expect(media).toBeGreaterThanOrEqual(0);
    // toBeLessThanOrEqual: menor ou igual a 10
    expect(media).toBeLessThanOrEqual(10);
  });
});

// grupo de testes da situação do aluno
describe("situacao", () => {
  // média 7 ou mais
  test("média 7 deve ser 'Aprovado'", () => {
    // verifica o texto retornado
    expect(situacao(7)).toBe("Aprovado");
  });

  // média entre 5 e 6.9
  it("média 5.5 deve ser 'Recuperação'", () => {
    // verifica o texto retornado
    expect(situacao(5.5)).toBe("Recuperação");
  });

  // média abaixo de 5
  test("média 3 deve ser 'Reprovado'", () => {
    // verifica o texto retornado
    expect(situacao(3)).toBe("Reprovado");
  });
});
