
window.procEvent = function (event, eventName, eventCategory, eventAction, eventLabel, eventValue, eventNonInteraction) {
    switch (event) {
        case "sponsorship":
            var labels = [];
            if ("" !== utag_data.search_filter_sponsor_gender && "Any Gender" !== utag_data.search_filter_sponsor_gender) {
                labels.push("gender:" + utag_data.search_filter_sponsor_gender);
            } else {
                labels.push("gender:any");
            }

            if ("" !== utag_data.search_filter_sponsor_age && "Any Age" !== utag_data.search_filter_sponsor_age) {
                labels.push("age:" + utag_data.search_filter_sponsor_age);
            } else {
                labels.push("age:any");
            }

            if ("" !== utag_data.search_filter_sponsor_country && "Any Country" !== utag_data.search_filter_sponsor_country) {
                labels.push("country:" + utag_data.search_filter_sponsor_country);
            } else {
                labels.push("country:any");
            }

            dataLayer.push({
                event: "Website Events",
                event_category: "search",
                event_action: "sponsor a child - success",
                event_label: labels.join(" / "),
                event_value: eventValue,
                event_non_interactive: eventNonInteraction
            });

            break;

        case "UDO_dom_ready":
            break;

        default:
            dataLayer.push({
                event: "Website Events",
                event_category: eventCategory,
                event_action: eventAction,
                event_label: eventLabel,
                event_value: eventValue,
                event_non_interactive: eventNonInteraction
            });
    }

    //dataLayer.push(event, eventName);

    if (typeof utag_data == 'undefined') utag_data = [];
    utag_data.event_category = void 0;
    utag_data.event_action = void 0;
    utag_data.event_label = void 0;
    utag_data.event_value = void 0;
    utag_data.event_non_interactive = 0;
};

function fireDataTrackEvent(category, action, label) {
    //if (typeof utag_data == 'undefined') utag_data = [];
    //utag_data.event_category = category;
    //utag_data.event_action = action;
    //utag_data.event_label = label;
    //procEvent("", "");
    procEvent(null, null, category, action, label, null);
}

//function onYouTubeIframeAPIReady() {
if (window.onYouTubeIframeAPIReady_ === undefined) {
    window.onYouTubeIframeAPIReady_ = [];
}


window.onYouTubeIframeAPIReady_.push(function () {
    // creates the player object per video
    videos = $("*[id^='dtv-']").toArray();

    videos.forEach(function (elemVideo) {
        var id_video = $(elemVideo).attr('id');
        var player = new YT.Player(id_video, {
            videoId: id_video.replace('dtv-', ''),
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange,
            }
        });
        videos[id_video] = {};
        videos[id_video].player = player;
        videos[id_video].playbackTimer = null;
        videos[id_video].videoDuration = 0;
        videos[id_video].playbackMarkInSec = [];
        videos[id_video].videoPlayed = false;
        videos[id_video].videoTitle = "";
    });

    function onPlayerReady(event) {
        var id_video = event.target.getIframe().id;

        if (videos[id_video].playbackTimer !== null) {
            clearInterval(videos[id_video].playbackTimer);
        }
        videos[id_video].videoDuration = event.target.getDuration();
        videos[id_video].playbackMarkInSec = [Math.round(0.25 * videos[id_video].videoDuration),
        Math.round(0.50 * videos[id_video].videoDuration),
        Math.round(0.75 * videos[id_video].videoDuration),
        videos[id_video].videoDuration];
        videos[id_video].videoPlayed = false;
        videos[id_video].videoTitle = event.target.getVideoData().title;
    }

    function onPlayerStateChange(event) {
        var id_video = event.target.getIframe().id;

        switch (event.data) {
            case YT.PlayerState.UNSTARTED: break;
            case YT.PlayerState.ENDED:
                clearInterval(videos[id_video].playbackTimer);
                videos[id_video].playbackTimer = null;
                fireDataTrackEvent("video", "100% completed", videos[id_video].videoTitle);
                break;
            case YT.PlayerState.PLAYING:
                if (videos[id_video].videoPlayed === false) {
                    videos[id_video].videoPlayed = true;
                    fireDataTrackEvent("video", "play", videos[id_video].videoTitle);
                }

                if (videos[id_video].playbackTimer !== null) {
                    clearInterval(videos[id_video].playbackTimer);
                    videos[id_video].playbackTimer = null;
                }

                videos[id_video].playbackTimer = setInterval(function () {
                    var currentTime = Math.round(event.target.getCurrentTime());
                    for (var i = 0; i < videos[id_video].playbackMarkInSec.length - 1; i++) {
                        if (currentTime == videos[id_video].playbackMarkInSec[i]) {
                            fireDataTrackEvent("video", (i + 1) * 25 + "% completed", videos[id_video].videoTitle);
                            break;
                        }
                    }
                }, 1000);

                break;
            case YT.PlayerState.PAUSED:
                clearInterval(videos[id_video].playbackTimer);
                videos[id_video].playbackTimer = null;
                break;
        }
    }
});

$("*[data-track-category][data-track-action][data-track-label]").click(function () {
    fireDataTrackEvent($(this).attr("data-track-category"), $(this).attr("data-track-action"), $(this).attr("data-track-label"));
});




/* Tealium Events */
$('.js-sponsor-a-child').click(function () {

    if (typeof utag_data == 'undefined') utag_data = [];
    utag_data.search_category = ' sponsor a child ';
    utag_data.search_filter_sponsor_gender = $('#ddlGender').val();
    utag_data.search_filter_sponsor_age = $('#ddlAge').val();
    utag_data.search_filter_sponsor_country = $('#ddlCountry').val();

    procEvent("sponsorship", "form submit");

});

function donateButtonClick(buttonText, containerClass, productId, productName) {
    var amountClass = '.' + containerClass + ' .donation-widget_ammount';
    var donationAmount = $(amountClass).val();
    var frequencyClass = '.' + containerClass + ' .donation-widget_select';
    var frequencySetting = 'SG';

    if ($(frequencyClass).length > 0)
        frequencySetting = $(frequencyClass).val();
    
    if (typeof utag_data == 'undefined') utag_data = [];

    var brand = "";
    if (frequencySetting == 'SG')
        brand = 'One Time Donation';
    else if (frequencySetting == 'CP')
        brand = 'Pledge';

    utag_data.product_brand = brand;
    utag_data.product_category = "non-sponsorship";
    utag_data.product_id = productId;
    utag_data.product_list = "Donations";
    utag_data.product_name = productName;
    utag_data.product_position = "1";
    utag_data.product_price = donationAmount;

    procEvent(buttonText, "form submit");
}
