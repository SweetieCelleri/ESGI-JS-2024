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
let fruitTotal = 0;
let pommeCount = 0;
let poireCount = 0;
let orangeCount = 0;
let raisinCount = 0;
let bananeCount = 0;
let fraiseCount = 0;
let framboiseCount = 0;
let mureCount = 0;
let groseilleCount = 0;
let ananasCount = 0;
let kiwiCount = 0;
let mangueCount = 0;

const pomme = document.getElementById("pomme");
pomme.addEventListener("click", function(){
    pommeCount++
    if (pommeCount > 1) {
        document.getElementById("pommecount").innerHTML = "Pommes X" + pommeCount
        document.getElementById("tot").innerHTML = basePrice += 2
        document.getElementById("Ftot").innerHTML = fruitTotal += 1
    }else {
    let newRow = liste.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = `Pommes`
    newCell.id = "pommecount"
    document.getElementById("tot").innerHTML = basePrice += 2
    document.getElementById("Ftot").innerHTML = fruitTotal += 1
}});

const poire = document.getElementById("poire");
poire.addEventListener("click", function(){
    poireCount++
    if (poireCount > 1) {
        document.getElementById("poirecount").innerHTML = "Poires X" + poireCount
        document.getElementById("tot").innerHTML = basePrice += 4
        document.getElementById("Ftot").innerHTML = fruitTotal += 1
    }else {
    let newRow = liste.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Poires"
    newCell.id = "poirecount"
    document.getElementById("tot").innerHTML = basePrice += 4
    document.getElementById("Ftot").innerHTML = fruitTotal += 1
}});

const orange = document.getElementById("orange");
orange.addEventListener("click", function(){
    orangeCount++
    if (orangeCount > 1) {
        document.getElementById("orangecount").innerHTML = "Oranges X" + orangeCount
        document.getElementById("tot").innerHTML = basePrice += 2
        document.getElementById("Ftot").innerHTML = fruitTotal += 1
    }else {
    let newRow = liste.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Oranges"
    newCell.id = "orangecount"
    document.getElementById("tot").innerHTML = basePrice += 2
    document.getElementById("Ftot").innerHTML = fruitTotal += 1
}});

const raisin = document.getElementById("raisin");
raisin.addEventListener("click", function(){
    raisinCount++
    if (raisinCount > 1) {
        document.getElementById("raisincount").innerHTML = "Raisins X" + raisinCount
        document.getElementById("tot").innerHTML = basePrice += 5
        document.getElementById("Ftot").innerHTML = fruitTotal += 1
    }else {
    let newRow = liste.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Raisins"
    newCell.id = "raisincount"
    document.getElementById("tot").innerHTML = basePrice += 5
    document.getElementById("Ftot").innerHTML = fruitTotal += 1
}});

const banane = document.getElementById("banane");
banane.addEventListener("click", function(){
    bananeCount++
    if (bananeCount > 1) {
        document.getElementById("bananecount").innerHTML = "Bananes X" + bananeCount
        document.getElementById("tot").innerHTML = basePrice += 4
        document.getElementById("Ftot").innerHTML = fruitTotal += 1
    }else {
    let newRow = liste.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Bananes"
    newCell.id = "bananecount"
    document.getElementById("tot").innerHTML = basePrice += 4
    document.getElementById("Ftot").innerHTML = fruitTotal += 1
}});

const fraise = document.getElementById("fraise");
fraise.addEventListener("click", function(){
    fraiseCount++
    if (fraiseCount > 1) {
        document.getElementById("fraisecount").innerHTML = "Fraises X" + fraiseCount
        document.getElementById("tot").innerHTML = basePrice += 6
        document.getElementById("Ftot").innerHTML = fruitTotal += 1
    }else {
    let newRow = liste.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Fraises"
    newCell.id = "fraisecount"
    document.getElementById("tot").innerHTML = basePrice += 6
    document.getElementById("Ftot").innerHTML = fruitTotal += 1
}});

const framboise = document.getElementById("framboise");
framboise.addEventListener("click", function(){
    framboiseCount++
    if (framboiseCount > 1) {
        document.getElementById("framboisecount").innerHTML = "Framboise X" + framboiseCount
        document.getElementById("tot").innerHTML = basePrice += 3
        document.getElementById("Ftot").innerHTML = fruitTotal += 1
    }else {
    let newRow = liste.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Framboise"
    newCell.id = "framboisecount"
    document.getElementById("tot").innerHTML = basePrice += 3
    document.getElementById("Ftot").innerHTML = fruitTotal += 1
}});

const mure = document.getElementById("mure");
mure.addEventListener("click", function(){
    mureCount++
    if (mureCount > 1) {
        document.getElementById("murecount").innerHTML = "Mûres X" + mureCount
        document.getElementById("tot").innerHTML = basePrice += 7
        document.getElementById("Ftot").innerHTML = fruitTotal += 1
    }else {
    let newRow = liste.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Mûres"
    newCell.id = "murecount"
    document.getElementById("tot").innerHTML = basePrice += 7
    document.getElementById("Ftot").innerHTML = fruitTotal += 1
}});

