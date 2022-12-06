var chatUrl = 'https://chat.worldvision.ca/I3Root/WVC_Chat/WVC_Chat_Main.html?WORKGROUP=CHT%20Customer%20Service&FIRSTNAME=&LASTNAME=&EMAIL=&SKILL=Web%20Chat%20English&PAGE=Contact Us';

$(document).ready(function () {
    if (!String.prototype.includes) {
        String.prototype.includes = function (search, start) {
            'use strict';
            if (typeof start !== 'number') {
                start = 0;
            }

            if (start + search.length > this.length) {
                return false;
            } else {
                return this.indexOf(search, start) !== -1;
            }
        };
    }

    //check if the chat application is online
    $.get('https://my.worldvision.ca/api/wc/workgroupavailability/CHT%20Customer%20Service',
        function (onlinestatus) {
            //data comes in as a bool
            if (onlinestatus == "success") {
                // Activate the button on Contact-Us page. 
                if ($('.smallchat-enable').length) {
                    $('.smallchat-enable').addClass('button--orange');
                    $('.smallchat-enable').removeClass('smallchat-offline');
                    $(".smallchat-enable").html("<i class='fa fa-comments' aria-hidden='true'></i>&nbsp;LIVE CHAT");

                    //enable the click on the item
                    $('.smallchat-enable').bind('click', function (e) {
                        if ($(this).attr("class").includes("smallchat-enable")) {
                            window.open(chatUrl, '', 'width=750,height=520');
                        }
                        e.preventDefault();
                        return false;
                    });
                }
                // Activate button on footer. 
                if ($('#footer-livechat').length) {
                    $('#footer-livechat').bind('click', function (e) {
                        window.open(chatUrl, '', 'width=750,height=520');
                        e.preventDefault();
                    });
                    $('#footer-livechat').removeClass('hidden');
                }
            }
        });
});
