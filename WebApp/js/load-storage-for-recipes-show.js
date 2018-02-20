/* eslint-disable*/

(function (scope) {
  var loadFromStorage = function (category) {
    $("#recipeBox").empty();
    $("#recipeBox").scrollTop();

    var storage = JSON.parse(localStorage.getItem("allRecipes"));

    var $timeIcon = `<svg class="statsButtons" enable-background="new 0 0 24 24" height="26px" id="Layer_1" version="1.1" viewBox="0 0 24 24" width="26px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path clip-rule="evenodd" d="M12,0C5.375,0,0.003,5.373,0.003,12c0,6.627,5.372,12,11.997,12    c6.626,0,11.997-5.373,11.997-12C23.997,5.373,18.626,0,12,0z M16.412,16.709l-0.35,0.35c-0.291,0.291-0.782,0.305-1.088,0.029    l-4.52-3.955c-0.308-0.275-0.541-0.838-0.521-1.25l0.419-7.134C10.374,4.336,10.729,4,11.142,4h0.493    c0.413,0,0.767,0.336,0.787,0.748l0.343,5.934c0.021,0.413,0.262,1,0.535,1.309l3.144,3.628    C16.717,15.928,16.704,16.418,16.412,16.709z" fill-rule="evenodd"/></g></g></svg>`
    var $portionsIcon = `<svg id="Layer_1" class="statsButtons" style="enable-background:new 0 0 24 24;" height="26px" version="1.1" viewBox="0 0 24 24" width="26px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css"></style><path d="M18.7,11l4.9-4.7L22.4,5l-6.7,6H18.7z M19.8,2.1l-1.6-0.9L11.6,11H14L19.8,2.1z M0,13l0.1,0.6  c0.4,4.3,3.1,8.3,7,10L7.2,24h9.6l0.2-0.6c3.9-1.8,6.6-5.3,7-9.5L24,13H0z M16.3,22H7.7c-2.8-1-4.8-4-5.4-7h19.6  C21.2,18,19.1,21,16.3,22z"/></svg>`
    var $nutritionIcon = `<svg class="statsButtons" enable-background="new 0 0 63 47" height="28px" id="Layer_1" version="1.1" viewBox="0 0 63 47" width="28px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M10,1H2C0.896,1,0,1.896,0,3v40c0,1.104,0.896,2,2,2h8c1.104,0,2-0.896,2-2V3C12,1.896,11.104,1,10,1z"/><path d="M27.833,15h-8C18.729,15,17,15.11,17,15.864v27.273C17,43.89,18.729,45,19.833,45h8   C28.938,45,29,43.89,29,43.137V15.864C29,15.11,28.938,15,27.833,15z" /><path d="M44.5,4h-8C35.396,4,34,4.334,34,5.364v37.273C34,43.666,35.396,45,36.5,45h8c1.104,0,1.5-1.334,1.5-2.363   V5.364C46,4.334,45.604,4,44.5,4z" /><path d="M61.5,29h-8c-1.104,0-2.5-0.175-2.5,0.228v14.545C51,44.175,52.396,45,53.5,45h8   c1.104,0,1.5-0.825,1.5-1.228V29.228C63,28.825,62.604,29,61.5,29z" /></g></svg>`
    var $ratingIcon = `<svg class="statsButtons" enable-background="new 0 0 139 139" height="28px" id="Favorite" version="1.1" viewBox="0 0 139 139" width="28px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M18.237,60.574l23.096,19.578l-7.183,29.438c-1.411,5.491,4.648,9.998,9.575,6.901L69.5,100.572l25.774,15.916  c4.79,2.955,10.844-1.408,9.576-6.902l-7.184-29.435l23.099-19.579c4.363-3.661,2.111-10.844-3.662-11.267l-30.282-2.255  L75.414,19.025c-2.112-5.211-9.577-5.211-11.832,0L52.175,47.051l-30.281,2.255C16.124,49.872,13.869,56.913,18.237,60.574z"/></svg>`

    // start iterating over database
    storage.forEach(function (recipe) {
      if (recipe.category === category) {
        // get all the needed info for current purpose
        var title = recipe.name;
        var picture = recipe.picture;
        var specialId = recipe.id;

        var time = "N/A";

        if (recipe.time) {
          time = recipe.time;
        }

        var servings = "N/A";
        if (recipe.servings) {
          servings = recipe.servings + " portions";
        }

        var nutrition = "N/A";
        var allNutrition = null;
        if (recipe.nutrition) {
          nutrition = recipe.nutrition.totalCalories;
          allNutrition = recipe.nutrition;
        }

        var rating = "N/A";
        if (recipe.totalRating) {
          rating = recipe.totalRating;
        }

        // building the structure, creating all the tags needed and attach attr/classes
        var $recipeBox = $("#recipeBox");
        var $newRecipeWindow = $("<div>").addClass("recipeMainWindow col-sm-6 center-block");
        var $newRecipeImageWindow = $("<div>").addClass("recipeImageWindow");
        var $newTitleWindow = $("<p>").addClass("recipeTitle");
        var $newRecipeImg = $("<img>").addClass("recipeImage");
        var $newRecipeIconWindow = $("<div>").addClass("recipeIconsWindow");
        var $newStatsButton = $("<div>").addClass("statsButtons-container col-xs-3");

        var $rating = $("<p>").addClass("stats");
        var $link1 = $("<a>");
        var $buttonIcon1 = $ratingIcon;

        var $time = $("<p>").addClass("stats");
        var $link2 = $("<a>");
        var $buttonIcon2 = $timeIcon;

        var $portions = $("<p>").addClass("stats");
        var $link4 = $("<a>");
        var $buttonIcon4 = $portionsIcon;

        var $calories = $("<p>").addClass("stats");
        var $link3 = $("<a>");
        var $buttonIcon3 = $nutritionIcon;

        // put content in every div/tag/block
        $newTitleWindow.html(title);
        $newTitleWindow.attr("title", specialId);
        $newRecipeImg.attr("src", picture);
        $newRecipeImg.attr("alt", specialId);


        if (rating) {
          $rating.html(rating);
        }

        if (time) {
          $time.html(time);
        }

        if (servings) {
          $portions.html(servings);
        }

        if (nutrition) {
          $calories.html(nutrition);
        }


        // create structure of additionalInfo icons
        $newStatsButton
          .append($rating)
          .append(($link1).append($buttonIcon1))
          .append($time)
          .append(($link2).append($buttonIcon2))
          .append($portions)
          .append(($link4).append($buttonIcon4))
          .append($calories)
          .append(($link3).append($buttonIcon3))

        // append already structured additionalInfo icons to its parent
        $newRecipeIconWindow.append($newStatsButton);


        // recipeImageWindow is formed
        $newRecipeImageWindow.append($newTitleWindow)
          .append($newRecipeImg)
          .append($newRecipeIconWindow);

        // full recipeWindow is formed
        $newRecipeWindow.append($newRecipeImageWindow)

        // attach finnished recipe to the parent and we are done
        $newRecipeWindow.appendTo($recipeBox);
      }
    });
  };

  var $fromMenuMeat = $("#showMeat");
  var $fromMenuFish = $("#showFish");
  var $fromMenuVegan = $("#showVegan");
  var $fromMenuDessert = $("#showDessert");

  $fromMenuMeat.on("click", function () {
    var categoryMeal = $fromMenuMeat.html();

    $(".recipesShowModal").css("display", "block");

    loadFromStorage(categoryMeal);
  })

  $fromMenuFish.on("click", function () {
    var categoryMeal = $fromMenuFish.html();

    $(".recipesShowModal").css("display", "block");

    loadFromStorage(categoryMeal);
  })

  $fromMenuVegan.on("click", function () {
    var categoryMeal = $fromMenuVegan.html();

    $(".recipesShowModal").css("display", "block");

    loadFromStorage(categoryMeal);
  })

  $fromMenuDessert.on("click", function () {
    var categoryMeal = $fromMenuDessert.html();

    $(".recipesShowModal").css("display", "block");
    loadFromStorage(categoryMeal);
  })

  $(document).mouseup(function (e) {
    var container = $('.recipesShowModal');


    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide();
    }

  });

  scope.category = {
    loadFromStorage
  };
  
})(window);