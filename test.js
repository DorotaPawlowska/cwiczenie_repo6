var srednia = 0;
function Srednia( a, b){
    srednia = (a + b )/2;//zmienna globalna
    console.log(srednia);
    return srednia;
}

var mojaSrednia = Srednia(2,4);// zmienna globalna

function logResult() {
    console.log("moja średnia " + mojaSrednia + " w funkcji");
}

logResult();