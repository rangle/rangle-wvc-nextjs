(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login_controller = login_controller;

var domelement = _interopRequireWildcard(require("./util_domelement.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*jshint esversion: 6 */
var _donor_svc_url = 'https://stg-svc.worldvision.ca';
var _lr_custom_domain = 'dev-login.worldvision.ca';
var _raasoption_apiKey = '31373013-2296-4deb-a021-70399242ac00';
var _raasoption_appName = 'worldvision-dev';

var _controller = _controller || {};

var _ciamwidget_obj = _ciamwidget_obj || {};

var _lr_url = 'https://' + _lr_custom_domain;

var _build_donor_svc_url = function _build_donor_svc_url(uid) {
  return _donor_svc_url + '/DonorService/api/profile/' + uid + '/donorbasic';
};

var _global_lrObject = null;
var LRConfigObj = {
  'appName': _raasoption_appName,
  'customdomain': _lr_custom_domain,
  'iframeSettings': {
    height: '100%',
    width: '100%',
    "class": 'iframe'
  }
};
var LRCommonOptions = {};
/* -------------------------------------------------------------------------- *\
    THE "controller" OBJECT
    Takes care of all the stuff the controller needs to work
\* -------------------------------------------------------------------------- */

_controller = {
  init: function init() {
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

var _toggle_loginview_status = function _toggle_loginview_status(login) {
  if (login) {
    $('header').addClass('signedin');
    $('.siteHeader-navItem.site-welcomeuser').removeClass('u-hide');
    $('.nav-sub-menu').removeClass('u-hide');
  } else {
    $('header').removeClass('signedin');
    $('.siteHeader-navItem.site-welcomeuser').addClass('u-hide');
    $('.nav-sub-menu').addClass('u-hide');
  }
};

var _update_userName = function _update_userName(firstName, lastName) {
  var selectorNameField = 'header.signedin span.txtUserName';
  $(selectorNameField).html(' ' + firstName);
};

var _get_donor_basic_info = function _get_donor_basic_info(uid, success, error) {
  $.ajax({
    url: _build_donor_svc_url(uid),
    type: 'GET',
    datatype: 'text',
    success: success,
    error: error
  });
};

var _get_extend_token_validity = function _get_extend_token_validity(access_token, success, error) {
  var url = 'https://api.loginradius.com/identity/v2/auth/access_token/Validate' + '?apikey=' + _raasoption_apiKey;
  $.ajax({
    url: url,
    type: 'GET',
    datatype: 'json',
    success: success,
    error: error,
    beforeSend: function beforeSend(xhr) {
      xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
    }
  });
};

var _get_profile_by_token = function _get_profile_by_token(token, success, error) {
  var url = 'https://api.loginradius.com/identity/v2/auth/account?apikey=' + _raasoption_apiKey + '&access_token=' + token;
  $.ajax({
    url: url,
    type: 'GET',
    datatype: 'text',
    success: success,
    error: error
  });
};

var _callback_donor_success = function _callback_donor_success(e) {
  if (e.id != undefined) {
    // Update first name
    localStorage.setItem('first_name', e.firstName);

    _update_userName(e.firstName, e.lastName);

    console.log("[DBG] -- Returning Donor Svc with success");
  } else {
    console.log("The user information is not found from Donor Service");
    console.log("[DBG] -- Returning Donor Svc with failed");
  }
};

var _callback_donor_error = function _callback_donor_error(e) {
  console.log("Cannot retrieve user information from Donor Service");
  console.log("LR has a data regarding this user, but Donor service is not aware of this person. Data Mismatch"); // TODO : Report to Server Log. 

  console.log("[DBG] -- Returning Donor Svc with failed");
};

var _callback_get_profile_failed = function _callback_get_profile_failed(e) {
  console.log("Cannot retrieve the user profile from LR through the token.");
  console.log("[DBG] -- Returning LR GetProfile with failed");

  _logout();
};

var _clear_storage = function _clear_storage(e) {
  var keys = ['uid', 'refresh_token', 'expires_in', 'first_name'];

  for (var k in keys) {
    localStorage.removeItem(k);
  }
};

var _logout = function _logout(e) {
  _clear_storage();

  var lrcall = _lr_url + '/ssologin/logout';

  _global_lrObject.util.jsonpCall(lrcall, function (data) {
    if (data.ok) {
      $.ajax({
        type: "POST",
        url: "https://uat-my.worldvision.ca/api/lr/logout",
        //dataType: "json",
        crossDomain: true,
        success: function success(e) {
          location.reload();
        },
        error: function error(e) {
          location.reload();
        },
        beforeSend: function beforeSend(xhr) {
          xhr.setRequestHeader('Accept-Language', 'en');
        }
      });
    }
  });
};

_controller.initLrWidget = {
  init: function init() {
    console.log("[DBG] ++ initLrWidget");
    var raasoption = {};
    raasoption.apiKey = _raasoption_apiKey;
    raasoption.appName = _raasoption_appName;
    raasoption.hashTemplate = true;
    raasoption.verificationUrl = window.location;
    raasoption.resetPasswordUrl = window.location;
    raasoption.forgotPasswordUrl = "https://my.worldvision.ca/Home/ResetPassword";
    var LRObject = new LoginRadiusV2(raasoption);
    var uid = null; // Display cached name first if the previous login is 'considered' as valid.

    _ciamwidget_obj = new LoginRadiusCiamWidget(LRConfigObj, LRCommonOptions);

    _ciamwidget_obj.render('login', 'login-iframe', 'auth.aspx', function (retObj) {
      if (retObj.response != undefined && retObj.response.Profile != undefined) {
        var uid = retObj.response.Profile.Uid;
        localStorage.setItem('uid', uid);
        localStorage.setItem('refresh_token', retObj.response.refresh_token);
        localStorage.setItem('expires_in', retObj.response.expires_in);
        localStorage.setItem('first_name', retObj.response.Profile.FirstName);
        console.log("[DBG] ++ Calling Donor Svc...");

        _get_donor_basic_info(uid, _callback_donor_success, _callback_donor_error);
      }
    });

    var lrcall = _lr_url + '/ssologin/login';
    LRObject.util.jsonpCall(lrcall, function (data) {
      console.log("[DBG] Is Authenticated?????");
      console.log(data.isauthenticated);

      if (data.isauthenticated) {
        _toggle_loginview_status(true);

        var firstName = localStorage.getItem('first_name');

        if (firstName != null && firstName != undefined) {
          _update_userName(firstName);
        } else {
          // This user might come from the other site. Call the Donor service to get the name and save it to local storage. 
          _get_profile_by_token(data.token, function (profile_obj) {
            if (profile_obj != undefined) {
              _update_userName(profile_obj.FirstName);

              localStorage.setItem('uid', profile_obj.Uid);

              _get_donor_basic_info(profile_obj.Uid, _callback_donor_success, _callback_donor_error);
            }
          }, _callback_get_profile_failed);
        } // Extend its access token validity


        _get_extend_token_validity(data.token, function (e) {
          console.log(e);
        }, function (e) {
          console.log(e);
        });
      } else {
        _toggle_loginview_status(false);

        console.log("[DBG] -- Current user is not authenticated");

        _clear_storage();
      }
    });
    var check_options = {};

    check_options.onError = function () {
      localStorage.setItem("loginRadiusSSO", 'false');
    };

    check_options.onSuccess = function () {
      localStorage.setItem("loginRadiusSSO", 'true');
    };

    LRObject.util.ready(function () {
      LRObject.init("ssoNotLoginThenLogout", check_options);
    });
    _global_lrObject = LRObject;
  }
};
/* -------------------------------------------------------------------------- *\
Modal Dialog for LR-iframe Login (Hosted login)
\* -------------------------------------------------------------------------- */

_controller.initLoginModal = {
  selector: '#btnMwvLogin-Desktop, #btnMwvLogin-Mobile',
  init: function init() {
    var global = self.window;
    $(this.selector).on("keypress click", function (e) {
      if (e.which === 13 || e.type === 'click') {
        e.preventDefault();
        var login_modal_wrapper = global.document.querySelector('.lr-login');
        var login_modal = global.document.querySelector('.login-modal');
        login_modal.dataset.show = "".concat(!domelement.is_visible(login_modal));

        if (login_modal.dataset.show === 'true') {
          login_modal.classList.remove('u-hide');
          login_modal_wrapper.classList.remove('u-hide');
          var iframeID = document.getElementById('#login-iframe iframe.iframe');
          $(iframeID).contents().find("#loginradius-login-emailid").focus();
        }

        if ($('nav.siteHeader-nav').hasClass('show')) {}
      }
    });
  }
};
_controller.clickCloseLoginModal = {
  init: function init() {
    $('.lr-login .lr-modal-overlay, #btnCloseLoginMenu').on('click', function () {
      $('.lr-login').addClass('u-hide');
      $('.login-modal').addClass('u-hide');
      var m = $('.main-nav'),
          btnMobile = $('#btnMwvLogin-Mobile'),
          btnDesktop = $('#btnMwvLogin-Desktop');

      if (m.attr('data-open-by') === 'mobile') {
        btnMobile.focus();
      } else {
        btnDesktop.focus();
      }
    });
  }
};
_controller.initLogout = {
  selector: '#sidenavMwvLogout',
  init: function init() {
    var global = self.window;
    $(this.selector).on("keypress click", function (e) {
      if (e.which === 13 || e.type === 'click') {
        e.preventDefault();

        _logout();
      }
    });
  }
};
_controller.processPostMessage = {
  init: function init() {
    window.addEventListener('message', function (event) {
      if (event.origin === _lr_url) {
        var res = jQuery.parseJSON(event.data);

        if (res.data.status.toLowerCase() === 'success') {
          localStorage.setItem('loginRadiusResponse', JSON.stringify(event));
          localStorage.setItem('loginRadiusSSO', 'true');
          location.reload();
        }

        return;
      }
    });
  }
};

function login_controller() {
  return _controller;
}

},{"./util_domelement.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.is_visible = is_visible;
exports.in_viewport = in_viewport;

/**
* Functions that operate on DOM elements
*
* @module component/util/domelement
*/

/**
 * Return true if a DOM element is visible.
 *
 * Note: it does not matter whether the element is in the viewport or not. This
 * means that if the element is offscreen to the user but still visible (eg css
 * style attribute style is not none), then this function will return true.
 *
 * @param {HTMLElement} el
 * The DOM element to check if visible or not
 *
 * @returns {boolean}
 *
 * @example
 * let hello = document.getElementById('world')
 * let visible = is_visible(hello)
 *
 */
function is_visible(el) {
  return el.offsetParent !== null;
}
/**
 * Return true if a DOM element is within the viewport.
 *
 * The viewport is the area of the page that is displayed to the user in their
 * web browser.
 *
 * @param {Window} global
 * The global object (window in browser context)
 *
 * @param {Element} el
 * The DOM element to check if in the viewport or not
 *
 * @returns {boolean}
 *
 * @example
 * let hello = document.getElementById('world')
 * let viewable = in_viewport(window, hello)
 *
 */


function in_viewport(global, el) {
  var doc = global.document.documentElement;
  var width = doc.clientWidth;
  var height = doc.clientHeight;
  var rect = el.getBoundingClientRect();
  var res = rect.top >= 0 && rect.left >= 0 && rect.right <= width && rect.bottom <= height;
  return res;
}

},{}]},{},[1]);
