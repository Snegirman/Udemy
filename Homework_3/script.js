'use strict';

let personalMovieDB = {
    count: null,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько вы фильмов уже посмотрели?', '');
    
    while (numberOfFilms === '' || numberOfFilms === null  || numberOfFilms.length > 50 || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько вы фильмов уже посмотрели?', '');
    }
}

// start();


function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
            
        let film = prompt('Один из последних просмотренных фильмов?', '');
        let rate = prompt('На сколько вы оцените его?', '');
         
     
         if (film === '' || rate === '') {
             i = 0;
         } else if (film === null || rate === null) {
             i = 0;
         } else if (film.length > 50 || rate.length > 50) {
             i = 0;
         } else {
             personalMovieDB.movies[film] = rate;
             personalMovieDB.count = numberOfFilms;
         }
     
     
     }
}

// rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (10 > personalMovieDB.count < 30) {
        alert('Вы классичский зритель');
    } else {
        alert ('Произошла ошибка');
    }
}

// detectPersonalLevel();

function showMyDB () {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`,'');
    }
}
