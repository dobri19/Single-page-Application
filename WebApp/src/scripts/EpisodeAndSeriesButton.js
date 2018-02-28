(function() {

    $(`#dynamic`).on(`click`, `.episodeInput`, function() {
        $(this).replaceWith(`<input type="text" class="form-control episodeTextInput">`)
    });

    $(`#dynamic`).on(`keyup`, `.episodeTextInput`, function() {
        if (event.keyCode === 13) {
            elementID = this.parentElement.parentElement.parentElement.parentElement.getAttribute(`id`);
            let value = $(this).val().trim();
            let movies = JSON.parse(window.localStorage.getItem(`savedMovies`));
            movies.forEach(element => {
                if (element.imdbID == elementID) {
                    element.episode = value;
                }
            });

            window.localStorage.setItem(`savedMovies`, JSON.stringify(movies));
            $(this).replaceWith(`<a href="#" class="episodeInput">${value}</a>`)
        }
    });
})();
