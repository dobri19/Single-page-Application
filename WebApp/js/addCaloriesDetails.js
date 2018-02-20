
   (function () {
    $("#calories").css("cursor", "pointer");
    $("#calories").click(function(){
        var $id = $('.meal-basics').attr('id');
        visualizeCalories($id);
      });


    var visualizeCalories = function (id) {
        var $recipesData = JSON.parse(localStorage.getItem('allRecipes'));
  
 
    $recipesData.forEach(function (element) {   
       
           
          $('#tfat').text(element.nutrition.fat);
          $('#sfat').text(element.nutrition.saturatedFat);
          $('#chol').text(element.nutrition.cholesterol);
          $('#sod').text(element.nutrition.sodium);
          $('#tcarbs').text(element.nutrition.totalCarbs);
          $('#fib').text(element.nutrition.fibyr);
          $('#sug').text(element.nutrition.sugar);
          $('#pro').text(element.nutrition.protein);
         
            
          
      });
        }
    

})();