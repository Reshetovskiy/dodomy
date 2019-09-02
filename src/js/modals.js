$('.language__toggle').on('click', function () {
    $('.change-language').slideToggle(300);
})

$('.burger').on('click', function () {
    $('.modal-menu').toggleClass('modal-menu--show');
})

$('.modal-menu__close').on('click', function () {
    $('.modal-menu').removeClass('modal-menu--show');
})
