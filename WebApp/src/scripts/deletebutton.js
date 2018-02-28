$(`#dynamic`).on(`mouseenter`, `.card`, function(){
    let children = this.children.item(1);
    $(children).show();
});

$(`#dynamic`).on(`mouseleave`, `.card`, function(){
    $(`.btn-small`).hide();
});

$(`#dynamic`).on(`click`, `.top-right`, function(){

    let movies = JSON.parse(window.localStorage.getItem(`savedMovies`));
    let id = this.parentElement.parentElement.getAttribute(`id`);
    let idToRemove = -1;
    let index = -1;

    movies.forEach(element => {
        index++;
        console.log(`${element.imdbID} ?? ${id}`);
        if(element.imdbID == id){
            idToRemove = index;
        }
    });

    if(idToRemove > -1){
        movies.splice(idToRemove, 1);
    }

    window.localStorage.setItem(`savedMovies`, JSON.stringify(movies));
    
    $(this.parentElement.parentElement).hide();
});