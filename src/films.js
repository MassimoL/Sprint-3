// Exercise 1: Get the array of all directors.
let getAllDirectors = (array) => directors = array.map(movie => movie.director)

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let filmsDirector = movies.filter(movie => movie.director === director); 
  console.log("EXERCICI 2 ->", filmsDirector);
  return filmsDirector;
} 

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let myDirector = getMoviesFromDirector(array, director) 
  let score = myDirector.reduce((i, film) => i += film.score, 0)
  let directorMedia = Number(score / myDirector.length).toFixed(2)
  return Number(directorMedia)
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let onlyTitles = movies.map(movie => movie.title); 
  let orderByTitle = onlyTitles.sort(); 
  console.log("EXERCICI 4 ->", orderByTitle);
  return orderByTitle.slice(0, 20);  
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let sortedFilms = [...array].sort((a, b) => { 
    if (a.year === b.year) {
      return a.title.localeCompare(b.title) 
    }
    return a.year - b.year 
  })
  return sortedFilms 
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  let currentCategory = movies.filter(movie => movie.genre.includes(genre)); 
  let sumScoresCat = currentCategory.reduce((total, film) => total + film.score, 0);
  let averageCategory = sumScoresCat / currentCategory.length;
  console.log("EXERCICI 6 ->", averageCategory);
  return averageCategory;
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let convertedMovies = array.map(movie => { 
    let durationString = movie.duration 
    let hoursMatch = durationString.match(/\d+h/) 
    let minutesMatch = durationString.match(/\d+min/) 
    let hours = hoursMatch ? Number(hoursMatch[0].replace('h', '')) : 0 
    let minutes = minutesMatch ? Number(minutesMatch[0].replace('min', '')) : 0 
    let totalMinutes = hours * 60 + minutes 
    return { ...movie, duration: totalMinutes }
  })
  return convertedMovies 
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) { 
  let moviesOfYear = array.filter(movie => movie.year === year) 
  moviesOfYear.sort((a, b) => b.score - a.score) 
  return [moviesOfYear[0]] 
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
