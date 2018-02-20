( function () {
    $( "#add-recipe" ).on( "click", function () {
        $( ".dialog" ).css( "display", "block" );
    } );

    // var $select = $( "select" );;
    // var $option = $ ( "#default-category" );
    
    $( "#close-recipe-add" ).on( "click", function () {
        $( ".dialog" ).css( "display", "none" );
        $( "select" ).val( $( "#default-category" ).val() );
        $( ".dialog" ).find( "input:text" ).val( "" );
        $( ".dialog" ).find( "textarea" ).val( "" );
        $( "#preview" ).attr( "src", "" );
    });

    $( "#meal-img-url" ).on( "input", function () {
        $( "#preview" ).attr( "src", $(this).val());
    } );

} )();