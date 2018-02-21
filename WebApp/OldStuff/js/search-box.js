$(function () {
    var database = JSON.parse(localStorage.getItem('allRecipes'));
    var recipesNames = [];
    database.forEach(function (recipe) {
        recipesNames.push(recipe.name);
    })

    $(".search-box").autocomplete({
        source: recipesNames,
        select: function (event, ui) {
            var $mealName = ui.item.value;
            var $mealId;
            var $mealCategory;
            database.forEach(function (recipe) {
                if (recipe.name === $mealName) {
                    $mealId = recipe.id;
                    $mealCategory = recipe.category;
                }
            })
            $('.ui-widget').css('display', 'none');
            $('.search-box').val('');
            modifyTitle.moveTitle();
            meal.visualizeMeal($mealId);
           
            $("#showRecipeCommentsBtn").css("display","block");
            $("#meal-window").css("margin-left","20%");

            if($('body').width() <= 768){
                $("#meal-window").css("margin-left","0px");                
            }

            if ($('body').width() > 770) {
                $(".picture").css("height","35%");
            }

            category.loadFromStorage($mealCategory);
        }
    });
});