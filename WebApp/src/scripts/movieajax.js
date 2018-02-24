$('#reset').click(function() {
    window.localStorage.clear();
    $('#collection').empty();
});

$('#movies').click(function() {

    $('#infoto').hide();
    let test = JSON.parse(localStorage.savedMovies);

    console.log(test);
    let all = '';
    for (let i = 0; i < test.length; i++) {
        all += test[ i ].Title + '; ' + test[ i ].Year + '; ' + test[ i ].Awards + '<br>';
    }
    $('#collection').html(all);
    $('#collection').show();
});

$('#search').on('keyup', function(event) {
    if (event.keyCode === 13) {
        const value = $(this).val().trim();
        callApi(value);
    }

    $('#collection').hide();
});

$('#search-button').click(function() {
    const value = $('#search').val().trim();
    callApi(value);

    $('#collection').hide();
});

$('#add-movie').click(function() {

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
    } else {
        parsedPersistentData.push(parsedData);
        window.localStorage.setItem('savedMovies', JSON.stringify(parsedPersistentData));
    }

    $('#add-movie').hide();

    window.sessionStorage.clear();
});

function callApi(title) {
    $.get(`http://www.omdbapi.com/?t=${title}&apikey=1c4993a8`).then(renderHtml);

    function renderHtml(data) {
        let title = data.Title;
        let year = data.Year;
        let director = data.Director;

        $('#my-img-tag-0')
            .attr('src', data.Poster)
            .css({
                width: '200px',
                height: '200px'
            });

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

        $('#add-movie').show();

        if (title !== undefined || year !== undefines) {
            $('.result').html('Title: "' + title + '", ' + 'Year: ' + year +
                ', ' + 'Director: ' + director + '  ' + '<br>');
        };

        $('#infoto').show();

    };
};
