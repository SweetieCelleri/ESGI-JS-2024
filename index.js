const monTitre = document.getElementById("titre");



const addButton = document.getElementById("add");
addButton.addEventListener("click", function() {
    const firstNumb = Number(document.getElementById("a").value);
    const secNumb = Number(document.getElementById("b").value);
    const calc = firstNumb + secNumb
    document.getElementById("result").innerHTML = calc
});

const subButton = document.getElementById("sub");
subButton.addEventListener("click", function() {
    const firstNumb = Number(document.getElementById("a").value);
    const secNumb = Number(document.getElementById("b").value); 
    const calc = firstNumb - secNumb
    document.getElementById("result").innerHTML = calc
});

const multButton = document.getElementById("mult");
multButton.addEventListener("click", function() {
    const firstNumb = Number(document.getElementById("a").value);
    const secNumb = Number(document.getElementById("b").value);
    const calc = firstNumb * secNumb
    document.getElementById("result").innerHTML = calc
});

const divButton = document.getElementById("div");
divButton.addEventListener("click", function() {
    const firstNumb = Number(document.getElementById("a").value);
    const secNumb = Number(document.getElementById("b").value);
    const calc = firstNumb / secNumb
    document.getElementById("result").innerHTML = calc
});

const delButton = document.getElementById("del");
delButton.addEventListener("click", function(){
    document.getElementById("result").innerHTML = "";
    document.getElementById("a").value = "";
    document.getElementById("b").value = ""
});






const liste = document.getElementById("fruits");
let basePrice = 0;

const pomme = document.getElementById("pomme");
pomme.addEventListener("click", function(){
    let newRow = liste.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Pommes";
    document.getElementById("tot").innerHTML = basePrice += 2
});

const poire = document.getElementById("poire");
poire.addEventListener("click", function(){
    let newRow = liste.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Poires"
    document.getElementById("tot").innerHTML = basePrice += 4
});

const orange = document.getElementById("orange");
orange.addEventListener("click", function(){
    let newRow = liste.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Oranges"
    document.getElementById("tot").innerHTML = basePrice += 2
});

const raisin = document.getElementById("raisin");
raisin.addEventListener("click", function(){
    let newRow = liste.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Raisins"
    document.getElementById("tot").innerHTML = basePrice += 5
});

const banane = document.getElementById("banane");
banane.addEventListener("click", function(){
    let newRow = liste.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Bananes"
    document.getElementById("tot").innerHTML = basePrice += 4
});

const fraise = document.getElementById("fraise");
fraise.addEventListener("click", function(){
    let newRow = liste.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Fraises"
    document.getElementById("tot").innerHTML = basePrice += 6
});

const framboise = document.getElementById("framboise");
framboise.addEventListener("click", function(){
    let newRow = liste.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Framboises"
    document.getElementById("tot").innerHTML = basePrice += 3
});

const mure = document.getElementById("mure");
mure.addEventListener("click", function(){
    let newRow = liste.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Mûres"
    document.getElementById("tot").innerHTML = basePrice += 7
});

const groseille = document.getElementById("groseille");
groseille.addEventListener("click", function(){
    let newRow = liste.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Groseilles"
    document.getElementById("tot").innerHTML = basePrice += 6
});

const ananas = document.getElementById("ananas");
ananas.addEventListener("click", function(){
    let newRow = liste.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Ananas"
    document.getElementById("tot").innerHTML = basePrice += 10
});

const kiwi = document.getElementById("kiwi");
kiwi.addEventListener("click", function(){
    let newRow = liste.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Kiwi"
    document.getElementById("tot").innerHTML = basePrice += 4
});

const mangue = document.getElementById("mangue");
mangue.addEventListener("click", function(){
    let newRow = liste.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Mangues"
    document.getElementById("tot").innerHTML = basePrice += 8
});

const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", function(){
    document.getElementById("fruits").innerHTML = ""
    document.getElementById("tot").innerHTML = basePrice = 0
})
