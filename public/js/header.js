var header_controller = header_controller || {}

/* -------------------------------------------------------------------------- *\
    THE "controller" OBJECT
    Takes care of all the stuff the controller needs to work
\* -------------------------------------------------------------------------- */
header_controller = {
  init: function () {
    var self = this,
      obj

    for (obj in self) {
      if (self.hasOwnProperty(obj)) {
        var _method = self[obj]
        if (_method.init !== undefined) {
          _method.init()
        }
      }
    }
  }
}

/* -------------------------------------------------------------------------- *\
Search box for mobile
\* -------------------------------------------------------------------------- */
// header_controller.searchBox = {
//   selector: $('.siteHeader-searchToggle'),

//   init: function () {
//     this.selector
//       .on('click', function (cb) {
//         var $this = $(this),
//           s = $('.grid-search-wrapper'),
//           l = $('.site-lang-wrapper'),
//           tc = $('.siteHeader-searchToggle .toggle-close')

//         s.toggleClass('show')
//         if (s.hasClass('show')) {
//           $this.attr('aria-expanded', 'true')
//           tc.addClass('show')
//         } else {
//           $this.attr('aria-expanded', 'false')
//           tc.removeClass('show')
//         }

//         if (l.hasClass('show')) {
//           l.removeClass('show').attr('aria-expanded', 'false')
//         }
//         if (document.activeElement !== $('input.gsc-input').first()[0]) {
//           $('input.gsc-input').focus().attr('type', 'search')
//         }
//       })
//       .on('focus', function (e) {
//         $(this).attr('aria-expanded', false)
//         $('svg', this).removeAttr('aria-expanded')
//       })
//     $('.siteHeader-searchToggle svg').removeAttr('aria-expanded')
//     $('.siteHeader-searchToggle .toggle-close').click(function (e) {
//       e.stopPropagation()
//       e.preventDefault()
//       return false
//     })
//   }
// }

/* -------------------------------------------------------------------------- *\
Search box desktop - google widget inserted after document load
\* -------------------------------------------------------------------------- */

header_controller.searchDesktop = {
  selector: $('.grid-search'),

  init: function () {
    this.selector.on('DOMNodeInserted', function (e) {
      if ($(e.target).hasClass('gsc-input') && $(e.target).is('input')) {
        console.log('DOMNodeInserted')
        var target = $(e.target),
          langWrapper = $('.site-lang-wrapper'),
          searchWrapper = $('.grid-search-wrapper')
        if (document.documentElement.lang === 'fr-CA') {
          target.attr('aria-label', 'Rechercher Vision Mondiale')
        } else {
          target.attr('aria-label', 'Search World Vision')
        }

        target.on('focus', function () {
          if (langWrapper.hasClass('show')) {
            $('.site-lang').attr('aria-expanded', 'false')
            langWrapper.removeClass('show')
            $('.toggle-close').addClass('show')
          }
        })
        target.on('blur', function () {
          if (searchWrapper.hasClass('show')) {
            $('.siteHeader-searchToggle svg').attr('aria-expanded', 'false')
            searchWrapper.removeClass('show')
            $('.toggle-close').removeClass('show')
          }
          $('.siteHeader-searchToggle').css('pointer-events', 'none')
          setTimeout(function () {
            $('.siteHeader-searchToggle').css('pointer-events', '')
          }, 500)
        })
      }
    })
    $('#gsc-i-id1').on('focus', function () {
      $('.toggle-close').toggleClass('show')
    })
  }
}

/* -------------------------------------------------------------------------- *\
Language dropdown
\* -------------------------------------------------------------------------- */
header_controller.langBox = {
  selector: $('.site-lang-wrapper'),

  init: function () {
    this.selector.on('keypress click', function (e) {
      var $this = $(this),
        s = $('.grid-search-wrapper'),
        i = $('.siteHeader-searchToggle')
      if (e.which === 13 || e.type === 'click') {
        $this.toggleClass('show')

        if (window.navigator.userAgent.indexOf('Trident') > 0) {
          if (e.target.classList.contains('site-lang-wrapper')) {
            e.preventDefault()
          }
          //e.preventDefault(); // For IE11
        }
        if ($this.hasClass('show')) {
          $this.attr('aria-expanded', 'true')
        } else {
          $this.attr('aria-expanded', 'false')
        }
        if (s.hasClass('show')) {
          s.removeClass('show')
          i.attr('aria-expanded', 'false')
        }
      }
    })
    // close lang dropdown
    $('.lang-selector-container a:last-child').on('blur', function () {
      header_controller.langBox.selector
        .removeClass('show')
        .attr('aria-expanded', 'false')
    })
  }
}
/* -------------------------------------------------------------------------- *\
 MOBILE NAV
 \* -------------------------------------------------------------------------- */

