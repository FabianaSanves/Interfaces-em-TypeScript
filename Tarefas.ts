//Gerenciador de Tarefas Avançado
//Criar um to-do list com categorias e datas.
const readlineSync = require("readline-sync");

interface Tarefa {
  id: number;
  descricao: string;
  categoria?: string;
  concluida: boolean;
  dataConclusao?: Date | null;
}
const tarefas: Tarefa[] = [];

function adicionarTarefa(novaTarefa: Tarefa) {
  //cria nova tarefa
  tarefas.push(novaTarefa );
}

function concluirTarefa(id: number) {
  //marca como concluída e adiciona dataConclusao
  const tarefaEncontrada = tarefas.find((tarefa) => tarefa.id == id);
  if (tarefaEncontrada) {
    tarefaEncontrada.concluida = true;
    tarefaEncontrada.dataConclusao = new Date();
    console.log(
      `Tarefa ID ${id} concluida com sucesso!\nData de conclusao: ${tarefaEncontrada.dataConclusao}`
    );
  } else {
    console.log(`Tarefa com ID ${id} nao encontrada.`);
  }
}

function listarPendentes() {
  for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].concluida == false) {
      console.log(
        `Tarefas pendentes: ${tarefas[i].descricao} - Categoria: ${tarefas[i].categoria}`
      );
    }
  }
}

function listarConcluidas(concluida: boolean) {
  const tarefasConcluidas = tarefas.filter(
    (tarefa) => tarefa.concluida == concluida
  );
  for (let i = 0; i < tarefasConcluidas.length; i++) {
    console.log("Tarefas concluidas: " + tarefasConcluidas[i].descricao);
  }
}

function menuPrincipal() {
  while (true) {
    console.log(`------- TO-DO List -------'\n
  1 - Adicionar Tarefa
  2 - Concluir Tarefa
  3 - Tarefas Pendentes
  4 - Tarefas Concluídas
  5 - Sair
  -----------------------------------------`);
    let escolha = readlineSync.question('Digite o numero da opcao desejada: ');

    if (escolha == "1") {
      const addTarefa: Tarefa = {
        id: parseInt(readlineSync.question("Identificador da tarefa (escreva um ID numerico, com 2 ou mais numeros): ")),
        descricao: readlineSync.question("Descricao da tarefa: "),
        categoria: readlineSync.question("Categoria (opcional): "),
        concluida: false,
        dataConclusao: null,
      };

      adicionarTarefa(addTarefa);
      console.log(`Tarefa "${addTarefa.descricao}" adicionada com sucesso!`);

    } else if (escolha == "2") {
      const idTarefa = parseInt(readlineSync.question("Digite o ID da tarefa a ser concluida: "));
      concluirTarefa(idTarefa);

    } else if (escolha == "3") {
      listarPendentes();

    } else if (escolha == "4") {
      listarConcluidas(true);

    } else if (escolha == "5") {
      console.log("Até mais!");
      break;
    } else {
      console.log("Opcao invalida. Selecione uma opcao do Menu.");
    }
  }
}

menuPrincipal();
