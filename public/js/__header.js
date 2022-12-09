var header_controller = header_controller || {};

/* -------------------------------------------------------------------------- *\
    THE "controller" OBJECT
    Takes care of all the stuff the controller needs to work
\* -------------------------------------------------------------------------- */
header_controller = {
    init: function () {
        var self = this,
            obj;

        for (obj in self) {
            if (self.hasOwnProperty(obj)) {
                var _method = self[obj];
                if (_method.init !== undefined) {
                    _method.init();
                }
            }
        }
    }
};


/* -------------------------------------------------------------------------- *\
Search box for mobile
\* -------------------------------------------------------------------------- */
header_controller.searchBox = {
    selector: $('.siteHeader-searchToggle'),

    init: function () {
        this.selector.on('click', function () {
            var $this = $(this), s = $('.grid-search-wrapper'),
                l = $('.site-lang-wrapper');

            s.toggleClass('show');
            if (s.hasClass('show')) {
                $this.attr('aria-expanded', 'true');
            } else {
                $this.attr('aria-expanded', 'false');
            }

            if (l.hasClass('show')) {
                l.removeClass('show').attr('aria-expanded', 'false');
            }

            $('input.gsc-input').focus().attr('type', 'search');
        });
    }
};
/* -------------------------------------------------------------------------- *\
Language dropdown
\* -------------------------------------------------------------------------- */
header_controller.langBox = {
    selector: $('.site-lang-wrapper'),

    init: function () {
        this.selector.on('keypress click', function (e) {
            var $this = $(this), s = $('.grid-search-wrapper'),
                i = $('.siteHeader-searchToggle');
            if (e.which === 13 || e.type === 'click') {
                e.preventDefault();
                $this.toggleClass('show');

                if ($this.hasClass('show')) {
                    $this.attr('aria-expanded', 'true');
                } else {
                    $this.attr('aria-expanded', 'false');
                }
                if (s.hasClass('show')) {
                    s.removeClass('show');
                    i.attr('aria-expanded', 'false');
                }
            }
        });
    }
};
/* -------------------------------------------------------------------------- *\
 MOBILE NAV
 \* -------------------------------------------------------------------------- */

var selector_headerOverlay = 'header .main-overlay';

header_controller.nav = {
    selector: $('.siteHeader-hamburger'),

    init: function () {
        this.selector.on("click", function () {
            var m = $('.main-nav'), o = $(selector_headerOverlay),
                s = $('.siteHeader-nav');
            m.attr('data-open-by', 'mobile');
            m.toggleClass('nav-visible');
            o.toggleClass('show');
            s.animate({ left: "0" }, 1000).addClass('show');
        });
    }
};


header_controller.desktopNav = {
    selector: $('.siteHeader-desktopHamburger'),
    init: function () {
        this.selector.on("keypress click", function (e) {
            if (e.which === 13 || e.type === 'click') {
                var m = $('.main-nav'), o = $(selector_headerOverlay),
                    cln = $('.nav-sub-menu .menu-collapse .side-nav'),
                    s = $('.siteHeader-navExtra');
                m.attr('data-open-by', 'desktop');
                cln.removeClass('hidden');
                $('.sub-menu-bottom').removeClass('u-hide');
                m.toggleClass('nav-visible');
                o.toggleClass('show');
                s.animate({ left: "0" },
                    {
                        duration: 1000,
                        complete: function () {
                            
                        }
                    }).addClass('show');
                if (e.which === 13) {   // Make it focused only when the nav side bar is opened by keyboard. 
                    $('.nav-sub-menu .menu-collapse .side-nav > ul > li:first-child > a').focus();
                }
            }
        });
    }
};

header_controller.mobileNav = {
    selector: $('header.siteHeader span.siteHeader-navItem.menu-title'),

    init: function () {
        this.selector.on("click", function () {
            var $this = $(this),
                m = $('.main-nav'),
                el = $('.sidenav-container .side-nav'),
                cln = $('.nav-sub-menu .menu-collapse .side-nav'),
                location = $('.nav-sub-menu .menu-collapse');

            if (m.attr('data-open-by') === 'mobile') {
                $('.sub-menu-bottom').toggleClass('u-hide');
                $('#sidenav').toggleClass('hidden');

                $this.toggleClass('collapsed');
            }
        });
    }
};

