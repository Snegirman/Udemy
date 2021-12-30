'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
const adv = document.querySelector('.promo__adv'),
    advPic = adv.querySelectorAll('img'),
    genre = document.querySelector('.promo__genre'),
    bg = document.querySelector('.promo__bg'),
    filmList = document.querySelector('.promo__interactive-list');

advPic.forEach (item => {
    item.remove();
});

genre.innerHTML = "драма";

bg.style.backgroundImage = 'url(img/bg.jpg)';

movieDB.movies.sort();
movieDB.movies.forEach((item, index) => {
    filmList.insertAdjacentHTML('beforeend', `<li class="promo__interactive-item">${index + 1}. ${item}
    <div class="delete"></div>`);
});