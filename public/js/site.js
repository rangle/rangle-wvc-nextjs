;(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = 'function' == typeof require && require
          if (!f && c) return c(i, !0)
          if (u) return u(i, !0)
          var a = new Error("Cannot find module '" + i + "'")
          throw ((a.code = 'MODULE_NOT_FOUND'), a)
        }
        var p = (n[i] = { exports: {} })
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r]
            return o(n || r)
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        )
      }
      return n[i].exports
    }
    for (
      var u = 'function' == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i])
    return o
  }
  return r
})()(
  {
    1: [
      function (require, module, exports) {
        'use strict'

        /*jshint esversion: 6 */
        $('.siteHeader-announcementDismiss').click(function () {
          $('.siteHeader-announcement').slideToggle('slow')
        })
        $('.siteHeader-announcementDismiss').keypress(function (e) {
          if (e.which === 13) {
            $('.siteHeader-announcement').slideToggle('slow')
          }
        })
        $('.siteFooter-newsletter--form-control').each(function () {
          $(this).focusout(function () {
            if ($(this).is(':invalid')) {
              $(this).addClass('invalid')
            } else {
              $(this).removeClass('invalid')
            }
          })
        })
        $('.countrySelector').change(function () {
          var countryPage = $(this).val()
          window.location.href = countryPage
        })
        $('.collapse')
          .on('shown.bs.collapse', function () {
            $(this)
              .parent()
              .find('.fa-plus')
              .removeClass('fa-plus')
              .addClass('fa-minus')
          })
          .on('hidden.bs.collapse', function () {
            $(this)
              .parent()
              .find('.fa-minus')
              .removeClass('fa-minus')
              .addClass('fa-plus')
          })
        $('.news-filter').click(function () {
          $('.news-filter').removeClass('active')
          $(this).addClass('active')
        })
        $('.news-filters--toggle')
          .click(function () {
            $(this).toggleClass('active')
            $('.filters-collapsed').slideToggle('slow')
            $(this).attr('aria-expanded', function (index, attrval) {
              return attrval == 'true' ? 'false' : 'true'
            })
          })
          .attr('aria-expanded', 'false')
        $('.news-filters--grid').click(function () {
          $('.news-layout')
            .addClass('news-layout--grid')
            .removeClass('news-layout--list')
        })
        $('.news-filters--list').click(function () {
          $('.news-layout')
            .addClass('news-layout--list')
            .removeClass('news-layout--grid')
        })
        $('.region-selector select').change(function () {
          var region = $(this).find('option:selected').text()
          window.location = '?region=' + region
        })
        $('.tabsVertical-nav').each(function () {
          var navHeight = $(this).height() + 75
          $(this)
            .parents('.col-md-3')
            .next('.col-md-9')
            .find('.tab-content--vertical')
            .css('min-height', navHeight)
        })
        $(".form label:contains('*')").each(function () {
          $(this).html(
            $(this).html().replace('*', "<span class='red'>*</span>")
          )
        })
        $('.news-header-content--category').each(function () {
          var StoryCat = $('.categories-list a').first().text()
          $(this).append(StoryCat)
        })
        $(window).on('load', function () {
          $('.news-header-content--tags').each(function () {
            var StoryTags = $('.tags-list').html()

            if ($('.tags-list').find('span').length) {
              $('.news-header-content--tags').append(StoryTags)
            } else {
              if ($('body').hasClass('ENCA')) {
                $('.news-header-content--tags').append('No Tags')
              } else {
                if ($('body').hasClass('FRCA')) {
                  $('.news-header-content--tags').append('Indisponible')
                }
              }
            }
          })
          $('.TagCloud span').wrap("<li class='tagcloudspan'></li>")
          $('.tagcloudspan').wrapAll('<ul></ul>')
          var seen = {}
          $('.tagcloudspan').each(function () {
            var txt = $(this).text()
            if (seen[txt]) $(this).remove()
            else seen[txt] = true
          })
          $('.interactive-image_button').click(function () {
            $(this)
              .parent('.interactive-image_item')
              .addClass('interactive-image_item-shown')
          })
          $('.interactive-image_button').focus(function () {
            $(this)
              .parent('.interactive-image_item')
              .addClass('interactive-image_item-shown')
          })
          $('.interactive-image_button').click(function () {
            $(this)
              .parent('.interactive-image_item')
              .addClass('interactive-image_item-shown')
          })
          $('.interactive-image_item').each(function () {
            var position = $(this).position()
            var percentLeft =
              (position.left / $('.interactive-image-content').width()) * 100
            var percentTop =
              (position.top / $('.interactive-image-content').height()) * 100
            var width = $(this).width()
            var parentWidth = $(this).offsetParent().width()
            var percent = (100 * width) / parentWidth
            var index = $(this).attr('data-index')
            $(this).css({
              top: percentTop + '%',
              left: percentLeft + '%',
              width: percent + '%',
              'z-index': index
            })
          })
          $('.interactive-image-content').css('width', '100%')
          $('.interactive-image-content .load-wrapper').fadeOut()
        })
        $('.wvc-ll-btn').click(function () {
          $(this)
            .parent('.col-md-12')
            .prev('.news-layout')
            .find('.news-row:last a')
            .focus()
        })
        $(window).on('load resize', function () {
          if (
            $(window).width() <
            1201 - (window.innerWidth - document.documentElement.clientWidth)
          ) {
            if (!$('#navbar').has('.siteHeader-navBarLeft_topbar').length) {
              $(
                '<ul class="nav navbar-nav siteHeader-navBarLeft siteHeader-navBarLeft_topbar"></ul>'
              ).insertAfter('#navbar .siteHeader-search_mobile')
              $('.siteHeader-topItem').each(function () {
                $(this)
                  .clone()
                  .wrap(
                    '<li class="siteHeader-navItem siteHeader-navItem_topbar"></li>'
                  )
                  .parent()
                  .appendTo('.siteHeader-navBarLeft_topbar')
              })
            }
          } else {
            $('.siteHeader-navBarLeft_topbar').remove()
          }
        })
        $(window).scroll(function () {
          $('.animated-reveal').each(function () {
            var imagePos = $(this).offset().top
            var topOfWindow = $(window).scrollTop()
            var animation = $(this).attr('data-animate')

            if (imagePos < topOfWindow + 400) {
              $(this).addClass('animated-reveal_shown').addClass(animation)
            }
          })
        })

        // JSSOCIALS
        // $(".social-sharing-buttons").jsSocials({
        //   showCount: false,
        //   showLabel: true,
        //   shareIn: 'popup',
        //   shares: ["twitter", "facebook", "linkedin"]
        // });
        // $('.jssocials-share-email a').each(function () {
        //   var subject = document.querySelector("meta[property='og:title']").getAttribute("content").replace(/\&rsquo;/g, '').replace(/\&amp;rsquo;/g, '');
        //   var emailBody = document.querySelector("meta[property='og:description']").getAttribute("content").replace(/\&rsquo;/g, '').replace(/\&amp;rsquo;/g, '');
        //   var emailURL = $(location).attr("href");
        //   $(this).attr('href', 'mailto:?subject=' + subject + '&body=' + emailBody + " -- " + emailURL);
        // });
        // $('.jssocials-share-link').each(function () {
        //   var label = $(this).find('.jssocials-share-label').text();
        //   $(this).attr('aria-label', label);
        // });
        // $('.jssocials-shares .jssocials-share').eq(3).nextAll().wrapAll("<span id='more-links' style='display:none'></span>");
        // $('#more-links').after("<div class='jssocials-share jssocials-share-more'><a href='javascript:void(0)' class='jssocials-share-link' tabindex='0' aria-label='More sharing options'><i class='fa fa-plus jssocials-share-logo'></i></a></div>");
        // $('.jssocials-share-more .jssocials-share-link').click(function () {
        //   $(this).find('i').toggleClass('fa-plus fa-minus');
        //   $('#more-links').toggle("slide");

        //   if ($(this).find('i').hasClass('fa-plus')) {
        //     $('.jssocials-shares .jssocials-share').eq(3).find('.jssocials-share-link').focus();
        //   } else {
        //     if ($(this).find('i').hasClass('fa-minus')) {
        //       $('#more-links').focus();
        //     }
        //   }

        //   if ($(this).attr('aria-label') === 'More sharing options') {
        //     $(this).attr('aria-label', 'Less sharing options');
        //   }
        // }); //$('.jssocials-shares .jssocials-share a').wrap("<ul><li></li></ul>");

        // if (window.location.href.indexOf("/topic/") > -1) {
        //   var parentText = $().add($('.page-header--breadcrumbs').html()).text();
        //   var filterTitle = $('.page-header--breadcrumbs').text().replace(parentText, "").trim();
        //   $('.stories-section--title strong').after("<p class='stories-section--subtitle'>Displaying stories with '<strong>" + filterTitle + "</strong>' topic</p>");
        //   $(function () {
        //     $('.filters a').each(function () {
        //       if ($(this).attr("href") === window.location.pathname) {
        //         $(this).addClass("active");
        //       }
        //     });
        //   });
        // }

        if (window.location.href.indexOf('/region/') > -1) {
          parentText = $().add($('.page-header--breadcrumbs').html()).text()
          filterTitle = $('.page-header--breadcrumbs')
            .text()
            .replace(parentText, '')
            .trim()
          $('.stories-section--title strong').after(
            "<p class='stories-section--subtitle'>Displaying stories with '<strong>" +
              filterTitle +
              "</strong>' region</p>"
          )
          $(function () {
            $('.filters a').each(function () {
              if ($(this).attr('href') === window.location.pathname) {
                $(this).addClass('active')
              }
            })
          })
        }

        if (window.location.href.indexOf('/category/') > -1) {
          parentText = $().add($('.page-header--breadcrumbs').html()).text()
          filterTitle = $('.page-header--breadcrumbs')
            .text()
            .replace(parentText, '')
            .trim()
          $('.stories-section--title strong').after(
            "<p class='stories-section--subtitle'>Displaying stories with '<strong>" +
              filterTitle +
              "</strong>' category</p>"
          )
          $(function () {
            $('.stories-filter a').each(function () {
              if ($(this).attr('href') === window.location.pathname) {
                $(this).addClass('active')
              }
            })
          })
        }

        if (window.location.href.indexOf('&tagname=') > -1) {
          var match = RegExp('[?&]' + 'tagname' + '=([^&]*)').exec(
            window.location.search
          )
          filterTitle = decodeURIComponent(match[1].replace(/\+/g, ' ')) //var filterTitle = getParameterByName('tagName').trim();

          $('.stories-section--title strong').after(
            "<p class='stories-section--subtitle'>Displaying stories with '<strong>" +
              filterTitle +
              "</strong>' tag</p>"
          )
          $(function () {
            $('.stories-filter a').each(function () {
              if ($(this).attr('href') === window.location.pathname) {
                $(this).addClass('active')
              }
            })
          })
        }

        function callPlayer(func, args) {
          var iframes = document.getElementsByTagName('iframe')

          for (var i = 0; i < iframes.length; ++i) {
            if (iframes[i]) {
              var src = iframes[i].getAttribute('src')

              if (src) {
                if (src.indexOf('youtube.com/embed') !== -1) {
                  iframes[i].contentWindow.postMessage(
                    JSON.stringify({
                      event: 'command',
                      func: func,
                      args: args || []
                    }),
                    '*'
                  )
                }
              }
            }
          }
        }

        $(document).on(
          'click',
          '.media-slider .carousel-control',
          function (e) {
            $('#stop').get(0).click()
          }
        )
        /* -------------------------------------------------------------------------- *\
        Initialize the WVC object. Initialize WVC object. WVC object is introduced by MWV. It mimics how MWV moduele works.
\* -------------------------------------------------------------------------- */
        // import * as lrlogin from "./lrlogin.tmp.js";

        $(document).ready(function () {
          header_controller.init()
          lazy_loading_controller.init() // lrlogin.login_controller().init();

          web_chat_controller.init()
        }) // Loading shopping cart information
        //$('header.siteHeader#form > header').ready(function () {

        $(document).ready(function () {
          //var basket_icon = '<svg id="icon--basket" viewBox="0 0 29.9 22.2"><path d="M23.8,22.2H6.1c-2.2,0-4.2-2-4.5-4.4L0,4.6h7.4L10.8,0l0.8,0.6l-2.9,4h12.7l-2.9-4L19.2,0l3.4,4.6h7.4l-1.6,13.2 C28,20.3,25.9,22.2,23.8,22.2z M1.1,5.6l1.5,12.1c0.2,1.9,1.8,3.5,3.5,3.5h17.6c1.7,0,3.3-1.6,3.5-3.5l1.5-12.1h-5.5l2.1,2.8 L24.5,9L22,5.6H7.9L5.4,9L4.6,8.4l2.1-2.8H1.1z M20.5,18.3h-1V8.9h1V18.3z M15.6,18.3h-1V8.9h1V18.3z M10.7,18.3h-1V8.9h1V18.3z"></path></svg >';
          //var shopping_link = $('ul.navbar-right>li.siteHeader-navItem:last-child a');
          //$(shopping_link).html(basket_icon);
          //$('ul.navbar-right>li.siteHeader-navItem:last-child').addClass('only-desktop');
          //$(shopping_link).attr('data-track-category', 'Ecommerce');
          //$(shopping_link).attr('data-track-label', 'wvc back to cart');
          //$(shopping_link).attr('data-track-action', 'Checkout - Step 1');
          //$(shopping_link).click(function () {
          //    fireDataTrackEvent($(this).attr("data-track-category"), $(this).attr("data-track-action"), $(this).attr("data-track-label"));
          //});
          var url_en = 'https://donate.worldvision.ca/cart.json'
          var url_fr = 'https://donner.visionmondiale.ca/cart.json'
          var url_zh = 'https://donate-chinese.worldvision.ca/cart.json'
          var dict_lang_store_url = {
            'en-CA': url_en,
            'fr-CA': url_fr,
            'zh-CN': url_zh
          }
          var url = 'https://donate.worldvision.ca/cart.json'
          $.ajax({
            url: url,
            type: 'GET',
            dataType: 'jsonp',
            success: function success(e) {
              // Copying shopping cart icon for mobile view.
              var l = $('.siteHeader-basket').attr('aria-label')
              var cartM = $('.siteHeader-basket').attr('data-cart-add-message')
              var cartNoItems =
                $('.siteHeader-basket').attr('data-cart-no-items')

              if (e.item_count > 0) {
                var badgeItemCount =
                  '<span id="basket-basketIndicator" class="basket-basketIndicator u-hide-desktop">' +
                  e.item_count +
                  '</span>'
                $('.siteHeader-basket').append(badgeItemCount)
                $('.siteHeader-basket').attr(
                  'aria-label',
                  l + '. ' + e.item_count + ' ' + cartM
                )
              } else {
                $('.siteHeader-basket').attr(
                  'aria-label',
                  l + '. ' + cartNoItems
                )
              }

              $('#basket-basketIndicator-text').text('(' + e.item_count + ')')
            },
            error: function error(e) {
              console.log('Loading cart information is failed')
              console.log(e)
            }
          })
        }) //v2v Flex Panel

        $('.flex-panel-bg').click(function (e) {
          if ($('.flex-panel').hasClass('open')) {
            $('.flex-panel-maximized').attr('aria-expanded', 'false')
            $('.flex-panel-bg').attr('aria-expanded', 'false')
          } else {
            $('.flex-panel-maximized').attr('aria-expanded', 'true')
            $('.flex-panel-bg').attr('aria-expanded', 'true')
          }
        })
      },
      {}
    ]
  },
  {},
  [1]
)
