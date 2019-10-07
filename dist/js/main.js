$(document).ready(function(){
  $('.slider-three').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    navContainer: '.thried_slider .custom-nav',
    navText: [
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="49" height="40" viewBox="0 0 49 40"><image data-name="Vector Smart Object copy 10" width="49" height="40" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAoCAYAAABXRRJPAAAGRUlEQVRYhdWZC5CVYxjHf2dXqzua7bqJWpc1hkwoKpcyIZfNktpkUokowsi9XCI1uaRGrWtIua1bpEZyqyiXQWkqsjMpW1JouyF2M8/M/5t5e+f9Tnv51uQ/c+Y753vO957n+n+e9z2pYW1IEvWBZ4CewKHAb4muHoOMBNdqBnwA9AEaAe0T1TQNkjIiD/gM6AQs170jEtc2BkkYcTqwWOkzHjhT9/MS1zYG+9Xw+QHAU0AKGAI8rfvrgSNrReMAqhuJDHn9OeAP4BzHAEupxvt6TTQA3gBuAdYAJwPvSdYVeBZ4GWgFtEhY3yCqaoQR8iIgH1gInAiskKw7UAwUAq/q3tm1qHtK+rSsSk2cBLwJNAemAVcDuySzvjATKACWqiYMVyjldldT0UwgR6Rhr7aqtTyxn2XFzsoaMQh4TEQwEnjIkZ0FvA5cCnyse5uAH4HOwEvAfcBKPd9QPcVS7SDgQOfa1DwrR+Xoe3UC+uwEfgBygay9GWHyicA1QBlwCTDHkXdXfdwAvOY9+wVwiJpfn0o6K8JmOWKtCGISsFqKlziRtveN0hmRrRy3PvCd6uB7R95JBkxQlHyY8fWAblrHWOwvoALYCmxTOl6nVymwUcr/o7WeF4VPC6xvjm1nxsUZcZzy3zz5tlJlqyM/FpgHvAjcHbPGahXeZU6h+ygCbgbeCciuVyaEDDhDWVEObAmxkzWwT2WA5fIFngFWUO8D84HhMcodICOL0xhwpSJl9eSjm4hjaOC5wxSdASr8LW4ksoCHpZiF+kKliwsrundVpJEn4gxYJSeEYP3kRlG0jzYO0231hNZE3wJuUt3gslOOCrOTFCxQHfjKzRUz5Cu/fdRVGhqHD46h1tZqhn0DSpo+LwBTNFC6SKlGFii6Oa4R3USDzRR++/Ht3gJZUi5bHXpLQDkL7QzgKOB4FXLISIvudDVNH2P0eXxANgo4WMbjUO8uM2K2NjOjgbEB76UU3g7AKcC6wA+gVMwX7ZbGfKdIxt4ZkNn0O0yk4qdpTxV6R+BPT1aeIa+gggmF3yi0l2pkWYxylqMjgGtjPIwU7Af0B/72ZM2lxwjNYy5y5cTB6gsRGuu6LUONaqmo8HJvgaHq0EPESCH0k6FPAo/HfKcL8IjWWhmQ23NLHIdGqK/0Mzaa5cky3DcWnotVB48qn9HwNkUp5i8e4QSN4EvUfEJoqUKcp/V8WGS6iHJ9WBP9Fbjdu59S9PewZrXCVVe8bc3kFf346BjlWsg7ZUq1XYHv1HHGkUGBdM2RYZZqv3iyq6RHodPBI9yqGWwPIxAzjRNPWyP7FhgYUyeZ6tZNZcCGGEMniM0Gapzw8YTTFF1YAT+gDNnoyXqJBEZGjvLHjtEaKc5VdHwmiDBWM9Vw7a9DKBCjPKgG6aNQqXu0dz9bGXCHJgcXx2gY7OpsrRv4Y0e5cnSFCn1U4Md7aN6xYpsaY0A7zTxLAvmMmGWiUsZyPkIUYWtok71nmqhXmeN+cgWh2alMvGwpcq+MidBUm5xFaeam/Z30KAzQKVp3vpRycY9qzZ+ZMtWQpzvD4k5d68VNsWuVUgvEPr9rZpmkAu4dU8how9RBKdFRg+QmzTqb1cwKlLYuzhfD2Ty1w5ON0zw3xrkXGdEg3X7iaxXRXHlhsj53DjBJhAJFaI4M7e3JKxSZMq25XoVbqnosUh3WcSLYV32mh0cy0WjUsDJnsfmiSTP4tpi5BtHlMrHaXcBHaoAztDdu6+yT2+o0JDNmrd1y1DoVvqXQV6qFUr3W6jsllT1Q7q983K4zpk88eUo5nqdUytZx5tQ0tZOpRmhDXRtRe2s5o7VeLdIYGqGksgcFM3WdrjOm83R4HGGYQn6q0qOe7jdKs2a5PGuvOJrO0FwVGddKRrdyjF1clSMb15DZ2vzb9XA1Jpu7PveeqekxaYVYcoMOHoKo6o/MVEoVix6HiG0mOUa6iGOwRFGdY8xZOmvaoT9UNqrgXWTpfXUPzaqE6h4ofwicBvwM3C9jshx5E11D89I+Y4ThGw13yzXgzVNHR1tdZGSto6Z/sqxR85utyHypjpsr+fq9PJ8IkvinaJvOpiaI6xc689aq/4sRiPPt/4qLxEjtde8/MaKmPO7DdoU2dtjwZ3//xu1HkgPwLyG4d90Ji3w+AAAAAElFTkSuQmCC"/></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="49" height="40" viewBox="0 0 49 40"><image data-name="Vector Smart Object" width="49" height="40" xlink:href="data:img/png;base64,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"/></svg>'],
    responsive:{
      0:{
        items: 1
      },
      600:{
        items: 1,
        margin: 0
      },
      1200:{
        items: 4
      }
    }
  });
  $('.slider-two').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    navContainer: '.second_slider .custom-nav',
    navText: [
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="49" height="40" viewBox="0 0 49 40"><image data-name="Vector Smart Object copy 10" width="49" height="40" xlink:href="data:img/png;base64,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"/></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="49" height="40" viewBox="0 0 49 40"><image data-name="Vector Smart Object" width="49" height="40" xlink:href="data:img/png;base64,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"/></svg>'],
    responsive:{
      0:{
        items: 1
      },
      600:{
        items: 1,
        margin: 0
      },
      1200:{
        items: 4
      }
    }
  });
  $('.slider-one').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    navContainer: '.first_slider .custom-nav',
    navText: [
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="49" height="40" viewBox="0 0 49 40"><image data-name="Vector Smart Object copy 10" width="49" height="40" xlink:href="data:img/png;base64,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"/></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="49" height="40" viewBox="0 0 49 40"><image data-name="Vector Smart Object" width="49" height="40" xlink:href="data:img/png;base64,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"/></svg>'],
    responsive:{
      0:{
        items: 1
      },
      600:{
        items: 1,
        margin: 0
      },
      1200:{
        items: 4
      }
    }
  });
  $(".menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });
  $(".opTop").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });
});
//МОДАЛЬНОЕ ОКНО
$('#open_modal, .pop').click(function(){
  $('#order_cake').css({
    'display': 'flex'
  });
});
$('#close').click(function(){
  $('#order_cake').css({
    'display': 'none'
  });
});

