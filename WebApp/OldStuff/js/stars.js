(function (scope) {

  $("#ratingStars").click(function () {
    var $id = $('.meal-basics').attr('id');
    setRating($id);
  });


  var setRating = function (recipeId, calculated, allRatings) {

    var $recipesData = JSON.parse(localStorage.getItem('allRecipes'));
    $recipesData.forEach(function (recipe) {
      if (recipe.id === recipeId) {
        recipe.totalRating = calculated;
        recipe.allRatings = allRatings;
        localStorage.setItem('allRecipes', JSON.stringify($recipesData));
      };

    });

  }

  var getRating = function (recipeId) {
    var $recipesData = JSON.parse(localStorage.getItem('allRecipes'));
    var rating;
    $recipesData.forEach(function (recipe) {
      if (recipe.id === recipeId) {
        rating = recipe.totalRating;
        allRatings = recipe.allRatings;
      };

    });
    return {
      rating,
      allRatings
    };
  }

  scope.stars = {
    setRating,
    getRating
  }
})(window);