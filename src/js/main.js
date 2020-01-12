import $ from 'jquery';
import Swiper from 'swiper';

$(document).ready(function(){
    $('.reg__item').on('click', function(){
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active').find('.reg__content').stop(true).slideUp();
        $(this).find('.reg__content').stop(true).slideToggle();
    });

    let slider = new Swiper('.reviews__slider', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        speed: 700,
        pagination: {
            el: '.reviews__slider-nav',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            prevEl: '.reviews__slider-pag-item--prev',
            nextEl: '.reviews__slider-pag-item--next'
        },
    });

    function openMenu(){
        $('.header').toggleClass('active');
        $('.m-menu').toggleClass('active');
        $('.header__burger').toggleClass('active');
    }
    function closeMenu(){
        $('.header').removeClass('active');
        $('.m-menu').removeClass('active');
        $('.header__burger').removeClass('active');     
    }
    $('.form__icon').on('click', function(){
        $(this).siblings().focus();
    });

    $('.header__burger').on('click', openMenu);

    $('.js-open-popup').on('click', function(e){
        e.preventDefault();
        let id = $(this).attr('data-id');
        $('.popup__wrap#'+id).fadeIn();
        $('.overlay').fadeIn();
        $('body').addClass('fix');
    });
    $('.popup .close').on('click', function(){
        $('.popup__wrap').fadeOut();
        $('.overlay').fadeOut();
        $('body').removeClass('fix');
        $('.popup__form').slideUp();
    });
    $('.js-open-popup-form').on('click', function(e){
        e.preventDefault();
        $('.popup__form').slideToggle();
        $('.popup__wrap').animate({
            scrollTop: $(window).scrollTop() + $(window).height()
        },500)
    });

    $('a[href^="#"]').on('click', function(e){
        e.preventDefault();
        closeMenu();
        let target = $(this.getAttribute('href'));
        $('html,body').animate({
            scrollTop: target.offset().top - 100
        }, 1000);
    });

    $('.js-privacy').on('click', function(e){
        e.preventDefault();
        $('.popup__privacy').fadeIn();
        $('.overlay').fadeIn();
        $('body').addClass('fix');
    })

    $('.js-call').on('click', function(e){
        e.preventDefault();
        $('.popup__call').fadeIn();
        $('.overlay').fadeIn();
        $('body').addClass('fix');
    })
});