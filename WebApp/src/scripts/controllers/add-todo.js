const addTodo = function() {

    // Make a function here
    $(configuration.mainDiv).off();

    $(configuration.mainDiv).on('click', '.datepicker', function() {
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15, // Creates a dropdown of 15 years to control year,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: false // Close upon selecting a date,
        });
    });

    $('.test').on('click', function() {
        alert('ADD');
    });

    const html = function() {
        return `<div class="row">
                  <form class="col s12">
                  <div class="row">
                      <div class="input-field col s6">
                      <input id="todo-title" type="text" class="validate">
                      <label for="todo-title">Title</label>
                      </div>
                      <div class="input-field col s6">
                      <input id="todo-desc" type="text" class="validate">
                      <label for="todo-desc">Description</label>
                      </div>
                     
                      <input type="text" class="datepicker">
                  </div>
                  </form>
                  </div>`;
    };

    return {
        html
    };
};
