'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

// const a = prompt('Один из последних просмотренных фильмов?',''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?',''),
//     d = prompt('На сколько оцените его?', '')

//     personalMovieDB.movies[a] = b
//     personalMovieDB.movies[c] = d

    for ( let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?',''),
        b = prompt('На сколько оцените его?', '');

    personalMovieDB.movies[a] = b

    }

    console.log(personalMovieDB)
