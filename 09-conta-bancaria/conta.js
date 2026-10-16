// Exemplo 09 - Conta bancária com tratamento de erros

function depositar(saldo, valor) {
  if (valor <= 0) {
    throw new Error("Valor de depósito inválido");
  }
  return saldo + valor;
}

function sacar(saldo, valor) {
  if (valor > saldo) {
    throw new Error("Saldo insuficiente");
  }
  return saldo - valor;
}

module.exports = { depositar, sacar };
