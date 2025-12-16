// variables
const nomCommercial = document.getElementById("nomCommercial");
let boutonAppel = document.getElementById("boutonAppel");
let phraseAccroche = document.getElementById("phraseAccroche");
let boutonExplorer = document.getElementById("boutonExplorer");
let sectionTemoignages = document.getElementById("temoignages")
//API URL
const apiUrl = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json";

fetch(apiUrl)
.then(response => response.json())
.then(data => {
    console.log(data);
    nomCommercial.textContent = data.nomCommercial;
    boutonAppel.textContent = data.texteAppelAction; //bouton appel texte
    phraseAccroche.textContent = data.phraseAccroche;
    boutonExplorer.textContent = data.texteAppelAction;
    afficherTemoignages(data);
});

function afficherTemoignages(e){
    e.temoignages.forEach(temoin => {
        //container de chaque card
        let temoignageCard = document.createElement("div");

        let prenom = document.createElement("p");
        prenom.textContent = temoin.prenom;
        temoignageCard.appendChild(prenom);

        
        //type experience
        let typeExperience = document.createElement("p");
        typeExperience.textContent = temoin.typeExperience;
        console.log(e.typeExperience);
        temoignageCard.appendChild(typeExperience);
        temoignages.appendChild(temoignageCard);
        
    });

    
}