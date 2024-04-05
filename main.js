function loadTemplate(templateName, targetElement) {
    fetch(`components/${templateName}.hbs`)
        .then(response => response.text())
        .then(template => {
            const compiledTemplate = Handlebars.compile(template);
            document.querySelector(targetElement).innerHTML = compiledTemplate();
        })
        .catch(error => console.error('Errore durante il caricamento del template:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    const lastPageVisited = localStorage.getItem('lastPageVisited');
    const pageToLoad = lastPageVisited || 'home';
    loadPage(pageToLoad);
});

document.addEventListener('click', function(event) {
    const target = event.target;
    if (target.tagName === 'A') {
        event.preventDefault(); 
        const pageName = target.getAttribute('href').substring(1);
        loadPage(pageName);
    }
});

function loadPage(pageName) {
    fetch(`pages/${pageName}.html`)
        .then(response => response.text())
        .then(pageContent => {
            document.querySelector('#content').innerHTML = pageContent;
            localStorage.setItem('lastPageVisited', pageName);
        })
        .catch(error => console.error('Errore durante il caricamento della pagina:', error));
}




loadTemplate('header', '#header');
loadTemplate('footer', '#footer');





