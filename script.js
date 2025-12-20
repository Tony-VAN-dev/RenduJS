// variables
const nomCommercial = document.getElementById("nomCommercial");
let boutonAppel = document.getElementById("boutonAppel");
let phraseAccroche = document.getElementById("phraseAccroche");
let boutonExplorer = document.getElementById("boutonExplorer");
//variables services
let sectionTemoignages = document.getElementById("temoignages")
//variables produits
let sectionProduits = document.getElementById("produits");
let produitsContainer = document.getElementById("produitsContainer");
// variables services
let servicesContainer = document.getElementById("servicesContainer");
//variables temoignages
let temoignagesCardsContainer = document.getElementById("temoignagesCardsContainer");

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
    afficherServices(data);
    afficherTemoignages(data);
});

 function afficherProduits(data){
        data.produits.forEach(produit => {
            let productCard = document.createElement("div"); // carte du produit
            productCard.classList.add("productCard");
            let image = document.createElement("img"); // création d'image
            //productname
            let productName = document.createElement("h3");
            productName.textContent = produit.nom;
            //image
            image.src = produit["image-url"];
            image.style.width = "200px";
            //produit description
            let produitDescription = document.createElement("p");
            produitDescription.textContent = produit.description;
        
            // productCard.appendChild
            
            productCard.appendChild(image);
            productCard.appendChild(productName);
            productCard.appendChild(produitDescription);
            produitsContainer.appendChild(productCard);
            sectionProduits.appendChild(produitsContainer);


        });
    }

    function afficherServices(data){
        //serviceContainer
        data.services.forEach(service=>{
        let serviceContainer = document.createElement("div");
        serviceContainer.classList.add("serviceContainer");
        //serviceName
        let serviceName = document.createElement("h1");
        serviceName.textContent = service.nom;
        // serviceDescription
        let serviceDescription = document.createElement("p");
        serviceDescription.textContent = service.description;
        //serviceContainer.appendChild()
        serviceContainer.appendChild(serviceName);
        serviceContainer.appendChild(serviceDescription);

        //serviceContainer.style
        // serviceContainer.style.width = "200px";
        // serviceContainer.style.border = "solid black 5px";
        // serviceContainer.style.padding = "5px";
        // servicesContainer.appendChild
        servicesContainer.appendChild(serviceContainer);

    });
    }

function afficherTemoignages(data){ // on met la data dans le paramètre de la fonction
    
    //témoignages cards container

    data.temoignages.forEach(temoin => {
        //container de chaque 
        let temoignageCard = document.createElement("div");
        temoignageCard.classList.add("temoignageCard");
        temoignageCard.style.width = "200px";
        // prenom témoin
        let prenom = document.createElement("p");
        prenom.textContent = temoin.prenom;
        prenom.style.textAlign ="center";
        temoignageCard.appendChild(prenom);

        //commentaire Témoin
        let commentaireTemoin = document.createElement("p");
        commentaireTemoin.textContent = temoin.commentaire;
        temoignageCard.appendChild(commentaireTemoin);
        //type experience
        let typeExperience = document.createElement("p");
        typeExperience.textContent = temoin.typeExperience;
        temoignageCard.appendChild(typeExperience);
        console.log(temoignageCard + "test");
        //temoignagesCardsContainer
        temoignagesCardsContainer.appendChild(temoignageCard);
    });

}