var selector_headerOverlay = 'header .main-overlay'
header_controller.nav = {
  selector: $('.siteHeader-hamburger'),

  init: function () {
    this.selector.on('click', function () {
      var m = $('.main-nav'),
        o = $(selector_headerOverlay),
        s = $('.siteHeader-nav'),
        c = $('#btnCloseMwvMenu')
      m.attr('data-open-by', 'mobile')
      m.toggleClass('nav-visible')
      o.toggleClass('show')
      s.animate({ left: '0' }, 1000).addClass('show')
      c.removeClass('hide-nav')
      var _t = $('.siteHeader-navItem,#btnCloseMwvMenu', s)
      _t[0].focus()
    })
    var s1 = $('.siteHeader-nav')
    var _t = $('.siteHeader-navItem,#btnCloseMwvMenu', s1)
    var f_t = _t[0]
    var l_t = _t[_t.length - 1]

    $('#btnCloseMwvMenu')
      .focus(function () {
        $(this).css('outline', '2px solid #7BB2CE')
      })
      .blur(function () {
        $(this).css('outline', 'none')
      })
      .on('keydown', function (e) {
        if (e.keyCode === 13 || e.keyCode === 32) {
          $(this).click()
          $('.siteHeader-hamburger').off('keydown')
        }
      })

    s1.on('keydown', function (e) {
      var isModalMenu = $('.nav-visible').length == 1 ? true : false
      if (e.keyCode === 9 && isModalMenu) {
        if (e.shiftKey) {
          if (document.activeElement === f_t[0]) {
            e.preventDefault()
            $('.siteHeader-navItem').last()[0].focus()
          }
          if (document.activeElement === $('#btnMwvLogin-Mobile')[0]) {
            e.preventDefault()
            $('#btnCloseMwvMenu')[0].focus()
          }
          if (document.activeElement === $('#btnCloseMwvMenu')[0]) {
            e.preventDefault()
            $('.siteHeader-navItem').last()[0].focus()
          }
          if (document.activeElement === $('.siteHeader-navItem').first()[0]) {
            e.preventDefault()
            $('#btnMwvLogin-Mobile')[0].focus()
          }
        } else {
          if (document.activeElement === $('#btnCloseMwvMenu')[0]) {
            e.preventDefault()
            console.log('MWV login')
            $('#btnMwvLogin-Mobile')[0].focus()
            return
          } else if (
            document.activeElement === $('.siteHeader-navItem').last()[0]
          ) {
            e.preventDefault()
            $('#btnCloseMwvMenu')[0].focus()
            return
          } else if (document.activeElement === $('#btnMwvLogin-Mobile')[0]) {
            e.preventDefault()
            $('.newSiteHeader .newSiteHeader-item1').first()[0].focus()
            return
          }
        }
      }
      if (e.keyCode === 27) {
        $('#btnCloseMwvMenu').click()
      }
    })
    $(window).on('keydown', function (e) {
      if (document.activeElement === $('.siteHeader-hamburger').first()[0]) {
        if (e.keyCode === 13 || e.keyCode === 32) {
          $('.siteHeader-hamburger').first().click()
        }
      }
      if (document.activeElement === $('.siteHeader-searchToggle').first()[0]) {
        if (e.keyCode === 13 || e.keyCode === 32) {
          $('.siteHeader-searchToggle').first().click()
        }
      }
      if (document.activeElement === $('#chatLaunchButton')[0]) {
        if (e.keyCode === 13 || e.keyCode === 32) {
          $('#chatLaunchButton').click()
        }
      }
    })

    $('#chatLaunchButton')
      .focus(function () {
        $(this).css('outline', '2px solid #7BB2CE').css('outline-offset', '2px')
      })
      .blur(function () {
        $(this).css('outline', 'none')
      })

    $(
      '.siteHeader-hamburger,.siteHeader-searchToggle.u-hide-desktop,.siteHeader-basket.siteHeader-top-button,.site-lang.siteHeader-topItem'
    )
      .focus(function () {
        $(this).css('outline', '2px solid #7BB2CE').css('outline-offset', '5px')
      })
      .blur(function () {
        $(this).css('outline', 'none')
      })
    $('.siteHeader-logo')
      .parent()
      .focus(function () {
        $(this).css('outline', '2px solid #7BB2CE')
        $('.siteHeader-logo').css('outline', '2px solid #7BB2CE')
      })
      .blur(function () {
        $(this).css('outline', 'none')
        $('.siteHeader-logo').css('outline', 'none')
      })
  }
}

