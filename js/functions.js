(function ($) {
  $(document).ready(function () {
    $(".of-iconmntop").click(function () {
      $(".of-menutop").toggleClass("of-mnshow");
    });

    $(".of-search").click(function () {
      $(".of-searchbox").show(200);
    });

    $(".of-closesearch").click(function () {
      $(".of-searchbox").hide(200);
    });

    $(document).on("click", "[toscroll]", function (e) {
      e.preventDefault();
      var link = $(this).attr("toscroll");
      if ($(link).length > 0) {
        var posi = $(link).offset().top - 50;
        $("body,html").animate(
          {
            scrollTop: posi,
          },
          1000
        );
      }
    });

    //rule
    $(".js--more-rule").click(function () {
      $(".st-rule__viewmore").hide();
      $(".st-rule__content").css("height", "auto");
    });
    $('.js--more-shop').on('click', function () {
      $('.st-experience .list-shop').addClass('list-full');
      $('.st-experience .view-more').hide();
    })
    $(".fs-header__top__logo .fs-header-icon i").on("click", function () {
      $("html").addClass("noscroll");
    });
    $(" .fs-menuleft-block .fs-menuleft-top .menu-icon").on("click", function () {
      $("html").removeClass("noscroll");
    });

    // before after slide
    $(".beforeAfter").beforeAfter({
      movable: true,
      clickMove: true,
      position: 60,
      separatorColor: "#fafafa",
      bulletColor: "#fafafa",
      onMoveStart: function (e) {
        // console.log(event.target);
      },
      onMoving: function () {
        // console.log(event.target);
      },
      onMoveEnd: function () {
        // console.log(event.target);
      },
    });
    //menu
    // cache the navigation links
    var $navigationLinks = $("#navigation > ul > li > a");
    // cache (in reversed order) the sections
    var $sections = $($(".laptop-rtx").get().reverse());

    // map each section id to their corresponding navigation link
    var sectionIdTonavigationLink = {};
    $sections.each(function () {
      var id = $(this).attr("id");
      sectionIdTonavigationLink[id] = $(
        "#navigation > ul > li > a[href=\\#" + id + "]"
      );
    });

    // throttle function, enforces a minimum time interval
    function throttle(fn, interval) {
      var lastCall, timeoutId;
      return function () {
        var now = new Date().getTime();
        if (lastCall && now < lastCall + interval) {
          // if we are inside the interval we wait
          clearTimeout(timeoutId);
          timeoutId = setTimeout(function () {
            lastCall = now;
            fn.call();
          }, interval - (now - lastCall));
        } else {
          // otherwise, we directly call the function
          lastCall = now;
          fn.call();
        }
      };
    }

    function highlightNavigation() {
      // get the current vertical position of the scroll bar
      var scrollPosition = $(window).scrollTop();

      // iterate the sections
      $sections.each(function () {
        var currentSection = $(this);
        // get the position of the section
        var sectionTop = currentSection.offset().top;

        // if the user has scrolled over the top of the section
        if (scrollPosition >= sectionTop - 70) {
          // get the section id
          var id = currentSection.attr("id");
          // get the corresponding navigation link
          var $navigationLink = sectionIdTonavigationLink[id];

          // if the link is not active
          if (!$navigationLink.hasClass("active")) {
            // remove .active class from all the links

            $navigationLinks.removeClass("active");
            // add .active class to the current link
            $navigationLink.addClass("active");
          }
          // we have found our section, so we return false to exit the each loop
          return false;
        }
      });
    }
    $(window).scroll(throttle(highlightNavigation, 100));
  });

  //select-color
  var colorItem = $('.js-select-color');
  colorItem.click(function () {
    colorItem.removeClass('active');
    $(this).addClass('active');

    const dataTab = $(this).attr('data-tab');
    // console.log(dataTab);

    $('.product').hide();
    $(`#${dataTab}`).show();
  });

  // modal
  $(".js--open-modal").each(function () {
    var btn = $(this).find(".btn-more");
    btn.click(function () {
      var dataTaget = $(this).attr("data-target");
      $("." + dataTaget).show();
      $("html").addClass("no-scroll");
    });
  });
  $(".js--close-modal").click(function () {
    $(".popup-modal").hide();
    $("html").removeClass("no-scroll");
  });

  //readmore
  var btnReadmore = $(".js-readmore");
  var card = $(".s-features__card");
  card.slice(0, 3).show();

  btnReadmore.click(function () {
    var wrapper = $(".s-features__wrapper");
    console.log(123);
    wrapper.toggleClass("active");
    $(this).toggleClass("active");

    if (wrapper.hasClass("active")) {
      card.show();
    } else {
      card.hide();
      card.slice(0, 3).show();
    }
  });

})(window.jQuery);
