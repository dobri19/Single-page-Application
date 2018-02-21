const todo = function() {

    $(configuration.mainDiv).off();

    const html = function(todo) {
        const isDone = todo.status ? 'Done' : 'Not done';

        return `<div class="row">
      <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${todo.title}</span>
              <p>${todo.description}</p>
            </div>
            <div class="card-action">
              <a>${isDone}</a>
            </div>
          </div>
        </div>
      </div>`;
    };

    return {
        html
    };
};
