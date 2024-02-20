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
```
let element = document.getElementById("monId");
```
### Par Classe :
```
let elements = document.getElementByClassName("maClasse");
```
### Par Balise :
```
let elements = document.getElementByTagName
```

## Modifier des éléments
### Changer le texte :
```
document.getElementById("monId").textContent = "Nouveau texte";
```

## Ecouter et réagir aux évènements
### Ajouter un écouteur d'évènements :
```
document.getElementById("monBouton").addEventListener("click", function (){
    alert("Bouton cliqué");
});
```

callback : fonction qui appelle en paramètre une autre fonction