const pizze = [
    {
        nome: "Margherita",
        ingredienti: ["pomodoro", "mozzarella", "basilico"],
        prezzo: 4,
        immagine: "margherita.jpg"
    },
    {
        nome: "Americana",
        ingredienti: ["pomodoro", "mozzarella", "wurstel", "patatine"],
        prezzo: 6,
        immagine: "americana.jpg"
    },
    {
        nome: "Vegetariana",
        ingredienti: ["pomodoro", "mozzarella", "verdure grigliate"],
        prezzo: 6,
        immagine: "vegetariana.jpg"
    },
    {
        nome: "Capricciosa",
        ingredienti: ["pomodoro", "mozzarella", "prosciutto cotto", " carciofini", "funghi", "olive"],
        prezzo: 7,
        immagine: "capricciosa.jpg"
    },
    {
        nome: "Quattro formaggi",
        ingredienti: ["pomodoro", "mozzarella", "gorgonzola", "fontina", "parmigiano"],
        prezzo: 7,
        immagine: "quattro-formaggi.jpg"
    },
    {
        nome: "Piccante",
        ingredienti: ["pomodoro", "mozzarella", "salame piccante"],
        prezzo: 6,
        immagine: "quattro-formaggi.jpg"
    }
];

const bibite = [
    {
        nome: "Acqua naturale/frizzante - bottiglia 0.5l",
        prezzo: "1.50"
    },
    {
        nome: "Coca cola/coca cola zero - bottiglia 0.5l",
        prezzo: "3"
    },
    {
        nome: "Thè alla pesca/limone - bottiglia 0.5l",
        prezzo: "3.50"
    },
    {
        nome: "Fanta - bottiglia 0.5l",
        prezzo: "3"
    },
    {
        nome: "Birra - 0.33",
        prezzo: "3"
    }
]

const dolci = [
    {
        nome: "Tiramisu",
        prezzo: "5"
    },
    {
        nome: "Bignè ripieno",
        prezzo: "3"
    },
    {
        nome: "Torta della nonna",
        prezzo: "6"
    },
    {
        nome: "Muffin al cioccolato",
        prezzo: "4"
    },
    {
        nome: "Donut allo zucchero",
        prezzo: "3"
    },
    {
        nome: "Donut al cioccolato",
        prezzo: "4"
    }
]




function populateList(templateId, data, targetElementId){
    const templateSource = document.getElementById(templateId).innerHTML;
    const template = Handlebars.compile(templateSource);
    const targetElement = document.getElementById(targetElementId);
    data.forEach(item => {
        const compiledHtml = template(item);
        targetElement.innerHTML += compiledHtml;
    });
}

populateList("pizza-template", pizze, "pizze-list");

populateList("dolce-template", dolci, "dolci-list");
e
populateList("beverage-template", beverage, "beverage-list");
