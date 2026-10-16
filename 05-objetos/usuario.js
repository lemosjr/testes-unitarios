// Exemplo 05 - Funções que criam e alteram objetos

function criarUsuario(nome, idade) {
  return { nome, idade, ativo: true };
}

function desativarUsuario(usuario) {
  return { ...usuario, ativo: false };
}

module.exports = { criarUsuario, desativarUsuario };
