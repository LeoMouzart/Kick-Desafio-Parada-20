let joao = 0;
let marcelo = 0;
let rochelle = 0;
let julia = 0;
let branco = 0;
let nulo = 0;
opcaoEscolhida = 0;
sairPrograma = "";

while (true) {
  alert("Seja bem vindo Eleitor");
  alert(
    "Selecione uma das opções para escolher seu candidato: \n\n Opção 1: Candidato João \n Opção 2: Candidato Marcelo \n Opção 3: Candidata Rochelle \n Opção 4: Candidata: Julia \n Opção 5: Branco \n Opção 6: Nulo  "
  );

  opcaoEscolhida = prompt("Digite a opção referente ao candidato escolhido");

  switch (opcaoEscolhida) {
    case "1": //Aqui como o prompt solicita uma string ao usuário condicionei os cases com as strings de suas respectivas opções
      alert("Obrigado pelo seu voto!! você votou em: João ");
      joao++;
      break;
    case "2":
      alert("Obrigado pelo seu voto!! você votou em: Marcelo");
      marcelo++;
      break;
    case "3":
      alert("Obrigado pelo seu voto!! você votou em: Rochelle");
      rochelle++;
      break;
    case "4":
      alert("Obrigado pelo seu voto!! você votou em: Julia");
      julia++;
      break;
    case "5":
      alert("Obrigado pelo seu voto!! você votou em: Branco");
      branco++;
      break;
    case "6":
      alert("Obrigado pelo seu voto!! você votou em: Nulo");
      nulo++;
      break;
    default:
      alert("Opção inválida reinicie a operação.");
      break;
  }

  sairPrograma = prompt("Deseja sair do programa? Digite S ou s para sair ");
  if (sairPrograma == "s" || sairPrograma == "S") {
    break;
  }
}

alert(
  " Obrigado por utilizar nossos serviços de gestão de votos. A seguir o resultado."
);
alert(
  " O candidato João obteve: " +
    joao +
    " voto(s). \n O candidato Marcelo obteve: " +
    marcelo +
    " voto(s). \n A candidata Rochelle obteve: " +
    rochelle +
    " voto(s). \n A candidata Julia obteve: " +
    julia +
    " voto(s). \n Foram considerados Voto Nulo: " +
    nulo +
    " voto(s). \n Foram considerados Voto em Branco: " +
    branco +
    " voto(s)."
);

if (joao > marcelo && joao > rochelle && joao > julia) {
  alert("João é o candidato vencedor das eleições!!!");
} else if (marcelo > joao && marcelo > rochelle && marcelo > julia) {
  alert("Marcelo é o candidato vencedor das eleições!!!");
} else if (rochelle > joao && rochelle > marcelo && rochelle > julia) {
  alert("Rochelle é a candidata vencedora das eleições!!!");
} else if (julia > joao && julia > marcelo && julia > rochelle) {
  alert("Julia é a candidata vencedora das eleições!!!");
}
