//#epizod 40 kursu

var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function () {
    if(content.className == "open"){
        // zmniejszam
        content.className = "";
        button.innerHTML = "Show More";
    }else {
        //rozszerzam
        content.className = "open";
        button.innerHTML = "Show Less";
    }
};



//-----------------------------------------------------------
/*
//#epizod 39 kursu

var title = document.getElementById("diw");
title.onclick = function () {
  alert("kliknąłeś mnie");
};//funkcja anonimowa
title.onmouseover = function () {
    alert("you hoverd your mouse over me")
};
addEventListener();
*/
//-----------------------------------------------------------
/*
//#epizod 38 kursu

var parent = document.getElementById("diw").getElementsByTagName("ul");

var child = parent.getElementsByTagName("li")[0];

var remo = parent.removeChild(child);
parent.appendChild(remo);

*/
//-----------------------------------------------------------
/*
//#epizod 37 kursu
// ??????????????????????????????????????

var newUl = document.createElement("ul");
var newLi = document.createElement("li");
var newA = document.createElement("a");

var diw = document.getElementById("diw").getElementsByTagName("ul")[0];
diw.appendChild(newUl);
newUl.appendChild(newLi);
newLi.appendChild(newA);

newA.innerHTML = "cztery";
diw.insertBefore(newLi, diw.getElementsByTagName("li")[0]);
*/

/*
//-----------------------------------------------------------
//#epizod 36 kursu

var title = document.getElementById("page-title");
title.setAttribute("style", "position: relative;");
//title.setAttribute("style", "left: 10px;");
title.setAttribute("style", "position: relative; left: 10px;");
title.style.left = "20px";
title.style.top = "10px";
title.style.color = "red";
title.style.backgroundColor = "blue";
*/
//-----------------------------------------------------------
/*
//#epizod 35 kursu
var link = document.getElementById("ddd");
link.getAttribute("href");
link.getAttribute("class");
link.setAttribute("class", "pie");
link.setAttribute("alt", "hello");
link.className;
link.className = "ninja";
link.href;
link.style;
*/
//-----------------------------------------------------------

/*
//#epizod 34 kursu
var myTitle = document.getElementById("ddd");
console.log(myTitle);
console.log(myTitle.textContent);
myTitle.textContent = "gotowi do nauki";

var myBody = document.getElementsByTagName("body");
myBody[0].innerHTML;
myBody[0].innerHTML = "<p>paragraf</p>";
*/

/*
//#epizod 33 kursu

var myContent = document.getElementsByClassName("content");

document.getElementsByTagName();
*/

//-----------------------------------------------------------
/*
//-----------------------------------------------------------
//#epizod 31 kursu
var urodziny = new Date(1975, 0, 5, 10, 10, 59);
var urodziny2 = new Date(1975, 0, 5, 10, 10, 59);
//miesiac 0-11
console.log(urodziny.getMonth());
//rok yyyy
console.log(urodziny.getFullYear());
//dzien miesiąca 1-31
console.log(urodziny.getDate());
//dzień tygodnia 0-6
console.log(urodziny.getDay());
//godzina 0-23
console.log(urodziny.getHours());
//milisekundy od 1 stycznia 1970 roku
console.log(urodziny.getTime());

if(urodziny == urodziny2){
    console.log("urodziny są równe")
}else{
    console.log("urodziny nie są równe")
}

if(urodziny.getTime() == urodziny2.getTime()){
    console.log("urodziny są równe")
}else{
    console.log("urodziny nie są równe")
}
//-------------------------------------------------------
var mojDzien = new Date();
console.log(mojDzien);

var mojBylyDzien = new Date(1545, 11, 2, 10, 23, 59);
var mojPrzyszlyDzien = new Date(2545, 0, 11, 11, 23, 34);
console.log(mojBylyDzien);
console.log(mojPrzyszlyDzien);
*/

