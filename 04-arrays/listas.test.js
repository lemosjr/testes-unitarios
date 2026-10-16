// Exemplo 04 - Testes de funções com arrays

// importa as funções do arquivo listas.js
const { somarLista, maiorValor, filtrarPares, adicionarItem } = require("./listas");

// grupo principal com todos os testes de listas
describe("Funções de listas", () => {
  // testa a soma de todos os elementos
  test("somarLista([1, 2, 3, 4]) deve ser 10", () => {
    // a função retorna um número, então usamos toBe
    expect(somarLista([1, 2, 3, 4])).toBe(10);
  });

  // testa a busca do maior número
  it("maiorValor([3, 9, 2]) deve ser 9", () => {
    // verifica se o maior valor encontrado é 9
    expect(maiorValor([3, 9, 2])).toBe(9);
  });

  // testa o filtro de números pares
  test("filtrarPares([1, 2, 3, 4, 5, 6]) deve retornar [2, 4, 6]", () => {
    // toEqual compara o CONTEÚDO do array (toBe falharia, pois são arrays diferentes na memória)
    expect(filtrarPares([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });

  // testa se o item foi adicionado à lista
  it("adicionarItem deve incluir o novo item na lista", () => {
    // guarda o resultado em uma variável para fazer mais de uma verificação
    const frutas = adicionarItem(["maçã", "banana"], "uva");
    // toContain verifica se o array contém o elemento "uva"
    expect(frutas).toContain("uva");
    // toHaveLength verifica se o array agora tem 3 elementos
    expect(frutas).toHaveLength(3);
  });
});
