// Toggle class menu
$(function () {
    $('.menu').on('click', function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.ss-menu1').addClass('visible1');
            $('.ss-menu2').addClass('visible2');
            $('.ss-menu3').addClass('visible3');
            $('.ss-menu4').addClass('visible4');
            $('.ss-menu5').addClass('visible5');
        } else {
            $('.ss-menu1').removeClass('visible1');
            $('.ss-menu2').removeClass('visible2');
            $('.ss-menu3').removeClass('visible3');
            $('.ss-menu4').removeClass('visible4');
            $('.ss-menu5').removeClass('visible5');
        }
    })
})
$(function () {
    $('.ss-menu').on('click', function () {
      $('.menu').removeClass('active');
      $('.ss-menu1').removeClass('visible1');
      $('.ss-menu2').removeClass('visible2');
      $('.ss-menu3').removeClass('visible3');
      $('.ss-menu4').removeClass('visible4');
      $('.ss-menu5').removeClass('visible5');
    })
})
$(function () {
    $(window).on('scroll', function () {
        if ($('.menu').hasClass('active')) {
          $('.menu').removeClass('active');
          $('.ss-menu1').removeClass('visible1');
          $('.ss-menu2').removeClass('visible2');
          $('.ss-menu3').removeClass('visible3');
          $('.ss-menu4').removeClass('visible4');
          $('.ss-menu5').removeClass('visible5');
        }
    })
})

// Parallax effect and gsap
$(function () {
  if (!window.location.pathname.match("mentions")) {
    $('.rellax').css('transform', 'translateX(-50%)');
    var rellax = new Rellax('.rellax');
  }
})


// Manage vidéo
$(function () {
    $('video').on('click', function(event) {
      event.preventDefault();
      document.getElementById('tucoVideo').play();
    });
})


// Animations on scroll
$(function () {
    $(window).on('scroll', function () {
        let sizePage = $(window).height();
        let trigger = 100;
        // Animation en Y
        let element = document.getElementsByClassName('animatableY');
        for (var unit of element) {
          if (unit.getBoundingClientRect().top + trigger <= sizePage) {
            unit.classList.add('showed');
          }
        }

        // Animation en X
        let elementh2 = document.getElementsByClassName('animatableX');
        for (var unit of elementh2) {
          if (unit.getBoundingClientRect().top + trigger <= sizePage) {
            unit.classList.add('showed');
          }
        }

        // Animation opacity
        let elementOpacity = document.getElementsByClassName('animatableOpacity');
        for (var unit of elementOpacity) {
          if (unit.getBoundingClientRect().top + trigger <= sizePage) {
            unit.classList.add('showed');
          }
        }
    })
})

//Lazyload
$(function () {
  if (!window.location.pathname.match("mentions")) {
    lazyload();
  }
})

// resize reload
$(function () {
  let initialWidth = $(window).innerWidth();
  $(window).on('resize', function () {
    let newWidth = $(window).innerWidth();
    if (initialWidth != newWidth) {
      document.location.reload(true);
    }
  })
})

// Manage scroll up button
$(function () {
    let ecran = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      $(window).on('scroll', function () {
        let scrollNow = $(window).scrollTop();
        $(window).on('scroll', function functionName() {
          if (scrollNow > 600 && scrollNow > $(window).scrollTop()) {
            if ($('#upArrow').is(":hidden")) {
              $('#upArrow').show();
            }
          } else {
            $('#upArrow').hide();
          }
        })
        $('#upArrow').on('click', function () {
            $(window).scrollTop(0);
        })
      })
})

// Delete scroll tag on scroll down
$(function () {
    $(window).on('scroll', function () {
        let topPage = $(window).scrollTop();
        if (topPage >= 150) {
          $('#scrollDown').hide();
        } else {
          $('#scrollDown').show();
        }
    })
})
// Manage tag scroll down
$(function () {
    $('#scrollDown').on('click', function() {
      window.location.href = "#nextShow";
    });
})

// Locations
$(function () {
    $(".card").on('click', () => {window.location.href = "https://www.instagram.com/birkanavcimusic"});
})
// Location socials
$(function () {
    $('.twitter').on('click', function(event) {
      event.preventDefault();
      window.location.href = "https://twitter.com/avcibirkan";
    });
    $('.instagram').on('click', function(event) {
      event.preventDefault();
      window.location.href = "https://www.instagram.com/birkanavcimusic";
    });
    $('.mail').on('click', function(event) {
      event.preventDefault();
      window.location.href = "mailto:info@birkanavci.com";
    });
})
