/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

let num = 0,
    film = '',
    numberOfFilms = 0,
    rate = '';

let personalMovieDB = {
    count: null,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

while (num <= 1) {
            
    numberOfFilms = prompt('Сколько вы фильмов уже посмотрели?', '');
    film = prompt('Один из последних просмотренных фильмов?', '');
    rate = prompt('На сколько вы оцените его?', '');
    
    num++;

    if (film === '' || numberOfFilms === '' || rate === '') {
        num = 0;
    } else if (film === null || numberOfFilms === null || rate === null) {
        num = 0;
    } else if (film.length > 50 || numberOfFilms.length > 50 || rate > 50) {
        num = 0;
    } else {
        personalMovieDB.movies[film] = rate;
        personalMovieDB.count = numberOfFilms;
    }


}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (10 > personalMovieDB.count < 30) {
    alert('Вы классичский зритель');
} else {
    alert ('Произошла ошибка');
}

console.log(personalMovieDB);