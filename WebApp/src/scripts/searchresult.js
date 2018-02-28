let buildResult = function(id, image, title, year, plot, inCollection) {
    
    let htmlTrue =
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
    let htmlFalse =
        `<div class="row justify-content-md-center table " id="${id}">
        <div class="col"><img src="${image}"></div>
        <div class="col-8">
        <div class="row"></div>
            <ul>
                <li>${title}</li>
                <li>${year}</li>
                <li>${plot}</li>
            </ul>
            <button type="button" class="float-right btn btn-secondary bottom-right searchAdd" disabled>Already Added</button>
        </div>
    </div>`;
    if (inCollection == false) {
        return htmlFalse;
    } else {
        return htmlTrue;
    }
};
