$(`#dynamic`).on(`click`, `.episode`, function(){
    console.log(this);
    $(this).replaceWith(`<div class="episode">Episode: </div>
                        <div class="episodeInput w-35 float-left"><input type="text" class="form-control episodeInput"></div>`)
});