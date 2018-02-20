(function (scope) {
    var saveRecipe = function ($category, $recipeName, $ingredients, $description, $imgURL) {
        var $allRecipes = localStorage.getItem('allRecipes') ? localStorage.getItem('allRecipes') : [];

        var $recipe = {
            id: generateId(),
            category: $category,
            name: $recipeName,
            ingredients: $ingredients,
            preparation: $description,
            picture: $imgURL,
            allRatings: [],
            totalRating: 0
        }

        if (typeof $allRecipes === 'string') {
            $allRecipes = JSON.parse($allRecipes);
        }

        $allRecipes.push($recipe);
        localStorage.setItem('allRecipes', JSON.stringify($allRecipes));
    }

    var generateId = function () {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    scope.recipeControl = {
        saveRecipe,
        generateId
    }
})(window);