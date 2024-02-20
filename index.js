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