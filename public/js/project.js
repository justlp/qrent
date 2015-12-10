$(function () {

    (function () {
        var dropdownBtn = $('.js-btn-dropdown'),
            dropdownList = $('.js-dropdown-list');

        dropdownBtn.on('click', function () {
            dropdownList.toggleClass('open');

            if (dropdownList.hasClass('open')) {
                dropdownBtn.find('.fa').removeClass('fa-angle-down');
                dropdownBtn.find('.fa').addClass('fa-angle-up');
            } else {
                dropdownBtn.find('.fa').removeClass('fa-angle-up');
                dropdownBtn.find('.fa').addClass('fa-angle-down');
            }
        });

    })();

    (function () {
        var tabBtn = $('.js-tab'),
            tabContent = $('.js-tab-content');

        tabBtn.on('click', function () {
            var activeTabBtnIndex = $(this).index();

            tabBtn.removeClass('active');
            $(this).addClass('active');

            tabContent.removeClass('active');
            $(tabContent[activeTabBtnIndex]).addClass('active')
        });
    })();

    $(".chosen-select").chosen({
        disable_search_threshold: 10,
        width: "210px"
    });

    $('.js-checker-input').on('change', function () {
        var checkedBtn = $(this).closest('.js-checker-btn'),
            carReturnBlock = $('.js-car-return-block');

        if ($(this).prop('checked')) {
            checkedBtn.addClass('checked');
            carReturnBlock.show();
        } else {
            checkedBtn.removeClass('checked');
            carReturnBlock.hide();
        }
    }).trigger('change');

    $('.js-toggle-additional').on('click', function () {
        var $carInfo = $(this).siblings('.car-property');
        $carInfo.toggleClass('open')
    });

    $('.js-simple-slider').bxSlider({
        pager: false
    });

    $('.js-slider-car').bxSlider({
        pager: false,
        hideControlOnEnd: true,
        controls: true,
        slideMargin: 5,
        minSlides: 1,
        maxSlides: 5,
        slideWidth: 220,
        infiniteLoop: false,
        adaptiveHeight: true
    });

    $('.js-slider-testimonial').bxSlider({
        pager: false,
        hideControlOnEnd: true,
        controls: true,
        slideMargin: 20,
        minSlides: 1,
        maxSlides: 3,
        slideWidth: 295
    });

    $('.js-car-list-small').bxSlider({
        pager: false,
        hideControlOnEnd: true,
        controls: true,
        slideWidth: 237,
        infiniteLoop: false
    });


    

    $('.js-popup-wrap').on('click', function (e) {
       $(this).removeClass('open')
    });
    $('.js-popup').on('click', function (e) {
        e.stopPropagation();
    });
    $('.js-popup-close').on('click', function () {
        $('.js-popup-wrap').removeClass('open')
    });


    $('.js-chat').on('click', function () {
        $(this).toggleClass('open')
    });

    $('.js-entrance').on('click', function () {
        $('.js-popup-wrap').addClass('open');
    });


    $('.js-edit-car-order').on('click', function () {
        $('.js-popup-wrap').addClass('open');
        $('.js-edit-card-popup').hide();
        $('.js-edit-car-order-popup').show();
    });
    $('.js-edit-card-order').on('click', function () {
        $('.js-popup-wrap').addClass('open');
        $('.js-edit-car-order-popup').hide();
        $('.js-edit-card-popup').show();
    });
});