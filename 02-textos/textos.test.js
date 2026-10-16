// Exemplo 02 - Testes de funções com textos

// importa as funções do arquivo textos.js
const { paraMaiusculas, inverterTexto, contarCaracteres, saudacao } = require("./textos");

// grupo principal com todos os testes de texto
describe("Funções de texto", () => {
  // testa a conversão para letras maiúsculas
  test("paraMaiusculas transforma 'senac' em 'SENAC'", () => {
    // toBe compara strings exatamente (diferencia maiúsculas de minúsculas)
    expect(paraMaiusculas("senac")).toBe("SENAC");
  });

  // testa a inversão de um texto
  it("inverterTexto transforma 'jest' em 'tsej'", () => {
    // verifica se o texto foi invertido corretamente
    expect(inverterTexto("jest")).toBe("tsej");
  });

  // testa a contagem de caracteres
  test("contarCaracteres de 'Node' deve ser 4", () => {
    // verifica se a quantidade de caracteres é 4
    expect(contarCaracteres("Node")).toBe(4);
  });

  // testa o tamanho de um texto com outro matcher
  it("o texto 'JavaScript' tem 10 caracteres", () => {
    // toHaveLength verifica a propriedade length de strings e arrays
    expect("JavaScript").toHaveLength(10);
  });

  // testa a mensagem de saudação completa
  test("saudacao('Ana') deve retornar 'Olá, Ana!'", () => {
    // verifica a frase exata gerada pela função
    expect(saudacao("Ana")).toBe("Olá, Ana!");
  });

  // testa só uma parte da saudação
  it("saudacao deve conter o nome informado", () => {
    // toContain verifica se a string contém o trecho "Carlos"
    expect(saudacao("Carlos")).toContain("Carlos");
  });
});
