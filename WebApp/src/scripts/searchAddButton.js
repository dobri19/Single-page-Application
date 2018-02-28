$(`#dynamic`).on(`click`, `.searchAdd`, function() {
    let parent = this.parentElement.parentElement;


    $.getJSON(`http://www.omdbapi.com/?apikey=1c4993a8&i=${parent.getAttribute(`id`)}`, function(data){
        console.log();
        let array = JSON.parse(window.localStorage.getItem(`savedMovies`));
        if(array == null)
        {
            let movies = [];
            movies.push(data);
            localStorage.setItem(`savedMovies`, JSON.stringify(movies));
        }
        else
        {
            let filter = array.filter(function(x){
                return x.imdbID == data.imdbID;
            })
            if(filter.length < 1){
            array.push(data)
            localStorage.setItem(`savedMovies`, JSON.stringify(array));
            }
        }
    });
});