// Exemplo 10 - Testes de função assíncrona (Promise / async-await)

// importa a função do arquivo usuarios.js
const { buscarUsuario } = require("./usuarios");

// grupo de testes da busca de usuário
describe("buscarUsuario", () => {
  // async antes da função permite usar await dentro do teste
  test("deve encontrar o usuário com id 1", async () => {
    // await espera a Promise terminar e guarda o resultado
    const usuario = await buscarUsuario(1);
    // verifica o nome do usuário encontrado
    expect(usuario.nome).toBe("Ana");
  });

  // outra forma: usando resolves
  it("deve retornar o objeto completo do usuário 2", async () => {
    // resolves "abre" a Promise e compara o valor resolvido com toEqual
    await expect(buscarUsuario(2)).resolves.toEqual({ id: 2, nome: "Bruno" });
  });

  // caso de erro em código assíncrono
  test("deve rejeitar quando o usuário não existe", async () => {
    // rejects verifica se a Promise falhou; toThrow confere a mensagem do erro
    await expect(buscarUsuario(99)).rejects.toThrow("Usuário não encontrado");
  });
});
