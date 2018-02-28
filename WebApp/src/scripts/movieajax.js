var resultDataBase = [];

$('#reset').click(function() {
    window.localStorage.clear();
    $('#collection').empty();
});

$('#movies').click(function() {

    $('#infoto').hide();
    let test = JSON.parse(localStorage.savedMovies);

    // console.log(test);
    let all = '';
    for (let i = 0; i < test.length; i++) {
        all += test[i].Title + '; ' + test[i].Year + '; ' + test[i].Awards + '<br>';
    }
    $('#collection').html(all);
    $('#collection').show();
});

$('#search').on('keyup', function(event) {
    if (event.keyCode === 13) {
        $('#search-results').empty();
        
        const value = $(this).val().trim();
        callApi(value);
    }

    $('#collection').hide();
});

$('#search-button').click(function() {
    const value = $('#search').val().trim();
    $('#search-results').empty();
    callApi(value);

    $('#collection').hide();
});

$('.button').click(function() {

    let data = window.sessionStorage.getItem('currentMovie');
    let parsedData = JSON.parse(data);

    if (parsedData === null) {
        console.log('Sorry!');
        return;
    }


    let persistentData = window.localStorage.getItem('savedMovies');
    let parsedPersistentData = JSON.parse(persistentData);

    if (parsedPersistentData == null) {
        let array = [];
        array.push(parsedData);

        window.localStorage.setItem('savedMovies', JSON.stringify(array));
        $('#myMessage').html(`Film ${parsedData.Title} were added! `);


    } else {
        var sMovies = JSON.parse(localStorage.savedMovies);
        var filer = sMovies.filter(function(x) {
            return x.Title == parsedData.Title;
        })
        if (filer.length < 1) {
            parsedPersistentData.push(parsedData);
            window.localStorage.setItem('savedMovies', JSON.stringify(parsedPersistentData));
            $('#myMessage').html('Film were added in to collection');

        } else {
            $('#myMessage').html('Sorry you have alredy this film');
        }
    }

    $('#add-movie').hide();

    window.sessionStorage.clear();



});

function callApi(title) {

    $.get(`http://www.omdbapi.com/?t=${title}&apikey=1c4993a8`).then(renderHtml);
    //----------Test
    var dData = $.getJSON(`http://www.omdbapi.com/?apikey=1c4993a8&s=${title}&type=movie&r=json`, function(data) {
        var searchResults = data.Search;
        //Making results
        if (searchResults != undefined) {
            for (let i = 0; i < searchResults.length; i++) {
                // console.log('for');
                //Getting movies by ID
                const movieID = searchResults[i].imdbID;
                const curentMovieUrl = `http://www.omdbapi.com/?i=${movieID}&apikey=1c4993a8`;
                const newMovie = $.get(curentMovieUrl, function(data) {
                    resultDataBase.push(data);
                    console.log(data.Released)
                    $('#search-results').append(
                        `
                        <div class="example-2 card">
        <div class="wrapper" style="background: url(${data.Poster}) center/cover no-repeat">
            <div class="header">
                <div class="date">
                    <span class="day">${data.Released}</span>
                    
                </div>
                <ul class="menu-content">
                    
                </ul>
            </div>
            <div class="data">
                <div class="content">
                    <span class="author">${data.Director}</span>
                    <h1 class="title"><a href="#">${data.Title}</a></h1>
                    <p class="text">${data.Plot}</p>
                    <a href="#" class="button">Add Movie</a>
                </div>
            </div>
        </div>
    </div>`
                    );
                });
                // resultDataBase.push(newMovie);

                // console.log(newMovie);
            }
        } else {
            alert(`No results`)
        }


        console.log(resultDataBase);

    });







    ///-------End of test
    function renderHtml(data) {
        // console.log(data);
        let title = data.Title;
        let year = data.Year;
        let director = data.Director;

        $('#my-img-tag-0')
            .attr('src', data.Poster)
        // .css({
        //     width: '300px',
        //     height: '450px'
        // });


        // if (JSON.parse(localStorage.getItem('currentMovie')) !== undefined) {
        //     console.log('hide');
        //     $('#add-movie').show();

        //     localStorage.forEach(element => {
        //         if (element.Title === title) {
        //             console.log('show');
        //             $('#add-movie').hide();
        //         }
        //     });
        // } else {
        //     console.log('show');
        //     $('#add-movie').hide();
        // }

        window.sessionStorage.setItem('currentMovie', JSON.stringify(data));

        // if (JSON.parse(localStorage.getItem('currentMovie')) === null) {
        //     console.log('hide');
        //     $('#add-movie').hide();
        // } else {
        //     console.log('show');
        //     $('#add-movie').show();
        // }



        if (title !== undefined || year !== undefines) {
            $('.result').html('Title: "' + title + '", ' + 'Year: ' + year +
                ', ' + 'Director: ' + director + '  ' + '<br>');
        };
        $('#add-movie').show();
        $('#infoto').show();

        // check(title);

    };
};






// function check(title) {
//     if (localStorage.savedMovies === null) {
//         console.log('Sorry!');
//         return false;
//     } else {
//         let sMovies = JSON.parse(localStorage.savedMovies);
//         for (let i = 0; i < sMovies.length; i++) {
//             let titleBase = sMovies[i].Title;
//             if (title == titleBase) {
//                 $('#add-movie').hide();
//                 console.log('hidden');
//                 $('#myMessage').html('Sorry! Youve already have this movie!');
//                 return true;
//             } else {
//                 return false;
//             }
//             // console.log
//         }
//         console.log('check');
//     }

// }
