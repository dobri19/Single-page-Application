let buildResult = function(id, image, title, year, plot){
    let html =
    `<div class="row justify-content-md-center table " id="${id}">
        <div class="col"><img src="${image}"></div>
        <div class="col-8">
        <div class="row"></div>
            <ul>
                <li>${title}</li>
                <li>${year}</li>
                <li>${plot}</li>
            </ul>
            <button type="button" class="float-right btn btn-success bottom-right searchAdd">Add</button>
        </div>
    </div>`;
    return html;
};