//Sistema de Biblioteca
//Gerenciar livros e empréstimos de forma simples.

interface Livro 
{
  titulo: string;
  autor: string;
  emprestado: boolean;
  dataEmprestimo?: Date | null;
  dataDevolucao?: Date | null;
};
const acervoLivros: Livro[] = [];

let Livro1: Livro = {
  titulo: "Introdução ao TypeScript",
  autor: "Fabiana Chaves",
  emprestado: false,
  dataEmprestimo: null,
  dataDevolucao: null,
};

let Livro2: Livro = {
  titulo: "Avançando no TypeScript",
  autor: "Fabiana Chaves",
  emprestado: false,
  dataEmprestimo: null,
  dataDevolucao: null,
};

function cadastrarLivro(Livro1: Livro) {
  acervoLivros.push(Livro1);
};

cadastrarLivro(Livro1);
console.log(`O livro ${Livro1.titulo} foi cadastrado com sucesso!`);
cadastrarLivro(Livro2);

function emprestarLivro(Livro: Livro) {
  if (Livro.emprestado == false) {
    Livro.emprestado = true;
    Livro.dataEmprestimo = new Date();
  }
};

emprestarLivro(Livro2);
console.log(
  `O livro ${Livro2.titulo}foi emprestado com sucesso!\nData do emprestimo: ${Livro2.dataEmprestimo}`);

function devolverLivro(Livro: Livro) {
  if (Livro.emprestado == true) {
    Livro.emprestado = false;
    Livro.dataDevolucao = new Date();
  }
};

devolverLivro(Livro2);
console.log(
  `O livro ${Livro2.titulo} foi devolvido com sucesso!\nData da devolução: ${Livro2.dataDevolucao}`);

function listarDisponiveis() 
{
  for (let i = 0; i < acervoLivros.length; i++) {
    if (acervoLivros[i].emprestado == false) {
      console.log(
        `O livro ${acervoLivros[i].titulo} está disponível para empréstimo!`
      );
    }
  }
};
listarDisponiveis();
