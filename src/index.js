import "jquery"
import "popper.js"

import "./style.css"

$(document).ready(function () {
    $('.form__close').click(function(){
        $('.form').fadeOut(200);
    });
    $('.form-container__open-form').click(function(){
        $('.form').fadeIn(200);
    });
    $('.input-field').focus(function(){
        $('.input-field').parent().removeClass('focus');
        $(this).parent().addClass('focus');

    });
    $('.input-field').keyup(function(){
        var email = $('.form__email input').val();
        var pass = $('.form__password input').val();
        if(email.length != 0){
            var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
            if(email.search(pattern) != 0){
                 $(this).addClass('error');
                 $('.form').removeClass('email-valid');
            } else {
                $(this).removeClass('error');
                 $('.form').addClass('email-valid');
            }
        }
        if($('.form').hasClass('email-valid') && pass.length != 0) {
            $('.form__button').removeClass('disable');
            $('.form__button').removeAttr('disabled');
        } else {
            $('.form__button').addClass('disable');
            $('.form__button').attr('disabled','disabled');
        }
    });
    $('.form__password-visible').click(function(){
        $(this).toggleClass('pass_vis');
        if($(this).hasClass('pass_vis')){
            $('.form__password input').attr('type','text');
        } else {
            $('.form__password input').attr('type','password');
        }
    });
});
