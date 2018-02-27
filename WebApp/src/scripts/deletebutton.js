$(`#dynamic`).on(`mouseenter`, `.card`, function(){
    let children = this.children.item(1).children.item(2);
    $(children).show();
});

$(`#dynamic`).on(`mouseleave`, `.card`, function(){
    $(`.btn-small`).hide();
});

$(`#dynamic`).on(`click`, `.card`, function(){
    let movies = JSON.parse(window.localStorage.getItem(`savedMovies`));
    let id = this.parentElement.getAttribute(`id`);
    let indexToRemove = movies.findIndex(element => element.imdbID == id);
    console.log(indexToRemove);
    movies.splice(indexToRemove, 1);
    window.localStorage.setItem(`savedMovies`, JSON.stringify(movies));
});