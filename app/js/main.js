$(function () {
    
   
    

    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });
    $('.header__btn-menu').on('click', function () {
        
        $('.header__box').toggleClass('active');
    });

    $('.product-one__tabs .tab').on('click', function(event) {
        console.log("shbdjhv")
        var id = $(this).attr('data-id');
            $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.product-one__tabs .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
    });

    $('.has-sub').on('click', function() {
        $(this).toggleClass('tap active-color');

    });
    $('.time').on('click', function() {
        $(this).toggleClass('tap active-color');
    });


    $('.slider').slick({
        // dots:true,
        // arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });


    var mixer = mixitup('.products__inner-wrapper');
    
});