var select = document.getElementById("selectItems");
var gallery = document.getElementById("selectedItemsGallery");
var selectedArticles = [];

select.addEventListener("change", function () {
  var selectedOptions = select.selectedOptions;

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
    }
  }
});

function createArticlePartElement(partData) {
  var partElement = document.createElement(partData.elementType);
  partElement.textContent = partData.content;
  if (partData.elementType == "button") {
    partElement.addEventListener("click", partData.function);
  }
  if (partData.elementType == "div") {
    partElement.id = "resultado";
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
    item1: {
      parts: [
        { elementType: "h3", content: "Vetores 1" },
        {
          elementType: "p",
          content:
            "Sistema que lê notas de alunos e diz quais passaram e quais não, pode ser cancelado caso insira (fim).",
        },
        { elementType: "button", content: "Clickme", function: VetoresNotas },
        { elementType: "br", content: "" },
        { elementType: "div", content: "" },
        { elementType: "br", content: "" },
      ],
    },
    item2: {
      parts: [
        { elementType: "h3", content: "Vetores 2" },
        {
          elementType: "p",
          content:
            "Um programa que lê numeros até ser digitado 0 e depois informa quais são pares e quantos pares existem.",
        },
        { elementType: "button", content: "Clickme", function: VetoresNumeros },
        { elementType: "br", content: "" },
        { elementType: "div", content: "" },
        { elementType: "br", content: "" },
      ],
    },
    item3: {
      parts: [
        { elementType: "h3", content: "Article 3" },
        {
          elementType: "p",
          content:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        },
        { elementType: "button", content: "Clickme", function: removeArticle },
        { elementType: "br", content: "" },
      ],
    },
    item4: {
      parts: [
        { elementType: "h3", content: "Article 4" },
        {
          elementType: "p",
          content:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
        },
      ],
    },
  };
  return articles[item];
}
function VetoresNotas() {
  let nom = [];
  let not = [];
  let con = 1;
  var resultado = document.getElementById("resultado");
  let hr = document.createElement("hr");

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
  console.log("-".repeat(20));
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
  console.log("-".repeat(20));
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
  var resultado = document.getElementById("resultado");
  let hr = document.createElement("hr");
  let ParlistTtl = document.createElement("div")

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
    let ParListTemp = document.createElement("p")
    ParListTemp.textContent += (par[i]);
    ParlistTtl.appendChild(ParListTemp)
  }
  let ParNumTtl = document.createElement("p")
  ParNumTtl.textContent = `${par.length} Pares`

  var ParList = document.createElement("div")
  var ParListTitulo = document.createElement("h4")
  ParListTitulo.textContent = "Pares da lista"
  ParList.appendChild(ParListTitulo)
  ParList.appendChild(hr)
  ParList.appendChild(ParlistTtl)
  ParNum.appendChild(hr)

  var ParNum = document.createElement("div")
  var ParNumTitulo = document.createElement("h4")
  ParNumTitulo.textContent = "Total de Pares"
  ParNum.appendChild(ParNumTitulo)
  ParNum.appendChild(hr)
  ParNum.appendChild(ParNumTtl)

  var resulttemp = document.createElement("div");
  resulttemp.appendChild(ParList);
  resulttemp.appendChild(ParNum);

  resultado.appendChild(resulttemp);
}
