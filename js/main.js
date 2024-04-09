let stato = false;

function loadTemplate(templateName, targetElement) {
  fetch(`components/${templateName}.hbs`)
    .then((response) => response.text())
    .then((template) => {
      const compiledTemplate = Handlebars.compile(template);
      document.querySelector(targetElement).innerHTML = compiledTemplate();
      console.log("LoadTempleate");
    })
    .catch((error) =>
      console.error("Errore durante il caricamento del template:", error)
    );
}

document.addEventListener("DOMContentLoaded", function () {
  const lastPageVisited = localStorage.getItem("lastPageVisited");
  const pageToLoad = lastPageVisited || "home";
  loadPage(pageToLoad);
  console.log("DOM Caricato");
});

document.addEventListener("click", function (event) {
  const target = event.target;
  if (target.tagName === "A") {
    event.preventDefault();
    const pageName = target.getAttribute("href").substring(1);
    loadPage(pageName);
    console.log("Funzione di Click Caricato");
  }
});

function loadPage(pageName) {
  fetch(`pages/${pageName}.html`)
    .then((response) => response.text())
    .then((pageContent) => {
      document.querySelector("#content").innerHTML = pageContent;
      localStorage.setItem("lastPageVisited", pageName);
      console.log("Pagina Caricato");
      prova();
    })
    .catch((error) =>
      console.error("Errore durante il caricamento della pagina:", error)
    );
}

loadTemplate("header", "#header");
loadTemplate("footer", "#footer");





//Menu

const pizze = [
  {
    nome: "Margherita",
    ingredienti: ["pomodoro", "mozzarella", "basilico"],
    prezzo: 4,
    immagine: "margherita.jpg",
  },
  {
    nome: "Americana",
    ingredienti: ["pomodoro", "mozzarella", "wurstel", "patatine"],
    prezzo: 6,
    immagine: "americana.jpg",
  },
  {
    nome: "Vegetariana",
    ingredienti: ["pomodoro", "mozzarella", "verdure grigliate"],
    prezzo: 6,
    immagine: "vegetariana.jpg",
  },
  {
    nome: "Capricciosa",
    ingredienti: [
      "pomodoro",
      "mozzarella",
      "prosciutto cotto",
      " carciofini",
      "funghi",
      "olive",
    ],
    prezzo: 7,
    immagine: "capricciosa.jpg",
  },
  {
    nome: "Quattro formaggi",
    ingredienti: [
      "pomodoro",
      "mozzarella",
      "gorgonzola",
      "fontina",
      "parmigiano",
    ],
    prezzo: 7,
    immagine: "quattro-formaggi.jpg",
  },
  {
    nome: "Piccante",
    ingredienti: ["pomodoro", "mozzarella", "salame piccante"],
    prezzo: 6,
    immagine: "quattro-formaggi.jpg",
  },
];

const bibite = [
  {
    nome: "Acqua naturale/frizzante - bottiglia 0.5l",
    prezzo: "1.50",
  },
  {
    nome: "Coca cola/coca cola zero - bottiglia 0.5l",
    prezzo: "3",
  },
  {
    nome: "Thè alla pesca/limone - bottiglia 0.5l",
    prezzo: "3.50",
  },
  {
    nome: "Fanta - bottiglia 0.5l",
    prezzo: "3",
  },
  {
    nome: "Birra - 0.33",
    prezzo: "3",
  },
];

const dolci = [
  {
    nome: "Tiramisu",
    prezzo: "5",
  },
  {
    nome: "Bignè ripieno",
    prezzo: "3",
  },
  {
    nome: "Torta della nonna",
    prezzo: "6",
  },
  {
    nome: "Muffin al cioccolato",
    prezzo: "4",
  },
  {
    nome: "Donut allo zucchero",
    prezzo: "3",
  },
  {
    nome: "Donut al cioccolato",
    prezzo: "4",
  },
];

function prova() {
    const pizzeList = document.getElementById("pizze-list");
    const dolciList = document.getElementById("dolci-list");
    const beverageList = document.getElementById("beverage-list");

    console.log(pizzeList);

    if(pizzeList){
      console.log("è entrato");
      pizze.forEach(function (pizza) {
        console.log("ciclo");

        const listItem = document.createElement("li");
        const templateSource =
          document.getElementById("pizza-template").innerHTML;
        const template = Handlebars.compile(templateSource);
        const compiledHtml = template(pizza);
        listItem.innerHTML = compiledHtml;
        pizzeList.appendChild(listItem);

        console.log(listItem);
      });
    } else {
      console.log("non è entrato");
    }

    if(dolciList){
      dolci.forEach(function (dolce) {
        const listItem = document.createElement("li");
        const templateSource =
          document.getElementById("dolce-template").innerHTML;
        const template = Handlebars.compile(templateSource);
        const compiledHtml = template(dolce);
        listItem.innerHTML = compiledHtml;
        dolciList.appendChild(listItem);
      });
    }

    if(beverageList){
      bibite.forEach(function (bevanda) {
        const listItem = document.createElement("li");
        const templateSource =
          document.getElementById("beverage-template").innerHTML;
        const template = Handlebars.compile(templateSource);
        const compiledHtml = template(bevanda);
        listItem.innerHTML = compiledHtml;
        beverageList.appendChild(listItem);
      });
    }
  }
