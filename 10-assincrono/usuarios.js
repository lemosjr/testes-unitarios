// Exemplo 10 - Função assíncrona (simula uma busca em banco de dados ou API)

const usuarios = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Bruno" },
];

function buscarUsuario(id) {
  return new Promise((resolve, reject) => {
    // setTimeout simula a demora de uma consulta real
    setTimeout(() => {
      const usuario = usuarios.find((u) => u.id === id);
      if (usuario) {
        resolve(usuario);
      } else {
        reject(new Error("Usuário não encontrado"));
      }
    }, 100);
  });
}

module.exports = { buscarUsuario };
