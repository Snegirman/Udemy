'use strict';

const numberOfFilms = prompt('Сколько вы фильмов уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let firstFilm = prompt('Один из последних просмотренных фильмов?', '');
let firstRate = prompt('На сколько вы оцените его?', '');

let secondFilm = prompt('Один из последних просмотренных фильмов?', '');
let secondRate = prompt('На сколько вы оцените его?', '');

personalMovieDB.movies[firstFilm] = firstRate;
personalMovieDB.movies[secondFilm] = secondRate;

console.log(personalMovieDB);

