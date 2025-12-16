const nomCommercial = document.getElementById("nomCommercial");
let boutonAppel = document.getElementById("boutonAppel");

const apiUrl = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json";

fetch(apiUrl)
.then(response => response.json())
.then(data => {
    console.log(data);
    nomCommercial.textContent = data.nomCommercial;
    boutonAppel.textContent = data.texteAppelAction;
});

// function afficherProduits(){

// }