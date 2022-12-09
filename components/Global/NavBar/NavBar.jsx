const headerHTML = `
<header class="siteHeader">
   <div class="siteHeader-topbar">
      <div class="container">
         <div class="nav-top">
            <a
               aria-label="Skip to main content"
               class="skip"
               href="#content"
               tabindex=""
               >Skip to main content</a
               >
            <div class="siteIcons" style="display: none">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                  <symbol id="icon--search" viewBox="0 0 13 13.5">
                     <path
                        d="M13,12.8L9.6,9.3c0.9-1,1.5-2.3,1.5-3.8C11.2,2.5,8.7,0,5.6,0C2.5,0,0,2.5,0,5.5s2.5,5.5,5.6,5.5c1.2,0,2.4-0.4,3.3-1.1
                        l3.4,3.5L13,12.8z M1,5.5C1,3,3.1,1,5.6,1s4.6,2,4.6,4.5c0,2.5-2.1,4.5-4.6,4.5S1,8,1,5.5z"
                        ></path>
                  </symbol>
                  <symbol id="icon--basket" viewBox="0 0 29.9 22.2">
                     <path
                        d="M23.8,22.2H6.1c-2.2,0-4.2-2-4.5-4.4L0,4.6h7.4L10.8,0l0.8,0.6l-2.9,4h12.7l-2.9-4L19.2,0l3.4,4.6h7.4l-1.6,13.2 C28,
                        20.3,25.9,22.2,23.8,22.2z M1.1,5.6l1.5,12.1c0.2,1.9,1.8,3.5,3.5,3.5h17.6c1.7,0,3.3-1.6,3.5-3.5l1.5-12.1h-5.5l2.1,
                        2.8 L24.5,9L22,5.6H7.9L5.4,9L4.6,8.4l2.1-2.8H1.1z M20.5,18.3h-1V8.9h1V18.3z M15.6,18.3h-1V8.9h1V18.3z M10.7,
                        18.3h-1V8.9h1V18.3z"
                        ></path>
                  </symbol>
                  <symbol id="icon--carrot" viewBox="0 0 32 24">
                     <g data-name="wv carrot" id="wv_carrot">
                        <path
                           d="M959.448,527.094a3.3,3.3,0,0,0-1.947,1.455l-13.3,22.458h32c-2.27-3.831-10.874-18.36-13.3-22.458A3.2,3.2,0,0,0,959.448,527.094Z"
                           data-name="Path 28"
                           fill="#fff"
                           id="Path_28"
                           transform="translate(-944.201 -527.007)"
                           ></path>
                        <path
                           d="M959.448,527.094a3.3,3.3,0,0,0-1.947,1.455l-13.3,22.458h2.4l12.665-21.384a1.08,1.08,0,0,1,1.866,0L973.8,551.007h2.4c-2.27-3.831-10.874-18.36-13.3-22.458A3.2,3.2,0,0,0,959.448,527.094Z"
                           data-name="Path 27"
                           fill="#9a9a9a"
                           id="Path_27"
                           transform="translate(-944.201 -527.007)"
                           ></path>
                     </g>
                  </symbol>
               </svg>
            </div>
            <div
               aria-label="Open My World Vision Menu"
               class="siteHeader-desktopHamburger"
               role="link"
               >
               <div class="siteHeader-hamburgerInner" tabindex="-1"></div>
            </div>
            <a
               class="siteHeader-topItem siteHeader-top-button site-login btn-mwv-login u-hide-mobile"
               data-track-action="mwv sign in"
               data-track-category="Utility Nav"
               data-track-label="https://my.worldvision.ca/dashboard?Lang=en"
               href="https://my.worldvision.ca/dashboard?Lang=en"
               id="btnMwvLogin-Desktop"
               style="letter-spacing: 0px"
               ><span>My World Vision Sign In</span></a
               >
            <span class="siteHeader-pipe"> | </span>
            <div aria-disabled="true" class="siteHeader-topItem site-welcomeuser">
               <span tabindex="-1">Hello</span>
            </div>
            <a
               aria-label="Shopping Cart. No item in the cart"
               class="siteHeader-basket siteHeader-top-button"
               data-track-action="cart"
               data-track-category="Utility Nav"
               data-track-label="https://donate.worldvision.ca/cart"
               data-cart-add-message="Item(s) in the basket"
               data-cart-no-items="No item in the cart"
               data-event-action="Checkout-Step 1"
               data-event-category="Ecommerce"
               data-event-label="back to cart"
               data-proc-name="header menu"
               data-proc-type="link clicked"
               href="https://donate.worldvision.ca/cart"
               tabindex=""
               >
               <span class="u-hide-mobile"
                  >Basket<span
                  class="basket-basketIndicator-text u-hide-mobile"
                  id="basket-basketIndicator-text"
                  >(0)</span
                  ></span
                  >
               <svg class="siteHeader-basketIcon u-hide-desktop">
                  <use xlink:href="#icon--basket"></use>
               </svg
                  >
            </a>
            <div class="grid-search-wrapper siteHeader-topItem">
               <div class="arrow-box">
                  <svg class="siteHeader-carrot">
                     <use xlink:href="#icon--carrot"></use>
                  </svg>
               </div>
               <div class="grid-search">
                  <div id="___gcse_0">
                     <div
                        class="gsc-control-searchbox-only gsc-control-searchbox-only-en"
                        dir="ltr"
                        >
                        <form
                           class="gsc-search-box gsc-search-box-tools"
                           accept-charset="utf-8"
                           >
                           <table
                              cellspacing="0"
                              cellpadding="0"
                              role="presentation"
                              class="gsc-search-box"
                              >
                              <tbody>
                                 <tr>
                                    <td class="gsc-input">
                                       <div class="gsc-input-box" id="gsc-iw-id1">
                                          <table
                                             cellspacing="0"
                                             cellpadding="0"
                                             role="presentation"
                                             id="gs_id50"
                                             class="gstl_50 gsc-input"
                                             style="width: 100%; padding: 0px"
                                             >
                                             <tbody>
                                                <tr>
                                                   <td id="gs_tti50" class="gsib_a">
                                                      <input
                                                         autocomplete="off"
                                                         type="text"
                                                         size="10"
                                                         class="gsc-input"
                                                         name="search"
                                                         title="search"
                                                         aria-label="Search World Vision"
                                                         id="gsc-i-id1"
                                                         dir="ltr"
                                                         spellcheck="false"
                                                         style="
                                                         width: 100%;
                                                         padding: 0px;
                                                         border: none;
                                                         margin: 0px;
                                                         height: auto;
                                                         background: url('https://www.google.com/cse/static/images/1x/en/branding.png')
                                                         left center no-repeat
                                                         rgb(255, 255, 255);
                                                         outline: none;
                                                         "
                                                         />
                                                   </td>
                                                   <td class="gsib_b">
                                                      <div class="gsst_b" id="gs_st50" dir="ltr">
                                                         <a
                                                            class="gsst_a"
                                                            href="javascript:void(0)"
                                                            title="Clear search box"
                                                            role="button"
                                                            style="display: none"
                                                            ><span
                                                            class="gscb_a"
                                                            id="gs_cb50"
                                                            aria-hidden="true"
                                                            >×</span
                                                            ></a
                                                            >
                                                      </div>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </div>
                                    </td>
                                    <td class="gsc-search-button">
                                       <button
                                          class="gsc-search-button gsc-search-button-v2"
                                          >
                                          <svg width="13" height="13" viewBox="0 0 13 13">
                                             <title>search</title>
                                             <path
                                                d="m4.8495 7.8226c0.82666 0 1.5262-0.29146 2.0985-0.87438 0.57232-0.58292 0.86378-1.2877 0.87438-2.1144 0.010599-0.82666-0.28086-1.5262-0.87438-2.0985-0.59352-0.57232-1.293-0.86378-2.0985-0.87438-0.8055-0.010599-1.5103 0.28086-2.1144 0.87438-0.60414 0.59352-0.8956 1.293-0.87438 2.0985 0.021197 0.8055 0.31266 1.5103 0.87438 2.1144 0.56172 0.60414 1.2665 0.8956 2.1144 0.87438zm4.4695 0.2115 3.681 3.6819-1.259 1.284-3.6817-3.7 0.0019784-0.69479-0.090043-0.098846c-0.87973 0.76087-1.92 1.1413-3.1207 1.1413-1.3553 0-2.5025-0.46363-3.4417-1.3909s-1.4088-2.0686-1.4088-3.4239c0-1.3553 0.4696-2.4966 1.4088-3.4239 0.9392-0.92727 2.0864-1.3969 3.4417-1.4088 1.3553-0.011889 2.4906 0.45771 3.406 1.4088 0.9154 0.95107 1.379 2.0924 1.3909 3.4239 0 1.2126-0.38043 2.2588-1.1413 3.1385l0.098834 0.090049z"
                                                ></path>
                                          </svg>
                                       </button>
                                    </td>
                                    <td class="gsc-clear-button">
                                       <div class="gsc-clear-button" title="clear results">
                                          &nbsp;
                                       </div>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <label id="lblSearch" style="display: none">Search</label>
            <label aria-live="polite" for="gsc-i-id1"
               >
               <span
                  aria-expanded="false"
                  aria-label="Open Search"
                  class="siteHeader-searchToggle siteHeader-topItem u-hide-desktop"
                  role="button"
                  tabindex=""
                  >
                  <!--<span class="u-accessible">Search</span>-->
                  <svg aria-hidden="true" tabindex="-1">
                     <use xlink:href="#icon--search"></use>
                  </svg>
                  <span aria-hidden="true" class="toggle-close">&nbsp;</span>
               </span>
            </label
               >
            <style type="text/css">
               .gscb_a {
               display: inline-block;
               font: 27px/13px arial, sans-serif;
               }
               .gsst_a .gscb_a {
               color: #a1b9ed;
               cursor: pointer;
               }
               .gsst_a:hover .gscb_a,
               .gsst_a:focus .gscb_a {
               color: #36c;
               }
               .gsst_a {
               display: inline-block;
               }
               .gsst_a {
               cursor: pointer;
               padding: 0 4px;
               }
               .gsst_a:hover {
               text-decoration: none !important;
               }
               .gsst_b {
               font-size: 16px;
               padding: 0 2px;
               position: relative;
               user-select: none;
               -webkit-user-select: none;
               white-space: nowrap;
               }
               .gsst_e {
               vertical-align: middle;
               opacity: 0.55;
               }
               .gsst_a:hover .gsst_e,
               .gsst_a:focus .gsst_e {
               opacity: 0.72;
               }
               .gsst_a:active .gsst_e {
               opacity: 1;
               }
               .gsst_f {
               background: white;
               text-align: left;
               }
               .gsst_g {
               background-color: white;
               border: 1px solid #ccc;
               border-top-color: #d9d9d9;
               box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
               -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
               margin: -1px -3px;
               padding: 0 6px;
               }
               .gsst_h {
               background-color: white;
               height: 1px;
               margin-bottom: -1px;
               position: relative;
               top: -1px;
               }
               .gsib_a {
               width: 100%;
               padding: 4px 6px 0;
               }
               .gsib_a,
               .gsib_b {
               vertical-align: top;
               }
               .gssb_c {
               border: 0;
               position: absolute;
               z-index: 989;
               }
               .gssb_e {
               border: 1px solid #ccc;
               border-top-color: #d9d9d9;
               box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
               -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
               cursor: default;
               }
               .gssb_f {
               visibility: hidden;
               white-space: nowrap;
               }
               .gssb_k {
               border: 0;
               display: block;
               position: absolute;
               top: 0;
               z-index: 988;
               }
               .gsdd_a {
               border: none !important;
               }
               .gsq_a {
               padding: 0;
               }
               .gssb_a {
               padding: 0 7px;
               }
               .gssb_a,
               .gssb_a td {
               white-space: nowrap;
               overflow: hidden;
               line-height: 22px;
               }
               #gssb_b {
               font-size: 11px;
               color: #36c;
               text-decoration: none;
               }
               #gssb_b:hover {
               font-size: 11px;
               color: #36c;
               text-decoration: underline;
               }
               .gssb_g {
               text-align: center;
               padding: 8px 0 7px;
               position: relative;
               }
               .gssb_h {
               font-size: 15px;
               height: 28px;
               margin: 0.2em;
               -webkit-appearance: button;
               }
               .gssb_i {
               background: #eee;
               }
               .gss_ifl {
               visibility: hidden;
               padding-left: 5px;
               }
               .gssb_i .gss_ifl {
               visibility: visible;
               }
               a.gssb_j {
               font-size: 13px;
               color: #36c;
               text-decoration: none;
               line-height: 100%;
               }
               a.gssb_j:hover {
               text-decoration: underline;
               }
               .gssb_l {
               height: 1px;
               background-color: #e5e5e5;
               }
               .gssb_m {
               color: #000;
               background: #fff;
               }
               .gssb_a {
               padding: 0 9px;
               }
               .gsib_a {
               padding: 5px 9px 4px 9px;
               }
               .gscb_a {
               line-height: 27px;
               }
               .gssb_e {
               border: 0;
               }
               .gssb_l {
               margin: 5px 0;
               }
               input.gsc-input::-webkit-input-placeholder {
               font-size: 14px;
               }
               input.gsc-input:-moz-placeholder {
               font-size: 14px;
               }
               input.gsc-input::-moz-placeholder {
               font-size: 14px;
               }
               input.gsc-input:-ms-input-placeholder {
               font-size: 14px;
               }
               input.gsc-input:focus::-webkit-input-placeholder {
               color: transparent;
               }
               input.gsc-input:focus:-moz-placeholder {
               color: transparent;
               }
               input.gsc-input:focus::-moz-placeholder {
               color: transparent;
               }
               input.gsc-input:focus:-ms-input-placeholder {
               color: transparent;
               }
               .gssb_c .gsc-completion-container {
               position: static;
               }
               .gssb_c {
               z-index: 5000;
               }
               .gsc-completion-container table {
               background: transparent;
               font-size: inherit;
               font-family: inherit;
               }
               .gssb_c > tbody > tr,
               .gssb_c > tbody > tr > td,
               .gssb_d,
               .gssb_d > tbody > tr,
               .gssb_d > tbody > tr > td,
               .gssb_e,
               .gssb_e > tbody > tr,
               .gssb_e > tbody > tr > td {
               padding: 0;
               margin: 0;
               border: 0;
               }
               .gssb_a table,
               .gssb_a table tr,
               .gssb_a table tr td {
               padding: 0;
               margin: 0;
               border: 0;
               }
            </style>
            <a
               aria-label="Click this icon to learn more about our commitment to customers and employees with disabilities"
               class="siteHeader-ea-icon"
               href="https://www.essentialaccessibility.com/world-vision-canada?utm_source=worldvisioncanadahomepage&amp;utm_medium=iconlarge&amp;utm_term=eachannelpage&amp;utm_content=header&amp;utm_campaign=worldvisioncanada"
               target="_blank"
               ><img
               alt="accessibility icons"
               src="/media/site-images/logo-ae.svg"
               />
            </a>
            <div
               class="site-lang-wrapper siteHeader-top-button"
               aria-expanded="false"
               >
               <a
                  aria-label="Select another language"
                  class="siteHeader-topItem site-lang"
                  role="button"
                  tabindex="0"
                  >EN
               <img
                  alt=""
                  class="chevron-icon u-hide-mobile"
                  src="/media/site-images/icon_arrow.svg"
                  />
               </a>
               <div class="drop-menu">
                  <div class="arrow-box">
                     <svg class="siteHeader-carrot">
                        <use xlink:href="#icon--carrot"></use>
                     </svg>
                  </div>
                  <div class="lang-selector-container">
                     <ul style="list-style-type: none; margin: 0; padding: 0">
                        <li>
                           <a
                              class="siteHeader-topItem site-lang siteHeader-top-button"
                              data-track-action="language"
                              data-track-category="Utility Nav"
                              data-track-label="http://visionmondiale.ca/"
                              href="http://visionmondiale.ca/"
                              aria-label="French"
                              >FR
                           </a>
                        </li>
                        <li>
                           <a
                              class="siteHeader-topItem site-lang siteHeader-top-button"
                              data-track-action="language"
                              data-track-category="Utility Nav"
                              data-track-label="http://chinese.worldvision.ca/"
                              href="http://chinese.worldvision.ca/"
                              aria-label="Chinese"
                              >中文
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="lr-login u-hide"></div>
   <div class="siteHeader-main">
      <div class="container">
         <div class="flex-container">
            <div class="combo-first">
               <div class="main-overlay"></div>
               <a
                  class="siteHeader-logoLink"
                  data-track-action="wv logo"
                  data-track-category="Navigation"
                  data-track-label="http://www.worldvision.ca/"
                  href="http://www.worldvision.ca/"
                  tabindex=""
                  >
               <img
                  id="p_lt_ctl02_Logo_ucEditableImage_imgImage"
                  title="World Vision Canada"
                  class="siteHeader-logo"
                  src="/media/site-images/wv-logo.svg"
                  alt="World Vision Canada"
                  />
               </a>
            </div>
            <div class="combo-last main-nav">
               <nav class="siteHeader-nav" role="navigation">
                  <div class="siteHeader-navExtra">
                     <div class="nav-greeting">
                        <a
                           class="siteHeader-navItem btn-mwv-login"
                           href="https://my.worldvision.ca/Home/login?lang=en"
                           id="btnMwvLogin-Mobile"
                           ><span class="ng-scope" style="letter-spacing: 0px"
                           >My World Vision Sign In</span
                           ></a
                           >
                        <div
                           aria-disabled="true"
                           class="siteHeader-navItem site-welcomeuser u-hide"
                           >
                           <span>Hello</span><span class="txtUserName">&nbsp;</span>
                        </div>
                     </div>
                     <div
                        aria-label="Close My World Vision Menu"
                        class="wrapper-close hide-nav"
                        id="btnCloseMwvMenu"
                        role="button"
                        tabindex="0"
                        >
                        <div class="siteHeader-close"></div>
                     </div>
                  </div>
                  <wvc-header-menu>
                     <!-- TopMenu Begin -->
                     <div class="newSiteHeader">
                        <div class="menu-lower-left">
                           <a
                              class="siteHeader-navItem newSiteHeader-item1"
                              data-track-action="Donate"
                              data-track-category="Navigation"
                              data-track-label="http://www.worldvision.ca/donate"
                              aria-haspopup="false"
                              href="http://www.worldvision.ca/donate"
                              >
                           Donate
                           </a>
                           <a
                              class="siteHeader-navItem newSiteHeader-item1"
                              data-track-action="Sponsor A Child"
                              data-track-category="Navigation"
                              data-track-label="http://www.worldvision.ca/sponsor-a-child"
                              aria-haspopup="false"
                              href="http://www.worldvision.ca/sponsor-a-child"
                              >
                           Sponsor A Child
                           </a>
                        </div>
                        <div class="menu-lower-right">
                           <a
                              class="siteHeader-navItem"
                              data-track-action="Shop Gifts"
                              data-track-category="Navigation"
                              data-track-label="http://www.worldvision.ca/gift-catalogue"
                              aria-haspopup="false"
                              href="http://www.worldvision.ca/gift-catalogue"
                              >
                           Shop Gifts
                           </a>
                           <a
                              class="siteHeader-navItem"
                              data-track-action="About Us"
                              data-track-category="Navigation"
                              data-track-label="http://www.worldvision.ca/about-us"
                              aria-haspopup="false"
                              href="http://www.worldvision.ca/about-us"
                              >
                           About Us
                           </a>
                           <a
                              class="siteHeader-navItem"
                              data-track-action="Our Work"
                              data-track-category="Navigation"
                              data-track-label="http://www.worldvision.ca/our-work"
                              aria-haspopup="false"
                              href="/"
                              >
                           Our Work
                           </a>
                           <a
                              class="siteHeader-navItem"
                              data-track-action="Stories"
                              data-track-category="Navigation"
                              data-track-label="http://www.worldvision.ca/stories"
                              aria-haspopup="false"
                              href="http://www.worldvision.ca/stories"
                              >
                           Stories
                           </a>
                           <a
                              class="siteHeader-navItem"
                              data-track-action="Get Involved"
                              data-track-category="Navigation"
                              data-track-label="http://www.worldvision.ca/get-involved"
                              aria-haspopup="false"
                              href="http://www.worldvision.ca/get-involved"
                              >
                           Get Involved
                           </a>
                        </div>
                     </div>
                  </wvc-header-menu>
               </nav>
               <div class="combo-last">
                  <div
                     class="siteHeader-hamburger"
                     role="button"
                     aria-label="Open mobile menu"
                     tabindex=""
                     >
                     <div class="siteHeader-hamburgerInner" aria-hidden="true"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</header>

`

const GlobalNavBar = () => {
  return <div dangerouslySetInnerHTML={{ __html: headerHTML }} />
}

export default GlobalNavBar
