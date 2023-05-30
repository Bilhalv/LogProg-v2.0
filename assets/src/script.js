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

      var heading = document.createElement("h3");
      heading.textContent = articleData.title;

      var content = document.createElement("p");
      content.textContent = articleData.content;

      var button = document.createElement("button");
      button.textContent = "Remove";
      button.addEventListener("click", removeArticle);

      //combine the parts of the article
      article.appendChild(heading);
      article.appendChild(content);
      article.appendChild(button);
      //make the article appears
      gallery.appendChild(article);
      //make the article doesnt appears again
      selectedArticles.push(value);
    }
  }
});

function removeArticle() {
  var article = this.parentNode;
  var value = article.dataset.value;

  //remove the related article
  article.parentNode.removeChild(article);
  //remove that article from the selected articles list, so it can appears again
  selectedArticles.splice(value)
}

function getArticleData(item) {
  var articles = {
    item1: {
      title: "Article 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    item2: {
      title: "Article 2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    item3: {
      title: "Article 3",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    item4: {
      title: "Article 4",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    },
  };

  return articles[item];
}
