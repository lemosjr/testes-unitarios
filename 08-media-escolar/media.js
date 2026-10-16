// Exemplo 08 - Cálculo de média escolar e situação do aluno

function calcularMedia(notas) {
  const soma = notas.reduce((total, nota) => total + nota, 0);
  return soma / notas.length;
}

function situacao(media) {
  if (media >= 7) {
    return "Aprovado";
  }
  if (media >= 5) {
    return "Recuperação";
  }
  return "Reprovado";
}

module.exports = { calcularMedia, situacao };
