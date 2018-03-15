

/*
const bookList = document.querySelector('#book-list');

console.log('book-list next sibling is:', bookList.nextSibling);
console.log('book-list next element is:', bookList.nextElementSibling);

console.log('book-list previous element is:', bookList.previousElementSibling);
console.log('book-list previous sibling is:', bookList.previousSibling);

console.log('the parent node is:', bookList.parentNode);
console.log('the parent node is:', bookList.parentElement.parentElement);

console.log(bookList.childNodes);
console.log(bookList.children);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br/> to cool for ....!'
*/

/*
const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is:', banner.nodeType);

console.log('#page-banner node name is:', banner.nodeName);

console.log('#page-banner has child nodes:', banner.hasChildNodes());

const clondeBanner1 = banner.cloneNode(false);
const clondeBanner2 = banner.cloneNode(true);
console.log(clondeBanner1);
console.log(clondeBanner2);
*/
/*
const wmf = document.querySelector('#book-list li:nth-child(2) .name');

var books = document.querySelector('#book-list li .name');

books = document.querySelectorAll('#book-list li .name');
console.log(books);
// z tym querySelectorAll - mam nodelist
// ale z getElementsByClassName - mam HTMLCollection

books.forEach(function (t) {
    t.textContent += ' test';
});

const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>books ...</h2>'
bookList.innerHTML += '<p> fhsfdhsfdh books ...</p>'
*/