(function () {
    var clearAllFields = function () {
        $("select").val($("#default-category").val());
        $(".dialog").find("input:text").val("");
        $(".dialog").find("textarea").val("");
        $("#preview").attr("src", "");
    }

    // open add recipe window with ADD RECIPE button
    $("#add-recipe").on("click", function () {
        $(".dialog").css("display", "block");
        $("#side-menu").css("display", "none");
        $('.recipesShowModal').css("display", "none");
        // close add recipe window when clicked anywhere outside the box
        $(document).mouseup(function (e) {
            var container = $('.dialog');
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.hide();
                clearAllFields();
            }
        });
    });

    // close add recipe window with button close 
    $("#close-add-recipe").on("click", function () {
        $(".dialog").css("display", "none");
        clearAllFields();
    });



    // display image when url is entered
    $("#meal-img-url").on("input", function () {
        $("#preview").attr("src", $(this).val());
    });

    $("#save-recipe").on("click", function () {
        var $category = $('.category-select').find(":selected").html();
        var $recipeName = $('.recipe-name').find('input').val();
        var $ingredients = $('.ingredients-container').find('textarea').val().split(',');
        var $description = $('.description-container').find('textarea').val();
        var $imgURL = $('#meal-img-url').val();

        if ($category == 'Select Category' || $recipeName == '' || $ingredients == '' || $description == '' || $imgURL == '') {
            alert('Please, fill in all fields!');
            return false;
        }

        recipeControl.saveRecipe($category, $recipeName, $ingredients, $description, $imgURL);
        clearAllFields();
        alert('Success!');
        $(".dialog").css("display", "none");
    });

})();