header_controller.desktopNav = {
  selector: $('.siteHeader-desktopHamburger'),
  init: function () {
    this.selector.on('keypress click', function (e) {
      if (e.which === 13 || e.type === 'click') {
        var m = $('.main-nav'),
          o = $(selector_headerOverlay),
          cln = $('.nav-sub-menu .menu-collapse .side-nav'),
          s = $('.siteHeader-navExtra')
        m.attr('data-open-by', 'desktop')
        cln.removeClass('hidden')
        $('.sub-menu-bottom').removeClass('u-hide')
        m.toggleClass('nav-visible')
        o.toggleClass('show')
        s.animate(
          { left: '0' },
          {
            duration: 1000,
            complete: function () {}
          }
        ).addClass('show')
        if (e.which === 13) {
          // Make it focused only when the nav side bar is opened by keyboard.
          $(
            '.nav-sub-menu .menu-collapse .side-nav > ul > li:first-child > a'
          ).focus()
        }
      }
    })
  }
}

header_controller.mobileNav = {
  selector: $('header.siteHeader span.siteHeader-navItem.menu-title'),

  init: function () {
    this.selector.on('click', function () {
      var $this = $(this),
        m = $('.main-nav'),
        el = $('.sidenav-container .side-nav'),
        cln = $('.nav-sub-menu .menu-collapse .side-nav'),
        location = $('.nav-sub-menu .menu-collapse')

      if (m.attr('data-open-by') === 'mobile') {
        $('.sub-menu-bottom').toggleClass('u-hide')
        $('#sidenav').toggleClass('hidden')

        $this.toggleClass('collapsed')
      }
    })
  }
}

/* -------------------------------------------------------------------------- *\
CLOSE MOBILE NAV
\* -------------------------------------------------------------------------- */
header_controller.close = {
  selector: $(
    '.wrapper-close, .wrapper-close.siteHeader-close, .main-overlay, #btnMwvLogin-Mobile'
  ),

  init: function () {
    this.selector.on('click', function () {
      var $this = $(this)
      var m = $('.main-nav'),
        s = $('.siteHeader-nav'),
        sd = $('.siteHeader-navExtra'),
        o = $(selector_headerOverlay),
        so = $('.sub-menu-bottom'),
        p = $('.nav-sub-menu .menu-title'),
        c = $('#btnCloseMwvMenu')

      if (m.attr('data-open-by') === 'mobile') {
        if (m.hasClass('nav-visible')) {
          s.animate(
            { left: '-90vw' },
            {
              duration: 1000,
              complete: function () {
                s.removeClass('show')
                m.removeClass('nav-visible')
                o.removeClass('show')
                so.addClass('u-hide')
                p.addClass('collapsed')
                c.addClass('hide-nav')
              }
            }
          )
        }
      } else if (m.attr('data-open-by') === 'desktop') {
        if (m.hasClass('nav-visible')) {
          sd.animate(
            { left: '-350px' },
            {
              duration: 1000,
              complete: function () {
                sd.removeClass('show')
                m.removeClass('nav-visible')
                o.removeClass('show')
                p.removeClass('collapsed')
              }
            }
          )
        }
      }
    })
  }
}

/* -------------------------------------------------------------------------- *\
CLOSE MOBILE NAV when navigating to page
\* -------------------------------------------------------------------------- */
header_controller.accordion = {
  selector: $('.nav-sub-menu .side-nav span'),

  init: function () {
    this.selector.on('click', function () {
      var m = $('.main-nav'),
        s = $('.siteHeader-nav')
      if (m.hasClass('nav-visible')) {
        s.removeClass('show')
        m.removeClass('nav-visible')
      }
    })
  }
}

