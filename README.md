# cadastro-cep
# Formulário de Cadastro com Busca de Endereço por CEP

Projeto simples que implementa um formulário de cadastro com preenchimento automático de endereço a partir do CEP, usando a API pública ViaCEP. Os dados do formulário são salvos no Local Storage para persistência local.

## Funcionalidades

- Preenchimento automático dos campos de rua, bairro, cidade e estado ao inserir um CEP válido.
- Salvamento dos dados do formulário no Local Storage ao enviar, para recuperar informações ao recarregar a página.
- Design responsivo e moderno com CSS.

## Tecnologias usadas

- HTML5
- CSS3
- JavaScript (ES6+)
- API ViaCEP (https://viacep.com.br)

## Como usar

1. Clone ou faça download deste repositório.
2. Abra o arquivo `cep.html` em seu navegador.
3. Preencha os campos do formulário. Ao digitar o CEP e sair do campo, o endereço será preenchido automaticamente.
4. Clique em "Salvar" para armazenar os dados localmente.
5. Ao recarregar a página, os dados salvos serão carregados automaticamente.

## Estrutura do projeto

- `cep.html` — Estrutura do formulário.
- `cep.css` — Estilos do formulário.
- `cep.js` — Script para buscar endereço pelo CEP e salvar dados no Local Storage.

## Observações

- O campo CEP deve conter exatamente 8 caracteres numéricos.
- A conexão com a API ViaCEP requer acesso à internet.
- Os dados ficam armazenados localmente no navegador, não são enviados para servidor.

---

**Feito por [Fernanda Costa Feitoza]**
