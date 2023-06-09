var select1 = document.getElementById("selectItems1");
var select2 = document.getElementById("selectItems2");
var gallery = document.getElementById("selectedItemsGallery");
var hr = document.createElement("hr");
var selectedArticles = [];

select1.addEventListener("change", handleSelection);
select2.addEventListener("change", handleSelection);

function handleSelection() {
  var selectedOptions = this.selectedOptions;

  for (var i = 0; i < selectedOptions.length; i++) {
    var value = selectedOptions[i].value;

    if (!selectedArticles.includes(value)) {
      var articleData = getArticleData(value);

      var article = document.createElement("div");
      article.classList.add("article");

      for (var j = 0; j < articleData.parts.length; j++) {
        var partData = articleData.parts[j];
        var partElement = createArticlePartElement(partData);
        article.appendChild(partElement);
      }

      var button = document.createElement("button");
      button.textContent = "Remove";
      button.addEventListener("click", removeArticle);

      article.appendChild(button);
      gallery.appendChild(article);
      selectedArticles.push(value);
    } else {
      alert("ERR0R");
    }
  }
}

function createArticlePartElement(partData) {
  var partElement = document.createElement(partData.elementType);
  partElement.textContent = partData.content;
  if (partData.elementType == "button") {
    partElement.addEventListener("click", partData.function);
  }
  if (partData.elementType == "div") {
    partElement.id = partData.id;
  }
  return partElement;
}

function removeArticle() {
  var article = this.parentNode;
  var value = article.dataset.value;
  article.parentNode.removeChild(article);
  selectedArticles.splice(value, 1);
}

