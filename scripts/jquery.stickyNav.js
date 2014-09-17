;
(function ($, window, document) {

  'use strict';

  $.fn.stickyNavbar = function (prop) {

    var options = $.extend({
      header: '.header',
      activeClass: 'active',
      attachActiveClassTo: 'li',
      animationDuration: 500,
      easing: 'swing',
      disableOnMobile: true,
      mobileWidth: 480
    }, prop);

    var header = options.header ? $(options.header) : undefined
      , banner = options.banner ? $(options.banner) : undefined
      , navBar = $(this);

    if (navBar.length == 0) {
      return;
    }

    if (options.disableOnMobile && $(window).width() <= options.mobileWidth) {
      return;
    }

    
    var stickyPosition = header ? header.outerHeight(true) : 0
      , heroHeight = navBar.offset().top - stickyPosition,
      navBarHeight = navBar.outerHeight(true);

    // collect all the sections for jumping
    var sections = new jQuery();
    navBar.find('li a').map(function () {
      var id = $(this).attr('href');
      sections = sections.add($(id));
    });

    // because we have header/banner so there is offset for sections
    var sectionsOffset = stickyPosition + navBarHeight + 2;

    // the active menu in navigator
    var activeOne;


    function initSecondaryNav() {
      if (banner) {
        navBar.before('<div class="nav-placeholder"></div>');
        $('.nav-placeholder').css('padding-bottom', navBarHeight + 'px');
      }
      else {
        navBar.before('<div class="banner"></div>');
        $('.banner').css('padding-bottom', navBarHeight + 'px');
        $('.banner').css('height', '0px');
        $('.banner').css('z-index', '-9999');
      }


      navBar.css('position', 'fixed').css('margin-top', -navBarHeight + 'px');
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
          if (options.attachActiveClassTo === 'a') {
            activeOne = navBar.find('li a[href~="#' + this.id + '"]');
          } else {
            activeOne = navBar.find('li a[href~="#' + this.id + '"]').parents('li');
          }
          activeOne.addClass(options.activeClass);
        }
      });
    }

    function positionNavBar() {
      if ($(window).scrollTop() >= 0) {
        $(window).scrollTop() < heroHeight
          ? navBar.css('margin-top', -navBarHeight - $(window).scrollTop() + 'px')
          : navBar.css('margin-top', -navBarHeight - heroHeight + 'px');
      }
    }

    function scrollCallback() {
      positionNavBar();
      addActiveState(sections);
    }

    function smoothScroll(e) {
      e.preventDefault();
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').stop().animate({
            scrollTop: target.offset().top - stickyPosition - navBarHeight
          }, {
            duration: options.animationDuration,
            easing: options.easing
          });
        }
      }
    }


    initSecondaryNav();
    $(window).on('scroll', scrollCallback);
    $(this).find(' a[href*=#]:not([href=#])').on('click', smoothScroll);
  }
})
(jQuery, window, document);