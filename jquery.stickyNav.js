;
(function ($, window, document) {

  'use strict';

  $.fn.stickyNavbar = function (prop) {

    var options = $.extend({
      header: $('.header'),
      stickyPosition: $('.header').outerHeight(true),
      banner: undefined,
      navBar: $('.nav'),
      activeClass: "active",
      attachActiveClassTo: "li",
      animationDuration: 500,
      easing: "swing"
    }, prop);

    var navBarHeight = options.navBar.outerHeight(true);

    var heroHeight = options.banner ? options.banner.outerHeight(true) : 0;

    // collect all the sections for jumping
    var sections = new jQuery();
    options.navBar.find('a').map(function () {
      var id = $(this).attr('href');
      sections = sections.add($(id));
    });

    // because we have header/banner so there is offset for sections
    var sectionsOffset = options.stickyPosition + navBarHeight + 1;

    // the active menu in navigator
    var activeOne;


    function initSecondaryNav() {
      if (options.banner) {
        options.navBar.before('<div class="nav-placeholder"></div>');
        $('.nav-placeholder').css('padding-bottom', navBarHeight + 'px');
      }
      else {
        options.navBar.before('<div class="banner"></div>');
        $('.banner').css('padding-bottom', navBarHeight + 'px');
        $('.banner').css('height', '0px');
        $('.banner').css('z-index', '-9999');
      }


      options.navBar.css('position', 'fixed').css('margin-top', -navBarHeight + 'px');
      scrollCallback();
    }

    function addActiveState(sections) {
      sections.each(function () {
        var top = $(this).offset().top
          , bottom = $(this).outerHeight(true) + top;

        var windowScrollHeight = $(window).scrollTop();

        if (windowScrollHeight > top - sectionsOffset && windowScrollHeight < bottom - sectionsOffset) {
          if (activeOne) {
            activeOne.removeClass(options.activeClass);
          }
          if (options.attachActiveClassTo === "a") {
            activeOne = options.navBar.find('li a[href~="#' + this.id + '"]');
          } else {
            activeOne = options.navBar.find('li a[href~="#' + this.id + '"]').parents('li');
          }
          activeOne.addClass(options.activeClass);
        }
      });
    }

    function positionNavBar() {
      if ($(window).scrollTop() >= 0) {
        $(window).scrollTop() < heroHeight
          ? options.navBar.css('margin-top', -navBarHeight - $(window).scrollTop() + 'px')
          : options.navBar.css('margin-top', -navBarHeight - heroHeight + 'px');
      }
    }

    function scrollCallback() {
      positionNavBar();
      addActiveState(sections);
    }

    function smoothScroll() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $("html, body").stop().animate({
            scrollTop: target.offset().top - options.stickyPosition - navBarHeight
          }, {
            duration: options.animationDuration,
            easing: options.easing
          });
        }
      }
    }

    initSecondaryNav();
    $(window).on('scroll', scrollCallback);
    $('a[href*=#]:not([href=#])').on("click", smoothScroll);

  }
})
(jQuery, window, document);