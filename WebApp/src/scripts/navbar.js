$('#homepagebutton').click(function(){
    console.log(`click`);
    $(`#dynamic`).empty();
    $('#dynamic').append(homepageHTML);
});

document.addEventListener('DOMContentLoaded', function() {
     $('#dynamic').append(homepageHTML);
}, false);

let userLoggin = false;
$('#userbutton').click(function(){
    if(!userLoggin){
        window.alert(`Logged In`);
        userLoggin = true;
    }

    $(`#dynamic`).empty();
    let movies = JSON.parse(window.localStorage.getItem(`savedMovies`));
    $(`#dynamic`).append(`<div class="row" id="moviesCollection"></div>`);
    for(let i = 0; i < movies.length; i++){
        $(`#moviesCollection`).append(buildUserCollection(movies[i].imdbID, movies[i].Poster, movies[i].episode));
    }
});