const item = $(".catalog__link");

let content = $('.dropdown-content');
$('.more-content__img').on('click', function () {
    $(this).toggleClass('more-content__img--active');
    content.toggleClass('dropdown-content--show');
})

let categories = $('.category-dropdown__shadow');

$('.category-dropdown').on('click', function () {
    $(this).toggleClass('category-dropdown--show');
});

let screenWidth = $(window).width(); 

if(screenWidth < 1200) {
    $(item).on('click', function () {
        $(this).next().toggleClass('dropdown-catalog--show');
    })

    $('.mob-control__back').on('click', function () {
        $('.dropdown-catalog').removeClass('dropdown-catalog--show');
    })

    $(document).click(function (e) {
        let container = $(".dropdown-catalog");

        if (!container.is(e.target) && !item.is(e.target)
            && container.has(e.target).length === 0) {
            container.removeClass('dropdown-catalog--show');
        };
    });

}  
const searchButton = $('.search__icon-block'),
      searchField = $('.search__field'),
      searchBlock = $('.search');

if (screenWidth  > 767 && screenWidth < 1200 && !searchField.is('.search__field--show')) {
    console.log(searchButton);
        searchButton.on('click', function() {
            searchBlock.addClass('search--show');
        });
}
 
// search animation

let body, inputModal;
body = document.querySelector('body');
inputModal = document.querySelectorAll('.search__input');

if (!!inputModal) {
    inputModal.forEach(function (el) {
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

