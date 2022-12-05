
function fireDataTrackEvent(category, action, label) {
    if (typeof utag_data == 'undefined') utag_data = [];
    utag_data.event_category = category;
    utag_data.event_action = action;
    utag_data.event_label = label;
    procEvent("hunger_free", "");
}

var player;
var playbackTimer = null;
var videoDuration = 0;
var playbackMarkInSec = [];
var videoPlayed = false;
var videoTitle;
function onYouTubeIframeAPIReady() {
    //creates the player object
    player = new YT.Player('hunger-free-video', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
        }
    });

    function onPlayerReady(event) {
        if (playbackTimer !== null) {
            clearInterval(playbackTimer);
        }
        videoDuration = player.getDuration();
        playbackMarkInSec = [Math.round(0.25 * videoDuration),
            Math.round(0.50 * videoDuration),
            Math.round(0.75 * videoDuration),
            videoDuration];
        videoPlayed = false;
        videoTitle = player.getVideoData().title;
    }
    
    function onPlayerStateChange(event) {
        switch (event.data) {
            case YT.PlayerState.UNSTARTED: break;
            case YT.PlayerState.ENDED:
                clearInterval(playbackTimer);
                playbackTimer = null;
                fireDataTrackEvent("video", "100% completed", videoTitle);
                break;
            case YT.PlayerState.PLAYING:
                if (videoPlayed === false) {
                    videoPlayed = true;
                    fireDataTrackEvent("video", "play", videoTitle);
                }

                if (playbackTimer !== null) {
                    clearInterval(playbackTimer);
                    playbackTimer = null;
                }

                playbackTimer = setInterval(function () {
                    var currentTime = Math.round(player.getCurrentTime());
                    for (var i = 0; i < playbackMarkInSec.length - 1; i++) {
                        if (currentTime == playbackMarkInSec[i]) {
                            fireDataTrackEvent("video", (i + 1) * 25 + "% completed", videoTitle);
                            break;
                        }
                    }
                }, 1000);
                
                break;
            case YT.PlayerState.PAUSED:
                clearInterval(playbackTimer);
                playbackTimer = null;
                break;
        }
    }
}

$("*[data-track-category][data-track-action][data-track-label]").click(function () {
    fireDataTrackEvent($(this).attr("data-track-category"), $(this).attr("data-track-action"), $(this).attr("data-track-label"));
});