$(`#dynamic`).on(`click`, `.searchAdd`, function() {
    let parent = this.parentElement.parentElement;
    console.log(this);
    $(this).replaceWith('<button type="button" class="float-right btn btn-secondary bottom-right searchAdd" disabled>Already Added</button>').fadeIn();
    $.getJSON(`http://www.omdbapi.com/?apikey=1c4993a8&i=${parent.getAttribute(`id`)}`, function(data) {
        console.log();
        
        let array = JSON.parse(window.localStorage.getItem(`savedMovies`));
        if (array == null) {
            let movies = [];
            data[`episode`] = 0;
            movies.push(data);
            localStorage.setItem(`savedMovies`, JSON.stringify(movies));
        } else {
            let filter = array.filter(function(x) {
                return x.imdbID == data.imdbID;
            })
            if (filter.length < 1) {
                data[`episode`] = 0;
                array.push(data);
                localStorage.setItem(`savedMovies`, JSON.stringify(array));
            }
            
        }
    });
    
});
