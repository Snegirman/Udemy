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
    filmList = document.querySelector('.promo__interactive-list'),
    addBtn = document.querySelector('button'),
    filmNameInput = document.querySelector('.adding__input'),
    checkboxFavourite = document.querySelector('[type="checkbox"]');

advPic.forEach (item => {
    item.remove();
});

genre.innerHTML = "драма";

bg.style.backgroundImage = 'url(img/bg.jpg)';

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (filmNameInput.value) {
    if (filmNameInput.value.length > 21) {
        filmNameInput.value = filmNameInput.value.slice(0,21) + '...';
        console.log(filmNameInput.value);
    }
    if (checkboxFavourite.checked) {
        console.log('Добавляем любимый фильм');
    }
    movieDB.movies.push(filmNameInput.value);
    filmNameInput.value = '';
    refreshList();
    }
});

function refreshList() {
        filmList.innerHTML = "";
        movieDB.movies.sort();
        movieDB.movies.forEach((item, index) => {
        filmList.insertAdjacentHTML('beforeend', `<li class="promo__interactive-item">${index + 1}. ${item}
        <div class="delete"></div>`);
        filmList.querySelectorAll('.delete')[index].addEventListener('click', (e) => {
            e.target.parentElement.remove();
            movieDB.movies.splice(index, 1);
            refreshList();
        });
    });
}
refreshList();
