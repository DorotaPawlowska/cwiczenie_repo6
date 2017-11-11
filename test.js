//-----------------------------------------------------------

//#epizod 29 kursu

var mojSam2 = {
    maxSpeed: 70,
    driver: "ktoś",
    drive: function (speed, time) {
        console.log("przejechaliśmy odległość:  " + speed*time + " km");
    },
    /*test: function () {
        console.log(this);
    }*/
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