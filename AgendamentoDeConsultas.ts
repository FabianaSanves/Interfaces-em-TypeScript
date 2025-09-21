//Sistema de Agendamento de Consultas
//Criar um programa que gerencie consultas médicas ou de serviços.

interface Consulta {
  id: string;
  paciente: string;
  data: Date;
  observacoes?: string;
  dataCancelamento?: Date | null;
  status: "agendada" | "concluída" | "cancelada";
}

const consultas: Consulta[] = [];

const consulta1: Consulta = {
  id: "paciente-001",
  paciente: "Fabiana Chaves",
  data: new Date("2024-09-20"),
  observacoes: "Check-up anual",
  status: "agendada",
};

const consulta2: Consulta = {
  id: "paciente-002",
  paciente: "Seu Zé",
  data: new Date("2024-09-19"),
  status: "concluída",
};

function agendarConsulta(novaConsulta: Consulta) {
  // cria uma nova consulta
  consultas.push(novaConsulta);
  console.log(`Consulta para ${novaConsulta.paciente} agendada com sucesso!`);
}
agendarConsulta(consulta1);
agendarConsulta(consulta2);

function cancelarConsulta(id: string) {
  // recebe id e atribui dataCancelamento
  const consultaEncontrada = consultas.find((consulta) => consulta.id === id);
  if (consultaEncontrada) {
    consultaEncontrada.dataCancelamento = new Date();
    consultaEncontrada.status = "cancelada";
    console.log(
      `Consulta ID ${id} foi cancelada com sucesso!\nData de cancelamento: ${consultaEncontrada.dataCancelamento}`
    );
  } else {
    console.log(`Consulta com ID ${id} não encontrada.`);
  }
}
cancelarConsulta("paciente-002");
console.log(consultas);

function listarConsultas() {
  // exibe todas as consultas com status
  for (let i = 0; i < consultas.length; i++) {
    console.log(`Consultas: ${consultas[i].paciente} - ${consultas[i].data}`);
  }
}
listarConsultas();

function listarPorStatus(status:"agendada" | "concluída" | "cancelada" ) {
// filtra por status
const consultasFiltradas = consultas.filter((consulta) => consulta.status == status);
for (let i = 0; i < consultasFiltradas.length; i++) {
console.log(`Consultas com status: ${consultasFiltradas[i].status} - ${consultasFiltradas[i].paciente}`);
}
}

listarPorStatus("agendada");