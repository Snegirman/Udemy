/* Задание на урок:

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько вы фильмов уже посмотрели?', '');
        
        while (personalMovieDB.count === '' || personalMovieDB.count === null  || personalMovieDB.count > 50 || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько вы фильмов уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (10 > personalMovieDB.count < 30) {
            alert('Вы классичский зритель');
        } else {
            alert ('Произошла ошибка');
        }
    },
    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let question = prompt(`Ваш любимый жанр под номером ${i+1}`,'');
            if (question === '' || question === null) {
                i--;
            } else {
                personalMovieDB.genres[i] = question;
            }
        }
        personalMovieDB.genres.forEach((item, index) => console.log(`Любимый жанр ${index+1} - это ${item}`));
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    }
};