/* -------------------------------------------------------------------------- *\
Close DESKTOP MWV NAV when hit the X mark. 
\* -------------------------------------------------------------------------- */
header_controller.closeDesktopNav = {
  selector: $('.wrapper-close, .wrapper-close.siteHeader-close'),

  init: function () {
    this.selector.on('keydown', function (e) {
      var $this = $(this)
      var m = $('.main-nav'),
        sd = $('.siteHeader-navExtra'),
        o = $(selector_headerOverlay)
      if (m.attr('data-open-by') === 'desktop' && m.hasClass('nav-visible')) {
        if (e.which == 13) {
          sd.animate(
            { left: '-350px' },
            {
              duration: 1000,
              complete: function () {
                sd.removeClass('show')
                m.removeClass('nav-visible')
                o.removeClass('show')

                // Put the focus on the hamburger menu on 'Top bar'
                $('.siteHeader-desktopHamburger').focus()
              }
            }
          )
        }
      }
    })
  }
}

/* -------------------------------------------------------------------------- *\
DESKTOP MWV NAV accessiblity implementation. 
\* -------------------------------------------------------------------------- */
header_controller.mwvNavBarAccessibility = {
  init: function () {
    var allMenuSelector =
        '.nav-sub-menu .menu-collapse .side-nav > ul > li > a',
      firstMenuSelector =
        '.nav-sub-menu .menu-collapse .side-nav > ul > li:first-child > a',
      lastMenuSelector =
        '.nav-sub-menu .menu-collapse .side-nav > ul > li:last-child > a',
      closeSelector = '.wrapper-close, .wrapper-close.siteHeader-close'

    $(firstMenuSelector).on('keydown', function (e) {
      if (e.which == 9 && e.shiftKey) {
        e.preventDefault()
        $(closeSelector).focus()
      }
    })

    $(closeSelector).on('keydown', function (e) {
      if (e.which == 9) {
        if (e.shiftKey) {
          $(lastMenuSelector).focus()
          e.preventDefault()
        } else {
          e.preventDefault()
          $(firstMenuSelector).focus()
        }
      }
    })
  }
}

/* -------------------------------------------------------------------------- *\
Global Key event for 'Escape'
\* -------------------------------------------------------------------------- */
header_controller.globalEscKeyHandler = {
  init: function () {
    document.onkeydown = function (e) {
      evt = e || window.event
      if (evt.keyCode == 27) {
        var m = $('.main-nav'),
          sd = $('.siteHeader-navExtra'),
          o = $(selector_headerOverlay)
        if (m.attr('data-open-by') === 'desktop' && m.hasClass('nav-visible')) {
          sd.animate(
            { left: '-350px' },
            {
              duration: 1000,
              complete: function () {
                sd.removeClass('show')
                m.removeClass('nav-visible')
                o.removeClass('show')

                // Put the focus on the hamburger menu on 'Top bar'
                $('.siteHeader-desktopHamburger').focus()
              }
            }
          )
        }
      }
    }
  }
}

/* -------------------------------------------------------------------------- *\
DESKTOP MWV NAV accessiblity implementation. 
\* -------------------------------------------------------------------------- */
//header_controller.bindSsoUserInfo = {
//    selector: 'header.signedin span.txtUserName',
//    init: function () {
//        var formatUserName = function (name) {
//            return ', ' + name;
//        };
//        $(this.selector).html(formatUserName('Barbara'));
//    }
//};

/* -------------------------------------------------------------------------- *\
Search input focus event
\* -------------------------------------------------------------------------- */
header_controller.langToggleLoseFocused = {
  selector: '.grid-search',
  init: function () {
    $(this.selector).on('DOMNodeInserted', function (e) {
      if ($(e.target).hasClass('gsc-input') && $(e.target).is('input')) {
        var target = $(e.target)
        target.on('focus', function (ev) {
          console.log({ ev })
          $('.site-lang-wrapper').attr('aria-expanded', 'false')
          $('.site-lang-wrapper').removeClass('show')
        })
        $('input.gsc-input').on('keydown', function (evt) {
          var kc = evt.which || evt.keyCode
          if (kc == 13) {
            window.location.href =
              window.location.protocol +
              '//' +
              window.location.host +
              '/search?q=' +
              $('input.gsc-input').val()
          }
        })
      }
    })
  }
}
