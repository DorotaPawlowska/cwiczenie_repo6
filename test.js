/*var linki = document.getElementsByTagName("a");

for(var i = 0; i < linki.length; i++){

    linki[i].className = "link-" + i;

}
*/
(function IIFE(){
    console.log( "Hello!" );
})();
// "Hello!"

var a = 42;

(function IIFE(){
    var a = 10;
    console.log( a );	// 10
})();

console.log( a );
