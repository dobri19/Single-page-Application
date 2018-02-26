
$(`.card`).mouseenter(function(){
    console.log(this);
    let children = this.children.item(1).children.item(2);
    $(children).show();
})

$(`.card`).mouseleave(function(){
    $(`.btn-small`).hide();
})