/* -------------------------------------------------------------------------- *\
CLOSE MOBILE NAV
\* -------------------------------------------------------------------------- */
header_controller.close = {
    selector: $('.wrapper-close, .wrapper-close.siteHeader-close, .main-overlay'),

    init: function () {
        this.selector.on("click", function () {
            var $this = $(this);
            var m = $('.main-nav'),
                s = $(".siteHeader-nav"),
                sd = $('.siteHeader-navExtra'),
                o = $(selector_headerOverlay),
                so = $('.sub-menu-bottom'),
                p = $('.nav-sub-menu .menu-title');

            if (m.attr('data-open-by') === 'mobile') {
                if (m.hasClass('nav-visible')) {
                    s.animate({ left: "-90vw" },
                    {
                        duration: 1000,
                        complete: function () {
                            s.removeClass('show');
                            m.removeClass('nav-visible');
                            o.removeClass('show');
                            so.addClass('u-hide');
                            p.addClass('collapsed');
                        }
                    });
                }
            }
            else if (m.attr('data-open-by') === 'desktop') {
                if (m.hasClass('nav-visible')) {
                    sd.animate({ left: "-350px" },
                    {
                        duration: 1000,
                        complete: function () {
                            sd.removeClass('show');
                            m.removeClass('nav-visible');
                            o.removeClass('show');
                            p.removeClass('collapsed');
                        }
                    });
                }
            }
        });
    }
};

/* -------------------------------------------------------------------------- *\
CLOSE MOBILE NAV when navigating to page
\* -------------------------------------------------------------------------- */
header_controller.accordion = {
    selector: $('.nav-sub-menu .side-nav span'),

    init: function () {
        this.selector.on("click", function () {
            var m = $('.main-nav'), s = $(".siteHeader-nav");
            if (m.hasClass('nav-visible')) {
                s.removeClass('show');
                m.removeClass('nav-visible');
            }
        });
    }
};


/* -------------------------------------------------------------------------- *\
Close DESKTOP MWV NAV when hit the X mark. 
\* -------------------------------------------------------------------------- */
header_controller.closeDesktopNav = {
    selector: $('.wrapper-close, .wrapper-close.siteHeader-close'),

    init: function () {
        this.selector.on("keydown", function (e) {
            var $this = $(this);
            var m = $('.main-nav'),
                sd = $('.siteHeader-navExtra'),
                o = $(selector_headerOverlay);
            if ((m.attr('data-open-by') === 'desktop') &&
                (m.hasClass('nav-visible'))) {
                if (e.which == 13) {
                    sd.animate({ left: "-350px" },
                        {
                            duration: 1000,
                            complete: function () {
                                sd.removeClass('show');
                                m.removeClass('nav-visible');
                                o.removeClass('show');

                                // Put the focus on the hamburger menu on 'Top bar'
                                $('.siteHeader-desktopHamburger').focus();
                            }
                        });
                }
            }
        });
    }
};

/* -------------------------------------------------------------------------- *\
DESKTOP MWV NAV accessiblity implementation. 
\* -------------------------------------------------------------------------- */
header_controller.mwvNavBarAccessibility = {
    init: function () {
        var allMenuSelector = '.nav-sub-menu .menu-collapse .side-nav > ul > li > a',
            firstMenuSelector = '.nav-sub-menu .menu-collapse .side-nav > ul > li:first-child > a',
            lastMenuSelector = '.nav-sub-menu .menu-collapse .side-nav > ul > li:last-child > a',
            closeSelector = '.wrapper-close, .wrapper-close.siteHeader-close';


        $(firstMenuSelector).on("keydown", function (e) {
            if ((e.which == 9) && e.shiftKey) {
                e.preventDefault();
                $(closeSelector).focus();
            }
        });

        $(closeSelector).on("keydown", function (e) {
            if (e.which == 9) {
                if (e.shiftKey) {
                    $(lastMenuSelector).focus();
                    e.preventDefault();
                }
                else {
                    e.preventDefault();
                    $(firstMenuSelector).focus();
                }
            }
        });
    }
};

/* -------------------------------------------------------------------------- *\
Global Key event for 'Escape'
\* -------------------------------------------------------------------------- */
header_controller.globalEscKeyHandler = {
    init: function () {
        document.onkeydown = function (e) {
            evt = e || window.event;
            if (evt.keyCode == 27) {

                var m = $('.main-nav'),
                    sd = $('.siteHeader-navExtra'),
                    o = $(selector_headerOverlay);
                if ((m.attr('data-open-by') === 'desktop') && (m.hasClass('nav-visible'))) {
                    sd.animate({ left: "-350px" },
                        {
                            duration: 1000,
                            complete: function () {
                                sd.removeClass('show');
                                m.removeClass('nav-visible');
                                o.removeClass('show');

                                // Put the focus on the hamburger menu on 'Top bar'
                                $('.siteHeader-desktopHamburger').focus();
                            }
                        });
                }
            }
        };
    }
};

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
                var target = $(e.target);
                target.on('focus', function (ev) {
                    $('.site-lang-wrapper').attr('aria-expanded', 'false');
                    $('.site-lang-wrapper').removeClass('show');
                });
            }
        });
    }
};