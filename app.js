'use strict'

let numberOfFilms


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '')

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '')
    }
}

start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
// Первое преобразование
/*
const a = prompt('Один из последних просмотренных фильмов?',''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?',''),
    d = prompt('На сколько оцените его?', '')

    personalMovieDB.movies[a] = b
    personalMovieDB.movies[c] = d
*/

//Второе преобразование (вариант)
/*
    for ( let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?',''),
        b = prompt('На сколько оцените его?', '');

        if(a != null && b != null && a != '' && b!= '' && a.length < 50) {
            personalMovieDB.movies[a] = b
            console.log('done')
        } else {
            console.log('error')
            i--
        }
 */



    function rememberMyFilms() {
        let i = 0
        do {
            const a = prompt('Один из последних просмотренных фильмов?',''),
                b = prompt('На сколько оцените его?', '');
                i++;
                let result = (a != null && b != null && a != '' && b!= '' && a.length < 50) ? personalMovieDB.movies[a] = b && console.log('done') : console.log('error') && i--
                    console.log(result)
        } while (i < 2);
    }

    rememberMyFilms()



function detectPersonalLevel() {
    if (personalMovieDB.count < 10 ) {
        console.log('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        console.log('Вы классический зритель')
    } else if ( personalMovieDB.count >= 30 ) {
        console.log('Вы киноман')
    } else {
        console.log('Произошла ошибка')
    }
}

    detectPersonalLevel()
    
    console.log(personalMovieDB)