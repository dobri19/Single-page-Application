(function() {

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
})();