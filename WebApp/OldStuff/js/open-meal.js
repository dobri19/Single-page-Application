(function (scope) {
    var visualizeMeal = function (recipeId) {
        var recipesData = JSON.parse(localStorage.getItem('allRecipes'));
        var commentsData = JSON.parse(localStorage.getItem('allComments'));

        if ($('.meal-window').css('display') === 'none') {
            recipesData.forEach(function (recipe) {
                if (recipe.id === recipeId) {
                    $('#back').html($backButtonSVG);
                    $('#back').find('svg').css('margin-top', '10px');
                    $('#back').find('svg').css('margin-left', '15px');
                    $('#back').find('svg').css('cursor', 'pointer');
                    $('#meal-name').html(recipe.name);
                    if (recipe.servings) {
                        $('#servings').html($servingSVG + recipe.servings + ' servings');
                    }
                    if (recipe.time) {
                        $('#time').html($timeSVG + recipe.time);
                    }
                    if (recipe.nutrition) {
                        $('#calories').html($caloriesSVG + recipe.nutrition.totalCalories);
                    }
                    if (recipe.totalRating) {
                        $('#ratingCounter').html(recipe.totalRating);
                    }
                    $('.meal-basics').attr('id', recipeId);
                    $('#ingrids').html(recipe.ingredients.join(', '));
                    $('#preparation').html(recipe.preparation);
                    $('#meal-pic').attr('src', recipe.picture);
                    $('.meal-window').css('display', 'block');
                    $("#showRecipeCommentsBtn").css("display", "block");
                    if (commentsData) {
                        comments.displayComments();
                    }
                }
            });
        }       

        $(document).mouseup(function (e) {
            var mealDetailPanel = $('.meal-window');
            var commentWindow = $("#getRecipeComments");
            var commentButton = $("#showRecipeCommentsBtn");

            // we have 3 visible divs(meal details, comentary panel and commentary button)
            // in case we click outside one of them - we have to close all
            // so if event target isn't the meal details, as well as the comentary panel and button + all their nested childs
            // a.k.a (if it was clicked outside of their bounds) - we do stuffs
            if (!mealDetailPanel.is(e.target)
                && mealDetailPanel.has(e.target).length === 0
                && !commentWindow.is(e.target)
                && commentWindow.has(e.target).length === 0
                && !commentButton.is(e.target)
                && commentButton.has(e.target).length === 0
            ) {
                // hide meal details
                mealDetailPanel.hide();
              
                //hide commentary panel
                commentWindow.css("display", "none");

                //hide commentary button
                commentButton.css("display", "none");
                commentButton.css("margin-left", "-70px");

              
                //clear loaded data for the recipe
                clearMealWindow();

                //move meal details in its original position
                mealDetailPanel.css("margin-left", "");

            }
        });
    }

    var clearMealWindow = function () {
        $('#meal-name').html('');
        $('#servings').html('');
        $('#time').html('');
        $('#calories').html('');
        $('.meal-basics').removeAttr('id');
        $('#ingrids').html('');
        $('#preparation').html('');
        $('#ratingCounter').html('');
        $('#meal-pic').removeAttr('src');
        comments.clearComments();
    }

    var $servingSVG = `<svg id="svg-serv" style="enable-background:new 0 0 24 24;" width="30px" height="30px" version="1.1" viewBox="0 0 24 24" xml:space="preserve"
    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <path class="st0" d="M18.7,11l4.9-4.7L22.4,5l-6.7,6H18.7z M19.8,2.1l-1.6-0.9L11.6,11H14L19.8,2.1z M0,13l0.1,0.6  c0.4,4.3,3.1,8.3,7,10L7.2,24h9.6l0.2-0.6c3.9-1.8,6.6-5.3,7-9.5L24,13H0z M16.3,22H7.7c-2.8-1-4.8-4-5.4-7h19.6  C21.2,18,19.1,21,16.3,22z"
    /></svg>`;

    var $timeSVG = `<svg id="svg-time" enable-background="new 0 0 24 24" height="26px" version="1.1" viewBox="0 0 24 24" width="26px" xml:space="preserve"
    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g>
        <g>
            <path clip-rule="evenodd" d="M12,0C5.375,0,0.003,5.373,0.003,12c0,6.627,5.372,12,11.997,12    c6.626,0,11.997-5.373,11.997-12C23.997,5.373,18.626,0,12,0z M16.412,16.709l-0.35,0.35c-0.291,0.291-0.782,0.305-1.088,0.029    l-4.52-3.955c-0.308-0.275-0.541-0.838-0.521-1.25l0.419-7.134C10.374,4.336,10.729,4,11.142,4h0.493    c0.413,0,0.767,0.336,0.787,0.748l0.343,5.934c0.021,0.413,0.262,1,0.535,1.309l3.144,3.628    C16.717,15.928,16.704,16.418,16.412,16.709z"
                fill-rule="evenodd" /> </g>
    </g></svg>`;

    var $caloriesSVG = `<svg id="svg-cals" enable-background="new 0 0 63 47" height="26px" version="1.1" viewBox="0 0 63 47" width="26px" xml:space="preserve"
    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g>
        <path d="M10,1H2C0.896,1,0,1.896,0,3v40c0,1.104,0.896,2,2,2h8c1.104,0,2-0.896,2-2V3C12,1.896,11.104,1,10,1z" />
        <path d="M27.833,15h-8C18.729,15,17,15.11,17,15.864v27.273C17,43.89,18.729,45,19.833,45h8   C28.938,45,29,43.89,29,43.137V15.864C29,15.11,28.938,15,27.833,15z"
        />
        <path d="M44.5,4h-8C35.396,4,34,4.334,34,5.364v37.273C34,43.666,35.396,45,36.5,45h8c1.104,0,1.5-1.334,1.5-2.363   V5.364C46,4.334,45.604,4,44.5,4z"
        />
        <path d="M61.5,29h-8c-1.104,0-2.5-0.175-2.5,0.228v14.545C51,44.175,52.396,45,53.5,45h8   c1.104,0,1.5-0.825,1.5-1.228V29.228C63,28.825,62.604,29,61.5,29z"
        />
    </g></svg>`;

    var $backButtonSVG = `<svg enable-background="new 0 0 141.732 141.732" height="26px" id="svg-back" version="1.1" viewBox="0 0 141.732 141.732" width="26px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Livello_29"><path d="M105.614,118.681c3.398,3.396,3.4,8.912,0,12.311c-3.396,3.399-8.91,3.398-12.311,0c-0.02-0.02-0.035-0.04-0.053-0.061   l-0.025,0.022l-57.66-57.66l0.024-0.022c-1.61-1.579-2.608-3.775-2.608-6.208c-0.002-2.73,1.258-5.166,3.229-6.762l-0.06-0.058   l57.66-57.66l0.025,0.024c0.018-0.021,0.033-0.039,0.053-0.058c3.4-3.4,8.912-3.4,12.312,0c3.398,3.396,3.398,8.908,0,12.311   c-0.021,0.02-0.041,0.034-0.061,0.054l0.023,0.024L54.043,67.063l51.54,51.54l-0.025,0.021   C105.573,118.646,105.594,118.66,105.614,118.681"/></g><g id="Livello_1_1_"/></svg>`;


    // show meal when clicked on meal's image or title
    $(document).on('click', '.recipeImageWindow', function (e) {
        var $currentClicked = this.childNodes[1];
        var $id = $currentClicked.alt;
        $('.recipesShowModal').css('display', 'none');
        $("#showRecipeCommentsBtn").css("display", "block");

        $("#side-menu").css("display","block");

        if ($('body').width() > 770) {
            $(".picture").css("height","35%");
        }
        
        visualizeMeal($id);
    });

    // don't show meal when clicked on meal's details bar
    $(document.body).on('click', '.recipeIconsWindow', function (e) {
        e.stopPropagation();
    })

    $('#back').on('click', function () {
        $('.meal-window').css('display', 'none');
        $('.recipesShowModal').css('display', 'block');      
        menu.hideShowMenusBack();
    })

    scope.meal = {
        visualizeMeal,
        clearMealWindow
    }

})(window);