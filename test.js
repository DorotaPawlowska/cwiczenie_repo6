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

function makeAdder(x) {
    // parameter `x` is an inner variable

    // inner function `add()` uses `x`, so
    // it has a "closure" over it
    function add(y) {
        return y + x;// a 'y' to co to ????
    }

    return add;
}

// `plusOne` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusOne = makeAdder( 1 );

// `plusTen` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusTen = makeAdder( 10 );

console.log(plusOne( 3 ));		// 4  <-- 1 + 3
console.log(plusOne( 41 ));		// 42 <-- 1 + 41

console.log(plusTen( 13 ));		// 23 <-- 10 + 13