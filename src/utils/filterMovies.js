export function filterMoviesBasedOnGenre(movies, genre){

    if(genre === 'All Genre') return movies;


    return movies.filter(m => m.genre === genre)
}