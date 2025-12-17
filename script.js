// variables
const nomCommercial = document.getElementById("nomCommercial");
let boutonAppel = document.getElementById("boutonAppel");
let phraseAccroche = document.getElementById("phraseAccroche");
let boutonExplorer = document.getElementById("boutonExplorer");
let sectionTemoignages = document.getElementById("temoignages")
let sectionProduits = document.getElementById("produits");
    let produitsContainer = document.getElementById("produitsContainer");


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
    afficherProduits(data);
    afficherTemoignages(data);
});

function afficherTemoignages(data){ // on met la data dans l'argument de la fonction
    data.temoignages.forEach(temoin => {
        //container de chaque card
        let temoignageCard = document.createElement("div");
        // prenom témoin
        let prenom = document.createElement("p");
        prenom.textContent = temoin.prenom;
        temoignageCard.appendChild(prenom);

        //commentaire Témoin
        let commentaireTemoin = document.createElement("p");
        commentaireTemoin.textContent = temoin.commentaire;
        temoignageCard.appendChild(commentaireTemoin);
        //type experience
        let typeExperience = document.createElement("p");
        typeExperience.textContent = temoin.typeExperience;
        temoignageCard.appendChild(typeExperience);
        temoignages.appendChild(temoignageCard);
        
    });

}

 function afficherProduits(data){
        data.produits.forEach(produit => {
            let productCard = document.createElement("div"); // carte du produit9
            let image = document.createElement("img"); // création d'image
            //productname
            let productName = document.createElement("h3");
            productName.textContent = produit.nom;
            //image
            image.src = produit["image-url"];
            image.style.width = "200px";

            //productCard.style
            productCard.style.border = "solid red 5px";
            productCard.style.width = "200px";
            // produit.appendChild
            productCard.appendChild(image);
            productCard.appendChild(productName);
            produitsContainer.appendChild(productCard);
            sectionProduits.appendChild(produitsContainer);


        });
    }
