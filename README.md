# Projeto de Catálogo Digital Educacional

---

## Resumo

Este repositório contém o código para um catálogo digital educacional com foco em materiais de Matemática, Física e Química, além de quizzes e recursos para auxiliar alunos com dificuldades nas disciplinas. O projeto foi desenvolvido como parte de um trabalho para o **CTBJ da UFPI** e tem como objetivo facilitar o encontro de materiais educativos.

**Este repositório é uma demonstração do projeto original.**

## Instalação

Caso não tenha o Git, siga esses passos:

1. Acesse o repositório no GitHub
2. Clique em **Code** > **Download ZIP**
3. Extraia os arquivos em uma pasta de sua preferência

Para rodar o projeto:

1. Navegue até a pasta do projeto:

   ```bash
   cd CTBJ-STUDY
   ```

2. **Instale as dependências** usando o npm:

   ```bash
   npm install
   ```

3. **Instale o servidor Express**:

   ```bash
   npm install express
   ```

4. **Instale o EJS** (caso ainda não tenha sido instalado):

   ```bash
   npm install ejs
   ```

5. **Crie o arquivo `.env`** na raiz do projeto com as variáveis de ambiente necessárias (exemplo de conteúdo do `.env`):

   ```
   PORT=3000
   ```

6. **Inicie o servidor com o comando**:

   ```bash
   node app.js
   ```

   O servidor estará rodando em `http://localhost:3000`.

### Estrutura do Projeto

- **/routes**: Contém os arquivos principais do código, incluindo as rotas, controladores e templates.
- **/public**: Arquivos estáticos como imagens, CSS, PDF e JavaScript.
- **/views**: Arquivos de templates para renderizar as páginas HTML usando o EJS.

### Funcionalidades do Projeto

- Armazenamento de livros em PDF de Matemática, Física e Química.
- Quizzes interativos.
- Links e materiais de apoio para alunos com dificuldades.

### Contribuidores

Este projeto foi desenvolvido por:

- [Alysson Michel](https://github.com/aIlyson) | [Isabele Lima](https://github.com/isabebel) | [Gabriel Campos](https://github.com/GabrielCampos20)
