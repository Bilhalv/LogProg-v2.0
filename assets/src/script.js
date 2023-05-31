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
        { elementType: "h3", content: "Article 1" },
        { elementType: "p", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
      ]
    },
    item2: {
      parts: [
        { elementType: "h3", content: "Article 2" },
        { elementType: "p", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
      ]
    },
    item3: {
      parts: [
        { elementType: "h3", content: "Article 3" },
        { elementType: "p", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." }
      ]
    },
    item4: {
      parts: [
        { elementType: "h3", content: "Article 4" },
        { elementType: "p", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore." }
      ]
    }
  };
  return articles[item];
}
