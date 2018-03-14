const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is:', banner.nodeType);

console.log('#page-banner node name is:', banner.nodeName);

console.log('#page-banner has child nodes:', banner.hasChildNodes());

const clondeBanner1 = banner.cloneNode(false);
const clondeBanner2 = banner.cloneNode(true);
console.log(clondeBanner1);
console.log(clondeBanner2);

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