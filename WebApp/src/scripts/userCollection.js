let buildUserCollection = function(id, image){
    let html =`
            <div class="col-md-2" id="${id}">
            <div class="card"">
            <img class="card-img-top" src=${image} alt="Card image cap">
            <div class="card-block">
                    <p>E: </p><p>S: </p>
                    <button type="button" class="btn btn-danger btn-primary btn-small float-right">Delete</button>
            </div>  
            </div>
            </div>`;
    return html;
};