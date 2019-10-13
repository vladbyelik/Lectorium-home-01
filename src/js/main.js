$('.menu-btn, .menu-nav').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('menu-btn-active');
        $('.menu-nav').toggleClass('menu-nav-active');
});


$(function(){
    $('.height').height($('.height').width()/3);

    $(window).resize(function(){
        $('.height').height($('.height').width()/3);
    });
});


let arrow = document.getElementsByClassName('hover-arrow');
let list = document.getElementsByClassName('list');
let link = document.getElementsByClassName('link');

$(function () {
    for (let i =0; i<arrow.length; i++) {
        $(list[i]).on('mouseover mouseout', function(){
            $(arrow[i]).toggleClass('hover');
            $(link[i]).toggleClass('hover-color');
        });
    }
});