const groseille = document.getElementById("groseille");
groseille.addEventListener("click", function(){
    groseilleCount++
    if (groseilleCount > 1) {
        document.getElementById("groseillecount").innerHTML = "Groseilles X" + groseilleCount
        document.getElementById("tot").innerHTML = basePrice += 6
        document.getElementById("Ftot").innerHTML = fruitTotal += 1
    }else {
    let newRow = liste.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Groseilles"
    newCell.id = "groseillecount"
    document.getElementById("tot").innerHTML = basePrice += 6
    document.getElementById("Ftot").innerHTML = fruitTotal += 1
}});

const ananas = document.getElementById("ananas");
ananas.addEventListener("click", function(){
    ananasCount++
    if (ananasCount > 1) {
        document.getElementById("ananascount").innerHTML = "Ananas X" + ananasCount
        document.getElementById("tot").innerHTML = basePrice += 10
        document.getElementById("Ftot").innerHTML = fruitTotal += 1
    }else {
    let newRow = liste.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Ananas"
    newCell.id = "ananascount"
    document.getElementById("tot").innerHTML = basePrice += 10
    document.getElementById("Ftot").innerHTML = fruitTotal += 1
}});

const kiwi = document.getElementById("kiwi");
kiwi.addEventListener("click", function(){
    kiwiCount++
    if (kiwiCount > 1) {
        document.getElementById("kiwicount").innerHTML = "Kiwi X" + kiwiCount
        document.getElementById("tot").innerHTML = basePrice += 4
        document.getElementById("Ftot").innerHTML = fruitTotal += 1
    }else {
    let newRow = liste.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Kiwi"
    newCell.id = "kiwicount"
    document.getElementById("tot").innerHTML = basePrice += 4
    document.getElementById("Ftot").innerHTML = fruitTotal += 1
}});

const mangue = document.getElementById("mangue");
mangue.addEventListener("click", function(){
    mangueCount++
    if (mangueCount > 1) {
        document.getElementById("manguecount").innerHTML = "Mangues X" + mangueCount
        document.getElementById("tot").innerHTML = basePrice += 8
        document.getElementById("Ftot").innerHTML = fruitTotal += 1
    }else {
    let newRow = liste.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Mangues"
    newCell.id = "manguecount"
    document.getElementById("tot").innerHTML = basePrice += 8
    document.getElementById("Ftot").innerHTML = fruitTotal += 1
}});

const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", function(){
    document.getElementById("fruits").innerHTML = ""
    document.getElementById("tot").innerHTML = basePrice = 0
    document.getElementById("Ftot").innerHTML = fruitTotal = 0
})

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer XXUj8J7K1ND5pTb9dkNW'
    }
  };


   fetch('https://the-one-api.dev/v2/movie', options)
   .then(response => response.json())
   .then(response => console.log(response))
   .catch(err => console.error(err));
   fetch('https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5d/quote' , options)
   .then(response => response.json())
   .then(response => console.log(response))
   .catch(err => console.error(err));

   const filmliste = document.getElementById("film");

  const LOTR1 = document.getElementById("LOTR1")
  LOTR1.addEventListener("click", function () {
    fetch("https://the-one-api.dev/v2/movie", options)
    .then((response) => response.json())
    .then((films) => {
        document.getElementById("film").innerHTML = ""
        const film = films.docs[6];
        console.log(films.docs);
        let newRow = filmliste.insertRow()
        let newCell = newRow.insertCell()
        newCell.innerHTML = film.name

    })
    .catch((error) =>
    console.error(
    "Erreur lors de la récupération des détails du film:",
    error
    )
    );
   });
   LOTR1.addEventListener("click", function () {
    fetch("https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5c/quote", options)
    .then((response) => response.json())
    .then((films) => {
        const quote = films.docs[0];
        console.log(films.docs);
        let newRow = filmliste.insertRow()
        let newCell = newRow.insertCell()
        newCell.innerHTML = quote.dialog

    })
    .catch((error) =>
    console.error(
    "Erreur lors de la récupération des détails du film:",
    error
    )
    );
   });




   const LOTR2 = document.getElementById("LOTR2")
  LOTR2.addEventListener("click", function () {
    fetch("https://the-one-api.dev/v2/movie", options)
    .then((response) => response.json())
    .then((films) => {
        const film = films.docs[5];
        console.log(films.docs);
        document.getElementById("film").innerHTML = ""
        let newRow = filmliste.insertRow()
        let newCell = newRow.insertCell()
        newCell.innerHTML = film.name
    })
    .catch((error) =>
    console.error(
    "Erreur lors de la récupération des détails du film:",
    error
    )
    );
   });



   const LOTR3 = document.getElementById("LOTR3")
  LOTR3.addEventListener("click", function () {
    fetch("https://the-one-api.dev/v2/movie", options)
    .then((response) => response.json())
    .then((films) => {
        const film = films.docs[7];
        console.log(films.docs);
        document.getElementById("film").innerHTML = ""
        let newRow = filmliste.insertRow()
        let newCell = newRow.insertCell()
        newCell.innerHTML = film.name
    })
    .catch((error) =>
    console.error(
    "Erreur lors de la récupération des détails du film:",
    error
    )
    );
   });

