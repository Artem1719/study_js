const books = document.querySelector('.books'),
    bookItems = document.querySelectorAll('.book'),
    adv = document.querySelector('.adv'),
    liesOfBook2 = bookItems[0].querySelectorAll('li'),
    liesOfBook5 = bookItems[5].querySelectorAll('li');


books.prepend(bookItems[1]);
bookItems[2].replaceWith(bookItems[4]);
books.append(bookItems[2]);

document.body.style.background = 'url(image/you-dont-know-js.jpg)';

adv.remove();

bookItems[4].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';

liesOfBook2[2].replaceWith(liesOfBook2[3]);
liesOfBook2[4].replaceWith(liesOfBook2[6]);
liesOfBook2[5].replaceWith(liesOfBook2[8]);
liesOfBook2[8].after(liesOfBook2[4]);
liesOfBook2[4].after(liesOfBook2[5]);
liesOfBook2[9].after(liesOfBook2[2]);

liesOfBook5[2].replaceWith(liesOfBook5[9]);
liesOfBook5[4].after(liesOfBook5[2]);
liesOfBook5[8].before(liesOfBook5[5]);


(bookItems[2].querySelectorAll('li')[8]).insertAdjacentHTML('afterend', `<li>Глава 8: За пределами ES6</li>`);




