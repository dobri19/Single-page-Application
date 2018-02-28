let resultDataBase = [];

function callApi(title) {
    var dData = $.getJSON(`http://www.omdbapi.com/?apikey=1c4993a8&s=${title}&type=series&r=json`, function(data) {
        console.log(`ajax`);
       
        var searchResults = data.Search;
        if (searchResults != null) {
            for (let i = 0; i < searchResults.length; i++) {
                const movieID = searchResults[i].imdbID;
                const curentMovieUrl = `http://www.omdbapi.com/?i=${movieID}&apikey=1c4993a8`;
                const newMovie = $.get(curentMovieUrl, function(data) {
                    resultDataBase.push(data);

                    let movies = JSON.parse(window.localStorage.getItem(`savedMovies`));
                    if (movies == null) {
                        movies = [];
                    }
                    console.log(movies);
                    let indexToRemove = movies.findIndex(element => element.imdbID == movieID);

                    if (indexToRemove > -1) {
                        $(`#dynamic`).append(buildResult(data.imdbID, data.Poster, data.Title, data.Year, data.Plot, false));
                    } else {
                        $(`#dynamic`).append(buildResult(data.imdbID, data.Poster, data.Title, data.Year, data.Plot, true));
                    }
                });
            }
        }else {
            // alert(`No results for ${title}`)
            $(`#dynamic`).append(
                `<img src="./images/no-results.jpg" alt="">`
            );
        }

    });
};
