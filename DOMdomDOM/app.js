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