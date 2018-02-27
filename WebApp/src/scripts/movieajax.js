var resultDataBase = [];
function callApi(title) {
            var dData = $.getJSON(`http://www.omdbapi.com/?apikey=1c4993a8&s=${title}&type=series&r=json`, function(data) {
                var searchResults = data.Search;
                for (let i = 0; i < searchResults.length; i++) {
                    const movieID = searchResults[i].imdbID;
                    const curentMovieUrl = `http://www.omdbapi.com/?i=${movieID}&apikey=1c4993a8`;
                    const newMovie = $.get(curentMovieUrl, function(data) {
                        resultDataBase.push(data);
                        
                        $(`#dynamic`).append(buildResult(data.imdbID,data.Poster,data.Title, data.Year, data.Plot));
                    });
                }
                console.log(resultDataBase); 
        
            });
};