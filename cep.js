document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastroForm');
  
    // Carregar dados do Local Storage
    const savedData = JSON.parse(localStorage.getItem('cadastro'));
    if (savedData) {
      Object.keys(savedData).forEach(key => {
        const input = document.getElementById(key);
        if (input) input.value = savedData[key];
      });
    }
  
    // Ao sair do campo CEP, busca o endereço
    document.getElementById('cep').addEventListener('blur', async () => {
      const cep = document.getElementById('cep').value;
      if (cep.length === 8) {
        try {
          const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
          const data = await response.json();
          if (!data.erro) {
            document.getElementById('rua').value = data.logradouro;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('estado').value = data.uf;
          } else {
            alert("CEP não encontrado.");
          }
        } catch (error) {
          console.error("Erro ao buscar CEP:", error);
        }
      }
    });
  
    // Ao enviar o formulário, salva os dados
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = {};
      Array.from(form.elements).forEach(element => {
        if (element.id) {
          formData[element.id] = element.value;
        }
      });
      localStorage.setItem('cadastro', JSON.stringify(formData));
      alert("Dados salvos com sucesso!");
    });
  });
  