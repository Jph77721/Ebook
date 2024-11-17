document.getElementById('form-cadastro').addEventListener('submit', function(event) {
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmar-senha').value;

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem. Por favor, tente novamente.");
    event.preventDefault(); // Evita o envio do formulário
  }
});