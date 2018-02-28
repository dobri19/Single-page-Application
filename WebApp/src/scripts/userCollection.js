let buildUserCollection = function(id, image, episode){
    let html =`
    <div class="col-md-2" id="${id}">
    <div class="card"">
    <img class="card-img-top" src=${image} alt="Card image cap">
    <button type="button" class="btn btn-danger btn-primary btn-small top-right">Delete</button>
    <div class="card-block">
        <div class="episode">Episode:</div><div class="episode w-35"><a href="#" class="episodeInput">${episode}</a></div>
    </div> 
    <br>
    </div>
    </div>`;
    return html;
};