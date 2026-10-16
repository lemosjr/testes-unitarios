// Exemplo 06 - Testes de funções de validação

// importa as funções do arquivo validacoes.js
const { validarEmail, validarSenha, ehMaiorDeIdade } = require("./validacoes");

// grupo de testes da validação de e-mail
describe("validarEmail", () => {
  // caso válido
  test("aceita 'aluno@senac.br'", () => {
    // espera que o e-mail seja considerado válido (true)
    expect(validarEmail("aluno@senac.br")).toBe(true);
  });

  // caso inválido
  it("rejeita e-mail sem @", () => {
    // espera que o e-mail sem @ seja considerado inválido (false)
    expect(validarEmail("aluno.senac.br")).toBe(false);
  });
});

// grupo de testes da validação de senha
describe("validarSenha", () => {
  // caso válido: 8 caracteres ou mais
  test("aceita senha com 8 caracteres", () => {
    // toBeTruthy: o resultado deve ser verdadeiro
    expect(validarSenha("12345678")).toBeTruthy();
  });

  // caso inválido: senha curta
  it("rejeita senha com menos de 8 caracteres", () => {
    // toBeFalsy: o resultado deve ser falso
    expect(validarSenha("123")).toBeFalsy();
  });
});

// grupo de testes da verificação de idade
describe("ehMaiorDeIdade", () => {
  // caso limite: exatamente 18 anos
  test("18 anos é maior de idade", () => {
    // testar o valor limite (18) ajuda a encontrar erros como usar > no lugar de >=
    expect(ehMaiorDeIdade(18)).toBe(true);
  });

  // caso abaixo do limite
  it("17 anos não é maior de idade", () => {
    // .not.toBe(true): o resultado não pode ser true
    expect(ehMaiorDeIdade(17)).not.toBe(true);
  });
});
