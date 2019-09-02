
var content = $('.dropdown-content');
$('.more-content__img').on('click', function () {

    $(this).toggleClass('more-content__img--active');
    content.toggleClass('dropdown-content--show');
})

var categories = $('.category-dropdown__shadow');

$('.category-dropdown').on('click', function () {
    $(this).toggleClass('category-dropdown--show');
});

var screenWidth = $(window).width(); 

if(screenWidth < 1200) {
    $('.catalog__link').on('click', function () {
        $(this).next().toggleClass('dropdown-catalog--show');
    })

    $('.mob-control__back').on('click', function () {
        $('.dropdown-catalog').removeClass('dropdown-catalog--show');
    })


    $(document).click(function (e) {
        var item = $(".catalog__link");
        var container = $(".dropdown-catalog");

        if (!container.is(e.target) && !item.is(e.target)
            && container.has(e.target).length === 0) {
            container.removeClass('dropdown-catalog--show');
        };
    });
} else  {

    $('.catalog__link').on('mouseover', function () {
        console.log('dkfgv');
        $(this).next().addClass('dropdown-catalog--show');
    })
    
    $(document).mouseout(function (e) {
       var item = $(".catalog__link");
       var container = $(".dropdown-catalog");
   
       if (!container.is(e.target) && !item.is(e.target)
           && container.has(e.target).length === 0) {
           container.removeClass('dropdown-catalog--show');
       };
    })
}

// search animation

let body, inputModal;
body = document.querySelector('body');
inputModal = document.querySelectorAll('.search__input');

if (!!inputModal) {
    inputModal.forEach(function (el) {
        console.log('fvm');
        el.addEventListener('focus', function () {
            this.parentNode.classList.add('search__field--focus');
        })
    })

    inputModal.forEach(function (el) {
        el.addEventListener('blur', function () {
            if (this.value.length == 0) {
                this.parentNode.classList.remove('search__field--focus');
            }
        })
    })
}

