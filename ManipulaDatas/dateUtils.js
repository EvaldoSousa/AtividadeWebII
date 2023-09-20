// Função para calcular a idade com base na data de nascimento
function calculateAge(dateOfBirth) {
    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
  
    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      // Ainda não fez aniversário este ano
      return age - 1;
    }
  
    return age;
  }
  
  module.exports = {
    calculateAge,
  };
  