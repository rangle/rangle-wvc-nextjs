var web_chat_controller = web_chat_controller || {};

/* -------------------------------------------------------------------------- *\
    THE "controller" OBJECT
    Takes care of all the stuff the controller needs to work
\* -------------------------------------------------------------------------- */
web_chat_controller = {
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
Hide web chat
\* -------------------------------------------------------------------------- */
web_chat_controller.hideChat = {
    selector: $('.u-wrapper-close'),
    init: function () {     
        this.selector.on('click', function () {
            closeIframe();
        });
    }
};

/* -------------------------------------------------------------------------- *\
Post messages and media query web chat
\* -------------------------------------------------------------------------- */

web_chat_controller.onLoad = {
    init: function () {
        window.onload = function () {
            setIframeSrc();
            window.addEventListener('message', function (event) {
                if (event.data === 'closeClicked') {
                    closeIframe();
                }
                if (event.data === 'sessionActive') {
                    openIframe();
                }
                if (event.data === 'initialRenderComplete') {
                    iframeMedia();
                    showChat();
                }
                if (event.data === 'getResolution') {
                    var vw = Math.max(
                        document.documentElement.clientWidth || 0,
                        window.innerWidth || 0
                    );
                    var vh = Math.max(
                        document.documentElement.clientHeight || 0,
                        window.innerHeight || 0
                    );
                    var resolution = vw + 'w x' + vh + 'h';
                    var message = {
                        windowResolution: resolution
                    };
                    postMessage(message);
                }
            }, false);

        };
    }
};


function showChat() {
    var w = $('.web-chat');
    var ie11 = checkBrowser();
    if (w.hasClass('u-hide') && !ie11) {
        w.removeClass('u-hide');
    }
    $('#chatLaunchButton').on('click', function () {
        openIframe();
    });
}

function setIframeSrc() {
    var i = $('#webChatPopup');
    var url = "https://stg-livechat.worldvision.ca";
    i.attr('src', url);
}


function iframeMedia() {

    var queries = ["(max-width: 768px)", "(max-width: 1023px) and (min-width: 768px)", "(min-width: 1024px)"];

    function postMsgToIframe(mediaQuery) {
        if (mediaQuery.matches) {
            var message = {
                breakpoint: mediaQuery.media
            };
            postMessage(message);
        }
    }

    for (var i = 0; i < queries.length; i++) {
        var queryString = queries[i];
        var mediaQuery = window.matchMedia(queryString);
        if (mediaQuery.matches) {
            postMsgToIframe(mediaQuery);
        }
        mediaQuery.addListener(postMsgToIframe);
    }
}

function closeIframe() {
    var c = $('.u-wrapper-close'), i = $('#webChatPopup'), b = $('#inputBlocker'),
        l = $('.launch-btn');
    l.removeClass('u-fade');
    c.addClass('u-fade');
    i.css('z-index', -9999).addClass('u-fade');
    b.addClass('u-fade');
    $('body').removeClass('body-scroll-lock');
    setTimeout(function focusChatBtn(){
        $('#chatLaunchButton').focus();
    }, 100);
}

function openIframe() {
    var c = $('.u-wrapper-close'), i = $('#webChatPopup'), b = $('#inputBlocker'),
        l = $('.launch-btn');
    var message = {
        action: 'openClicked'
    };
    postMessage(message);
    l.addClass('u-fade');
    c.removeClass('u-fade');
    i.css('z-index', 9999).removeClass('u-fade');
    b.removeClass('u-fade');
    $('body').addClass('body-scroll-lock');
}

function postMessage(message) {
    var iFrameWindow = window.document.getElementById('webChatPopup').contentWindow;
    if (iFrameWindow) {
        iFrameWindow.postMessage(message, '*');
    }
}

function checkBrowser() {
    var test = function (regexp) {
        return regexp.test(window.navigator.userAgent);
    };
    var isIE = test(/trident/i);
    var isEdge = test(/edg/i);
    var ie11 = isIE && !isEdge;
    return ie11;
}
