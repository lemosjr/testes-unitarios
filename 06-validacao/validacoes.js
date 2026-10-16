// Exemplo 06 - Funções de validação de dados

function validarEmail(email) {
  return email.includes("@") && email.includes(".");
}

function validarSenha(senha) {
  return senha.length >= 8;
}

function ehMaiorDeIdade(idade) {
  return idade >= 18;
}

module.exports = { validarEmail, validarSenha, ehMaiorDeIdade };
