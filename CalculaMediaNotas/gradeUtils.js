// Função para calcular a média das notas
function media(vetor) {
    if (vetor.length === 0) {
      return 0;
    }
  
    const soma = vetor.reduce((acc, nota) => acc + nota, 0);
    return soma / vetor.length;
  }
  
  // Função para encontrar a menor nota
  function menor(vetor) {
    if (vetor.length === 0) {
      return null;
    }
  
    return Math.min(...vetor);
  }
  
  // Função para encontrar a maior nota
  function maior(vetor) {
    if (vetor.length === 0) {
      return null;
    }
  
    return Math.max(...vetor);
  }
  
  module.exports = {
    media,
    menor,
    maior,
  };
  