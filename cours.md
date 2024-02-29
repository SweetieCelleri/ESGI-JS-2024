# Dévellopement web
#=h1 ##=h2 etc... 
README obligatoire en markdown
Git : logiciel qui permet de gérer le code source et les ressource d'un site web
## var, let et const
var : permet de déclarer une variable
let : permet de déclarer une seule fois une variable
const : n'est pas modifiable

## Sélectionner des éléments
### Par Id :
```js
let element = document.getElementById("monId");
```
### Par Classe :
```js
let elements = document.getElementByClassName("maClasse");
```
### Par Balise :
```js
let elements = document.getElementByTagName
```

## Modifier des éléments
### Changer le texte :
```js
document.getElementById("monId").textContent = "Nouveau texte";
```

## Ecouter et réagir aux évènements
### Ajouter un écouteur d'évènements :
```js
document.getElementById("monBouton").addEventListener("click", function (){
    alert("Bouton cliqué");
});
```

callback : fonction qui appelle en paramètre une autre fonction

## Tableau
### Exemple :
```js
let fruits = ["pomme","banane","fraise"];
```

## Les promesses
```javascript
let promesse = new Promise((resolve, reject) => {
    //Simulation d'une tâche asynchrone
    let condition = true;
    if (condition) {
        setTimeout (() => resolve("Opération réussie"), 1000);
    } else {
        reject("Opération échouée");
    }
});
```

## JSON
syntaxe commence et termine par {}
déclaration : 
"nom": "Dupont",
"adresse": {
    "rue": ""
    "vill": ""
}
"numéro de tel": [""]

### utilisation en js
```js
const objet = {
    nom: "Dupont",
    age: 30,
};

const chaineJSON = JSON.stringify(objet);
console.log(chaineJSON); // => dupont, 30
```