(function () {
    $.getJSON("js/default-recipes.json", function (data) {
        data.defaultRecipes.forEach(function (obj) {
            obj.id = recipeControl.generateId();
        })
        var $defaultRecipes = localStorage.getItem('allRecipes') ?
            localStorage.getItem('allRecipes') : data.defaultRecipes;

        if (typeof $defaultRecipes !== 'string') {
            localStorage.setItem('allRecipes', JSON.stringify($defaultRecipes));
        }
    })
})();