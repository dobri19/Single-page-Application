// Better to be done with IIFE
function init(db) {
    const data = db();

    const listTodos = function() {
        $('#results').html(data.todos.map(x => {
            const todoController = todo();

            return todoController.html(x);
        }));
    };

    listTodos();

    $('#add-btn').on('click', function() {
        const addTodoController = addTodo();
        $('#results').html(
            addTodoController.html()
        );
    });

    $('#list-btn').on('click', listTodos);
};

init(databaseFunction);
