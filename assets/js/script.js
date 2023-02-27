var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString("I'm Rayhan Al Shorif")
    .pauseFor(2500)
    .deleteAll()
    .typeString('Full Stack Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Working In Laravel Framework')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Working In React Js')
    .pauseFor(2500)
    .start();


$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if(scroll> 900){
        console.log(scroll);
        $(".knowMeMore").addClass("animate__animated animate__bounce");
    }
    // var div_top = $('.search-view');
    // var stopPoint = div_top.offset().top + div_top.height()
    // if (scroll >= 200 && scroll <= stopPoint) {
    //     console.log("scroll %d and stopPoint%d", scroll,stopPoint);
    // } else {
    //     console.log("Else scroll %d and stopPoint%d", scroll, stopPoint);
    // }
});