//-----------------------------------------------------------
//#epizod 30 kursu
/*
var Car = function (maxSpeed, driver) {
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function (speed, time) {
        console.log("przejechaliśmy odległość:  " + speed*time + " km");
    };
    this.logDriver = function () {
        console.log("driver name is " + this.driver);
    };
};

var Samo = new Car(70, "ninja");
var Samo2 = new Car(40, "lala");
var Samo3 = new Car(20, "jaja");
var Samo4 = new Car(10, "lulu");

Samo.drive(23,5);
Samo2.drive(45,5);
Samo3.logDriver();
Samo4.logDriver();
*/
//-----------------------------------------------------------
//#epizod 29 kursu
/*
var mojSam2 = {
    maxSpeed: 70,
    driver: "ktoś",
    drive: function (speed, time) {
        console.log("przejechaliśmy odległość:  " + speed*time + " km");
    },
    logDriver: function () {
        console.log("driver name is " + this.driver);
    }
};

var mojSam3 = {
    maxSpeed: 70,
    driver: "JJJJJJa",
    drive: function (speed, time) {
        console.log("przejechaliśmy odległość:  " + speed*time + " km");
    },
    test: function () {
        console.log(this);
    }
};

mojSam2.logDriver();
mojSam3.test();
console.log(mojSam2.maxSpeed);
mojSam2.drive(50, 3);
*/
//-----------------------------------------------------------
/*
//#epizod 28 kursu
var mojaTab = new Array();
mojaTab[0] = 8;
mojaTab[1] = "hello";

var mojSam = new Object();
mojSam.maxSpped = 50;
mojSam.driver = "Shaun";
console.log(mojSam.driver);
mojSam.drive = function () { console.log("jedziemy");};
mojSam.drive();

var mojaTab2 = [true, 15, "hi"];

var mojSam2 = {
    maxSpeed: 70,
    driver: "ktoś",
    drive: function (speed, time) {
        console.log("przejechaliśmy odległość:  " + speed*time + " km");
    }
};

console.log(mojSam2.maxSpeed);
mojSam2.drive(50, 3);
*/

//-----------------------------------------------------------
/*
//#epizod 27 kursu
var mojString = new String();
mojString = "hello";
console.log(mojString.length);
console.log(mojString.toUpperCase());
var mojString2 = "hello there";
console.log(mojString2.toUpperCase());
*/

//-----------------------------------------------------------
/*
//#epizod 26 kursu
var mojaTablica = [];
mojaTablica[0] = 25;
console.log(mojaTablica[0]);
mojaTablica[1] = 35;
console.log(mojaTablica[1]);
mojaTablica[2] = true;
console.log(mojaTablica[2]);
mojaTablica[3] = "hello";
console.log(mojaTablica[3]);
console.log(mojaTablica);
mojaTablica[2] = false;
console.log(mojaTablica[2]);
console.log(mojaTablica);

var mojaTablica2 = [10,20,"haj",false];
console.log(mojaTablica2);

var mojaTablica3 = new Array();
var mojaTablica4 = new Array(5);

console.log(mojaTablica2.length);
console.log(mojaTablica2.sort());
console.log(mojaTablica.sort());
console.log(mojaTablica2.reverse());
*/

//-----------------------------------------------------------
//epizod #25 kursu
/*
var str = "hello, world";
console.log(str);
var str2 = str.slice(2,9);
console.log(str2);
var str3 = str.slice(2);
console.log(str3);
var tags = "tag, mięso, salami, kiełbasa, szynka";
console.log(tags);
var tagowTablica = tags.split(",");
console.log(tagowTablica);
*/

//-----------------------------------------------------------
//epizod #24 kursu
/*
var Stringi1 = "abc";
var Stringi2 = "Bcd";

console.log(Stringi1.toLowerCase() === Stringi2.toLowerCase());
console.log(Stringi1 < Stringi2);
*/

/*
console.log(Stringi.toUpperCase());
console.log(Stringi.indexOf("fun"));
console.log(Stringi.indexOf("sun"));
console.log(Stringi.length);

if(Stringi.indexOf("sun")=== -1){
    console.log("słowo sun nie znajduje się w stringu");
}else {
    console.log("słow sun zaczyna się na pozycji " + Stringi.indexOf("sun"));
}
*/