let buildUserCollection = function(id, image){
    let html =`
            <div class="col-md-2" id="${id}">
            <div class="card"">
            <img class="card-img-top" src=${image} alt="Card image cap">
            <button type="button" class="btn btn-danger btn-primary btn-small top-right">Delete</button>
            <div class="card-block">
                <a href="#" class="episode">0</a>
            </div>  
            </div>
            </div>`;
    return html;
};