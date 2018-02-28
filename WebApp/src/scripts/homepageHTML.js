let home = (function() {

    let homepageHTML = function() {

        return `<div class="row">
        <div class="col-md-10 offset-1">
            <div id="demo" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>

                <!-- The slideshow -->
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./images/1trans.jpg">
                    </div>
                    <div class="carousel-item">
                        <img src="./images/2avengers.jpg">
                    </div>
                    <div class="carousel-item">
                        <img src="./images/3hobbit.jpg">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>

            </div>
        </div>`;
    };

    return {
        homepageHTML: homepageHTML
    };

})();
