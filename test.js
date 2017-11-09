

function Srednia( a, b){
    var srednia = (a + b )/2;//zmienna lokalna
    console.log(srednia);
    return srednia;
}

var mojaSrednia = Srednia(2,4);// zmienna globalna

function logResult() {
    console.log("moja średnia " + mojaSrednia + " w funkcji");
}

logResult();