# Projeto de Catálogo Digital Educacional

Este repositório contém o código para um catálogo digital educacional com foco em materiais de Matemática, Física e Química, além de quizzes e recursos para auxiliar alunos com dificuldades nas disciplinas.

## Orientações Principais

### 1. Clonando o Repositório

Para clonar o repositório e começar a trabalhar no projeto, siga os passos abaixo:

1. **Clone o repositório** para a sua máquina local:
   ```bash
   git clone [https://github.com/usuario/repositorio.git](https://github.com/aIlyson/CTBJ-STUDY.git)
   ```

2. **Navegue até a pasta do projeto**:
   ```bash
   cd CTBJ-STUDY
   ```

3. **Instale as dependências** usando o npm:
   ```bash
   npm install
   ```

4. **Instale o EJS** (caso ainda não tenha sido instalado):
   ```bash
   npm install ejs
   ```

### 2. Rodando o Servidor com Express

O servidor foi construído usando Express. Para iniciar o servidor localmente, siga os passos abaixo:

1. **Inicie o servidor com o comando**:
   ```bash
   node app.js
   ```

   O servidor estará rodando em `http://localhost:3000`.

2. **Caso precise rodar em modo de desenvolvimento**, use o comando abaixo (se configurado):
   ```bash
   npm run dev
   ```

   Isso permitirá que as alterações sejam aplicadas automaticamente sem precisar reiniciar o servidor manualmente.

### 3. Estrutura do Projeto

- **/src**: Contém os arquivos principais do código, incluindo as rotas, controladores e templates.
- **/public**: Arquivos estáticos como imagens, CSS, PDF e JavaScript.
- **/views**: Arquivos de templates para renderizar as páginas HTML usando o EJS.

### 4. Funcionalidades do Projeto

- Armazenamento de livros em PDF de Matemática, Física e Química.
- Quizzes interativos.
- Links e materiais de apoio para alunos com dificuldades.

Se precisar de mais informações, consulte a documentação nas seções apropriadas ou entre em contato comigo.
```
