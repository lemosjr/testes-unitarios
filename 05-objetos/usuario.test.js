// Exemplo 05 - Testes de funções com objetos

// importa as funções do arquivo usuario.js
const { criarUsuario, desativarUsuario } = require("./usuario");

// grupo de testes da criação de usuário
describe("criarUsuario", () => {
  // testa o objeto completo
  test("deve criar um usuário com nome, idade e ativo = true", () => {
    // chama a função e guarda o objeto criado
    const usuario = criarUsuario("Maria", 25);
    // toEqual compara todas as propriedades e valores do objeto
    expect(usuario).toEqual({ nome: "Maria", idade: 25, ativo: true });
  });

  // testa apenas uma propriedade
  it("deve ter a propriedade nome", () => {
    // cria um novo usuário para este teste
    const usuario = criarUsuario("João", 30);
    // toHaveProperty verifica se a propriedade existe e tem o valor informado
    expect(usuario).toHaveProperty("nome", "João");
  });
});

// grupo de testes da desativação de usuário
describe("desativarUsuario", () => {
  // testa se o campo ativo mudou
  test("deve mudar ativo para false", () => {
    // cria um usuário ativo
    const usuario = criarUsuario("Pedro", 40);
    // desativa o usuário e guarda o resultado
    const desativado = desativarUsuario(usuario);
    // acessa a propriedade ativo e verifica se é false
    expect(desativado.ativo).toBe(false);
  });

  // testa se os outros dados foram mantidos
  it("deve manter o nome e a idade", () => {
    // cria e desativa o usuário em uma única linha
    const desativado = desativarUsuario(criarUsuario("Lia", 22));
    // verifica se o nome continua o mesmo
    expect(desativado.nome).toBe("Lia");
    // verifica se a idade continua a mesma
    expect(desativado.idade).toBe(22);
  });
});
