const pizze = [
    {
        nome: 'Margherita',
        ingredienti: ['pomodoro', 'mozzarella', 'basilico'],
        prezzo: 4,
        immagine: 'margherita.jpg'
    },
    {
        nome: 'Americana',
        ingredienti: ['pomodoro', 'mozzarella', 'wurstel', 'patatine'],
        prezzo: 6,
        immagine: 'americana.jpg'
    },
    {
        nome: 'Vegetariana',
        ingredienti: ['pomodoro', 'mozzarella', 'verdure grigliate'],
        prezzo: 6,
        immagine: 'vegetariana.jpg'
    },
    {
        nome: 'Capricciosa',
        ingredienti: ['pomodoro', 'mozzarella', 'prosciutto cotto', ' carciofini', 'funghi', 'olive'],
        prezzo: 7,
        immagine: 'capricciosa.jpg'
    },
    {
        nome: 'Quattro formaggi',
        ingredienti: ['pomodoro', 'mozzarella', 'gorgonzola', 'fontina', 'parmigiano'],
        prezzo: 7,
        immagine: 'quattro-formaggi.jpg'
    },
    {
        nome: 'Piccante',
        ingredienti: ['pomodoro', 'mozzarella', 'salame piccante'],
        prezzo: 6,
        immagine: 'quattro-formaggi.jpg'
    }
];

const source = document.getElementById('pizza-card').innerHTML;
const template = Handlebars.compile(source);
const compiledHtml = template(pizze);
const pizzeText = document.getElementById('card-row');
pizzeText.innerHTML = compiledHtml;