$('.open_menu').click(function(){
  $('.menu').slideToggle(200);
  $('.open_menu').find('hr').toggleClass('white_menu');
});

// var left = 0;
// var list1 = $('.polosa')[0];
// var list2 = $('.polosa')[1];
// var list3 = $('.polosa')[2];
// function moveLeftFirst() {
//   left -= 264;
//   if (left < -1848) {
//     left = 0;
//   }
//   list1.style.left = left + 'px';
//   list2.style.left = left + 'px';
//   list3.style.left = left + 'px';
// }
// function moveRightFirst() {
//   left += 264;
//   if (left >= 0) {
//     left = 0;
//   }
//   list1.style.left = left + 'px';
//   list2.style.left = left + 'px';
//   list3.style.left = left + 'px';
// }
// $('#right_click').click(function() {
//   clearInterval(interval);
//   moveLeftFirst();
// });
// $('#left_click').click(function() {
//   clearInterval(interval);
//   moveRightFirst();
// });
// $('#left_click__2').click(function() {
//   clearInterval(interval);
//   moveRightFirst();
// });
// $('#right_click__2').click(function() {
//   clearInterval(interval);
//   moveLeftFirst();
// });
// $('#left_click__3').click(function() {
//   clearInterval(interval);
//   moveRightFirst();
// });
// $('#right_click__3').click(function() {
//   clearInterval(interval);
//   moveLeftFirst();
// });
// var interval = setInterval(moveLeftFirst, 3000);
// show map
var ceh = $('.ceh');
var cehTop = ceh.offset().top;
$(window).bind('scroll', function() {
  var windowTop = $(this).scrollTop();
  if(windowTop > cehTop){
    $('#map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.3351863777484!2d76.8336161153306!3d43.24439648678707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369e5c31e3db5%3A0x3755415992310b45!2z0JDQl9CY0K8g0J_QkNCg0Jo!5e0!3m2!1sru!2skz!4v1568144905576!5m2!1sru!2skz" width="600" height="450" style="border:0;" allowfullscreen=""></iframe>');
    $(window).unbind('scroll');
  }
})
//PARALLAX
$(window).scroll(function(){
  var st = $(this).scrollTop();
  $(".svgs svg").css({
    "transform": "translate(0%, -" + st / 3 + "%"
  })
  $(".bulki").css({
    "transform": "translate(0%, -" + st / 20 + '%'
  });
});
//E-mail Ajax Send
$("form").submit(function() { //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "app/php/mail.php", //Change
    data: th.serialize()
  }).done(function() {
    $('.output').show(500);
    setTimeout(function() {
      $('.output').hide(500);
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });
  return false;
});