function getArticleData(item) {
  var articles = {
    //vetores
    item1: {
      parts: [
        { elementType: "h3", content: "Vetores 1" },
        {
          elementType: "p",
          content:
            "Sistema que l\xEA notas de alunos e diz quais passaram e quais n\xE3o, pode ser cancelado caso insira (fim).",
        },
        { elementType: "button", content: "Iniciar", function: VetoresNotas },
        { elementType: "br", content: "" },
        { elementType: "div", content: "", id: "VetoresNotas" },
        { elementType: "br", content: "" },
      ],
    },
    item2: {
      parts: [
        { elementType: "h3", content: "Vetores 2" },
        {
          elementType: "p",
          content:
            "Um programa que l\xEA n\xFAmeros at\xE9 ser digitado 0 e depois informa quais s\xE3o pares e quantos pares existem.",
        },
        { elementType: "button", content: "Iniciar", function: VetoresNumeros },
        { elementType: "br", content: "" },
        { elementType: "div", content: "", id: "VetoresNumeros" },
        { elementType: "br", content: "" },
      ],
    },
    item3: {
      parts: [
        { elementType: "h3", content: "Article 3" },
        {
          elementType: "p",
          content:
            "Um programa que leia o nome de 10 clubes. Ap\xF3s, liste os jogos com os clubes na ordem informada.",
        },
        { elementType: "button", content: "Iniciar", function: VetoresTimes },
        { elementType: "br", content: "" },
        { elementType: "div", content: "", id: "VetoresTimes" },
        { elementType: "br", content: "" },
      ],
    },
    item4: {
      parts: [
        { elementType: "h3", content: "Vetores 4" },
        {
          elementType: "p",
          content:
            "L\xEA modelos e pre\xE7os de ve\xEDculos at\xE9 ser inserido 'Fim' e após, adiciona o valor do frete a cada ve\xEDculo.",
        },
        {
          elementType: "button",
          content: "Iniciar",
          function: VetoresVeiculos,
        },
        { elementType: "br", content: "" },
        { elementType: "div", content: "", id: "VetoresVeiculos" },
        { elementType: "br", content: "" },
      ],
    },
    //Map e Filter
    item5: {
      parts: [
        { elementType: "h3", content: "M&F 1" },
        {
          elementType: "p",
          content:
            "Dada uma lista de nomes, criar uma outra lista com os nomes em mai\xFAsculas. Exibir as 2 listas.",
        },
        {
          elementType: "button",
          content: "Executar",
          function: MepCaps,
        },
        { elementType: "br", content: "" },
        { elementType: "div", content: "", id: "MepCaps" },
        { elementType: "br", content: "" },
      ],
    },
    item6: {
      parts: [
        { elementType: "h3", content: "M&F 2" },
        {
          elementType: "p",
          content:
            "Dada uma lista de idades, criar uma outra lista com as idades + 1. Exibir as 2 listas.",
        },
        {
          elementType: "button",
          content: "Executar",
          function: MepIdade,
        },
        { elementType: "br", content: "" },
        { elementType: "div", content: "", id: "MepIdade" },
        { elementType: "br", content: "" },
      ],
    },
    item7: {
      parts: [
        { elementType: "h3", content: "M&F 3" },
        {
          elementType: "p",
          content:
            "Dada uma lista de nomes, solicitar um nome, verificar e informar se ele consta ou n\xE3o na lista.",
        },
        {
          elementType: "button",
          content: "Executar",
          function: MepNomes,
        },
        { elementType: "br", content: "" },
        { elementType: "div", content: "", id: "MepNomes" },
        { elementType: "br", content: "" },
      ],
    },
    item8: {
      parts: [
        { elementType: "h3", content: "M&F 4" },
        {
          elementType: "p",
          content:
            "Dada uma lista de sal\xE1rios, ler um valor e informar quais sal\xE1rios s\xE3o maiores ou iguais ao informado ou indicar que n\xE3o existe.",
        },
        {
          elementType: "button",
          content: "Executar",
          function: MepSalarios,
        },
        { elementType: "br", content: "" },
        { elementType: "div", content: "", id: "MepSalarios" },
        { elementType: "br", content: "" },
      ],
    },
    item9: {
      parts: [
        { elementType: "h3", content: "M&F 5" },
        {
          elementType: "p",
          content:
            "Dado uma lista de pre\xE7os de ve\xEDculos, criar uma outra lista com os valores da entrada (30% do pre\xE7o). Exiba os 2 vetores.",
        },
        {
          elementType: "button",
          content: "Executar",
          function: MepVeiculos,
        },
        { elementType: "br", content: "" },
        { elementType: "div", content: "", id: "MepVeiculos" },
        { elementType: "br", content: "" },
      ],
    },
    item10: {
      parts: [
        { elementType: "h3", content: "M&F 6" },
        {
          elementType: "p",
          content:
            "Dada uma lista de quantidades de frutas, exibir a lista, a m\xE9dia das quantidades e a soma das quantidades.",
        },
        {
          elementType: "button",
          content: "Executar",
          function: MepFrutas,
        },
        { elementType: "br", content: "" },
        { elementType: "div", content: "", id: "MepFrutas" },
        { elementType: "br", content: "" },
      ],
    },
  };
  return articles[item];
}
function VetoresNotas() {
  let nom = [];
  let not = [];
  let con = 1;
  var resultado = document.getElementById("VetoresNotas");

  do {
    let nomtemp = prompt(`${con}o Aluno: `);
    if (nomtemp.toUpperCase() == "FIM") {
      break;
    }
    con++;
    let nottemp = Number(prompt("Nota: "));
    nom.push(nomtemp);
    not.push(nottemp);
  } while (true);

  let ApTit = document.createElement("h4");
  ApTit.textContent = "Aprovados";
  let ApList = document.createElement("div");
  for (let i = 0; i < nom.length; i++) {
    if (not[i] >= 7) {
      let ApListTemp = document.createElement("p");
      ApListTemp.textContent += `${nom[i]} - Nota ${not[i]}`;
      ApList.appendChild(ApListTemp);
    }
  }

  let RpTit = document.createElement("h4");
  RpTit.textContent = "Reprovados";
  let RpList = document.createElement("div");
  for (let i = 0; i < nom.length; i++) {
    if (not[i] < 7) {
      let RpListTemp = document.createElement("p");
      RpListTemp.textContent += `${nom[i]} - Nota ${not[i]}`;
      RpList.appendChild(RpListTemp);
    }
  }

  var aprovados = document.createElement("div");
  aprovados.appendChild(ApTit);
  aprovados.appendChild(hr);
  aprovados.appendChild(ApList);

  var reprovados = document.createElement("div");
  reprovados.appendChild(RpTit);
  reprovados.appendChild(hr);
  reprovados.appendChild(RpList);

  //compilando resultados
  var resulttemp = document.createElement("div");
  resulttemp.appendChild(aprovados);
  resulttemp.appendChild(reprovados);

  resultado.appendChild(resulttemp);
}
function VetoresNumeros() {
  var resultado = document.getElementById("VetoresNumeros");
  let ParlistTtl = document.createElement("div");

  let num = 0;
  let par = [];

  do {
    num = Number(prompt("Numero: "));
    if (num == 0) {
      break;
    }
    if (num % 2 == 0) {
      par.push(num);
    }
  } while (true);

  for (let i = 0; i < par.length; i++) {
    let ParListTemp = document.createElement("p");
    ParListTemp.textContent += par[i];
    ParlistTtl.appendChild(ParListTemp);
  }
  let ParNumTtl = document.createElement("p");
  ParNumTtl.textContent = `${par.length} Pares`;

  var ParList = document.createElement("div");
  var ParListTitulo = document.createElement("h4");
  ParListTitulo.textContent = "Pares da lista";
  ParList.appendChild(ParListTitulo);
  ParList.appendChild(hr);
  ParList.appendChild(ParlistTtl);
  ParList.appendChild(hr);

  var ParNum = document.createElement("div");
  var ParNumTitulo = document.createElement("h4");
  ParNumTitulo.textContent = "Total de Pares";
  ParNum.appendChild(ParNumTitulo);
  ParNum.appendChild(hr);
  ParNum.appendChild(ParNumTtl);

  var resulttemp = document.createElement("div");
  resulttemp.appendChild(ParList);
  resulttemp.appendChild(ParNum);

  resultado.appendChild(resulttemp);
}
function VetoresTimes() {
  var resultado = document.getElementById("VetoresTimes");
  let jogosttl = document.createElement("div");

  let times = [];
  let clu = 1;

  do {
    let tim = prompt(`${clu}o Clube: `);
    times.push(tim);
    clu++;
  } while (times.length < 10);

  let jogostitulo = document.createElement("h4");
  jogostitulo.textContent = "Jogos";

  for (let i = 0; i < 10; i += 2) {
    let jogostemp = document.createElement("p");
    jogostemp.textContent = `${times[i]} x ${times[i + 1]}`;
    jogosttl.appendChild(jogostemp);
  }

  let timesfim = document.createElement("div");
  timesfim.appendChild(jogostitulo);
  timesfim.appendChild(hr);
  timesfim.appendChild(jogosttl);

  resultado.appendChild(timesfim);
}
function VetoresVeiculos() {
  var resultado = document.getElementById("VetoresVeiculos");
  let carrttl = document.createElement("div");

  let carro = [];
  let preco = [];
  let cont = 1;

  do {
    let carrotemp = prompt(`${cont}o Veiculo: `);
    if (carrotemp.toUpperCase() == "FIM") {
      break;
    }
    let precotemp = Number(prompt("Preco: R$"));

    carro.push(carrotemp);
    preco.push(precotemp);
    cont++;
  } while (true);
  let frete = Number(prompt("Frete: R$"));

  let cartit = document.createElement("h4");
  cartit.textContent = "Tabela de Preços (com Frete)";
  for (let i = 0; i < carro.length; i++) {
    let carrttltemp = document.createElement("p");
    carrttltemp.textContent = `${carro[i]} - R$ ${(preco[i] + frete).toFixed(
      2
    )}`;
    carrttl.appendChild(carrttltemp);
  }

  let veiculosttl = document.createElement("div");
  veiculosttl.appendChild(cartit);
  veiculosttl.appendChild(hr);
  veiculosttl.appendChild(carrttl);

  resultado.appendChild(veiculosttl);
}
function MepCaps() {
  var resultado = document.getElementById("MepCaps");

  let nomes = ["Silvana", "Juliano", "Ricardo", "Patr\xEDcia", "Bianca"];
  let caps = nomes.map((x) => x.toUpperCase());

  let p1 = document.createElement("p");
  p1.textContent = `\nNomes: ${nomes.join(", ")}`;
  let p2 = document.createElement("p");
  p2.textContent = `\nDestaques: ${caps.join(", ")}\n`;

  let capsttl = document.createElement("div");
  capsttl.appendChild(p1);
  capsttl.appendChild(p2);

  resultado.appendChild(capsttl);
}
function MepIdade() {
  let idade1 = [18, 24, 16, 25, 32, 30];
  let idade2 = idade1.map((x) => x + 1);
  var resultado = document.getElementById("MepIdade");
  let idadttl = document.createElement("div");

  let p1 = document.createElement("p")
  p1.textContent = (`Idades em 2023: ${idade1.join(", ")}`);
  let p2 = document.createElement("p")
  p2.textContent = (`Idades em 2024: ${idade2.join(", ")}`);

  idadttl.appendChild(p1)
  idadttl.appendChild(p2)

  resultado.appendChild(idadttl)
}
function MepNomes() {
  var resultado = document.getElementById("MepNomes");
  let nomettl = document.createElement("div");
  let alunos = ["Silvana", "Juliano", "Ricardo", "Patr\xEDcia", "Bianca"];

  nomettl.textContent = (`Alunos: ${alunos.join(", ")}`);
  let pesq = prompt("Pesquisar aluno: ");
  let pos = alunos.indexOf(pesq);

  if (pos == -1) {
    alert("Aluno n\xE3o encontrado");
  } else {
    alert(`Consta na ${pos + 1}ª posi\xE7\xE3o`);
  }
  resultado.appendChild(nomettl)
}
function MepSalarios() {
  var resultado = document.getElementById("MepSalarios");
  let salttl = document.createElement("div");
  let salarios = [2300, 3000, 1900, 4500, 2550, 2800];
  let p1 = document.createElement("p")
  p1.textContent = (`\nSal\xE1rios: ${salarios.join(", ")}`);
  let pesq = Number(prompt("Valor M\xEDnimo: "));
  let ttl = salarios.filter((x) => x >= pesq);
  
  let p2 = document.createElement("p")
  p2.textContent = (`Maiores ou iguais: ${ttl.join(", ")}`);

  salttl.appendChild(p1)
  salttl.appendChild(p2)

  resultado.appendChild(salttl)
}
function MepVeiculos() {
  var resultado = document.getElementById("MepVeiculos");
  let veittl = document.createElement("div");
  let normal = [40000, 50000, 32000, 60000, 45000];
  let entrada = normal.map((x) => x * 0.3);

  let p1 = document.createElement("p")
  p1.textContent = (`\nR$ dos Ve\xEDculos: ${normal.join(", ")}`);
  let p2 = document.createElement("p")
  p2.textContent = (`R$ das Entradas: ${entrada.join(", ")}`);

  veittl.appendChild(p1)
  veittl.appendChild(p2)

  resultado.appendChild(veittl)
}
function MepFrutas() {
  var resultado = document.getElementById("MepFrutas");
  let frutttl = document.createElement("div");
  let list = [4, 12, 20, 30, 15, 18];
  let soma = list.reduce((sum, num) => sum + num);
  let media = soma / list.length;

  let p1 = document.createElement("p")
  p1.textContent = (`Quantidades: ${list.join(", ")}`);
  let p2 = document.createElement("p")
  p2.textContent = (`M\xE9dia: ${media}`);
  let p3 = document.createElement("p")
  p3.textContent = (`Soma: ${soma}`);

  frutttl.appendChild(p1)
  frutttl.appendChild(p2)
  frutttl.appendChild(p3)
  
  resultado.appendChild(frutttl)
}
