let build = (function() {

    let buildResult = function(id, image, title, year, plot, inCollection) {
        
        let htmlTrue =
            `<div class="row justify-content-md-center table " id="${id}">
                 <div class="col" style="padding:15px; 0 15px 15px box-shadow: 10px 10px"><img src="${image}"></div>
        <div class="col-8">
            <div class="row"></div>
                <ul style="padding-top: 30px">
                    <li><h1>${title}</h1></li>
                    <li style="padding:15px 0px 15px 0px"><h5>${year}</h5></li>
                    <li>${plot}</li>
                </ul>
                <button type="button" class="float-right btn btn-success bottom-right searchAdd" style="margin: 0px 10px 10px 0">Add</button>
            </div>
        </div>`;

        let htmlFalse =
            `<div class="row justify-content-md-center table " id="${id}">
        <div class="col" style="padding:15px; 0 15px 15px box-shadow: 10px 10px"><img src="${image}"></div>
        <div class="col-8">
        <div class="row"></div>
            <ul>
            <li><h1>${title}</h1></li>
            <li style="padding:15px 0px 15px 0px"><h5>${year}</h5></li>
            <li>${plot}</li>
            </ul>
            <button style="margin: 0px 10px 10px 0" type="button" class="float-right btn btn-secondary bottom-right searchAdd" disabled>Already Added</button>
        </div>
        </div>`;

        if (inCollection === false) {
            return htmlFalse;
        }

        return htmlTrue;
    };

    return {
        buildResult: buildResult
    };

})();
