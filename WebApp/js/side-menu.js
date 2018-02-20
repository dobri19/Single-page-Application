$(function () {
  $(document).mouseup(function(e) {  
  
    var container = $("#side-menu");   
    var rowWindow = $(".recipesShowModal");
    var win = $("#meal-window");
    var recipes = $(".recipesShowModal"); 

    $('#nav-overlay').click(function () {  
      $("#side-menu").toggle();
    });     
  

    if (!container.is(e.target) && container.has(e.target).length === 0 && !win.is(e.target) && win.has(e.target).length ===0 && !recipes.is(e.target) && recipes.has(e.target).length ===0)  {             

        
      $( "#side-menu" ).css( "display", "none" );  
      
    } 
  });
  
  $(".menu li").click(function () {
    moveTitle();

  });

  $(".addRecipeBtn").click(function () {
    moveTitle();

  });

  window.modifyTitle = {moveTitle};
});