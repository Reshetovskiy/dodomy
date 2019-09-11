$('.language__toggle').on('click', function () {
    $('.change-language').slideToggle(300);
})

$('.burger').on('click', function () {
    $('.modal-menu').toggleClass('modal-menu--show');
})

$('.modal-menu__close').on('click', function () {
    $('.modal-menu').removeClass('modal-menu--show');
})

$(document).click(function (e) {
    let Langitem = $(".location__language");
    let langDrop = $(".language__toggle");
    let langArrow = $(".language__arrow");
    
    if (!langDrop.is(e.target) && !Langitem.is(e.target) && !langArrow.is(e.target)) {
        $('.change-language').slideUp(300);
    };
 })