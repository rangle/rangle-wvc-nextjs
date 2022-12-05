/*jshint esversion: 6 */

// import { isMobile } from 'is-mobile';

function createVideoContainers() {
  const videos = [].slice.call(document.querySelectorAll('[data-video]','[data-start-time]', '[data-end-time]', '[data-modestbranding]', '[data-controls]'), '[data-playlist]');
  if (videos.length) {
    return videos.map(function (video) {
      const videoId = video.dataset.video;
      const videoControl = video.dataset.controls;
      const videoModestBranding = video.dataset.modestbranding;
      const strtT = video.dataset.startTime;
      const endT = video.dataset.endTime;
      const playList = video.dataset.playlist;
      const el = document.createElement('div');
      el.setAttribute("id", 'yt_player_' + video.dataset.video);

      video.appendChild(el);

      return {
        videoID: videoId,
        endpTime: endT,
        startpTime: strtT,
        ytPlaylist: playList,
        vmodest: videoModestBranding,
        vidControl: videoControl,
        elID: 'yt_player_' + video.dataset.video
      };
    });
  }
  return false;
}

// Load a new video into the player
function loadVideo(player, videoId) {
  window[player].loadVideoById(videoId);
}

function playVideo(player) {
  // if (!isMobile()) {
  //   if (window[player].isMuted()) {
  //     window[player].unMute();
  //   }
    //window[player].seekTo(0);
    window[player].setVolume(100);
    window[player].playVideo();
  // }
}

function pauseVideo(player) {
  window[player].pauseVideo();
}

function playBtnListener(btn) {
  btn.classList.add('active');

  btn.addEventListener('click', function(e){
    e.preventDefault();
    const videoId = 'yt_player_' + btn.dataset.playerId.substr(1);
    playVideo(videoId);
    btn.classList.add('playing');
  if( !!window.MSInputMethodContext && !!document.documentMode)
  {
     btn.style.visibility = "hidden";
  }

  });
}

function getVideoPlayButtons(target) {
  var vid = target.getVideoData().video_id;
  return [].slice.call(document.querySelectorAll("[data-player-id=a".concat(vid, "]")));
}

function onPlayerReady(ev) {
  const playButtons = getVideoPlayButtons(ev.target);

  if (playButtons.length) {
    playButtons.forEach(function(btn){
      playBtnListener(btn);
    });
  }
}

function onPlayerStateChange(ev) {
  if (ev.data == YT.PlayerState.ENDED) {
    const playButtons = getVideoPlayButtons(ev.target);
    if (playButtons.length) {
      playButtons.forEach(function(btn){
        btn.classList.remove('playing');
      });
    }
  }
}

function onYouTubePlayerAPIReady() {
  if (!window.ytContainers.length) return;

  window.ytPlayers = [];

  window.ytContainers.forEach(function (ytContainer) {
   const lang = document.getElementsByTagName('html')[0].getAttribute('lang');
    window[ytContainer.elID] = new window.YT.Player(ytContainer.elID, {
      playerVars: {
        modestbranding: ytContainer.vmodest,
        controls: ytContainer.vidControl,
        //list: ytContainer.ytPlaylist,
        rel: 0,
        loop: 1,
        showinfo: 0,
        start: ytContainer.startpTime,
        end: ytContainer.endpTime,
        playsinline: 1,
        hl: lang,
        // origin: '${window.location}'
        origin: window.location
      },
      videoId: ytContainer.videoID,
      //host: '${window.location.protocol}//www.youtube.com',
      host: window.location.protocol + '//www.youtube.com',
      events: {
        'onReady': onPlayerReady,
        //'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
        'onStateChange': onPlayerStateChange,
        //'onError': onPlayerError
      },
    });

    //window.ytPlayers.push(player);
  });
  
}

function yt_video_init() {

  window.ytContainers = createVideoContainers();

  // inject YouTube JS
  if (!document.getElementById('ytApi')) {
    console.log('Injecting YouTube API Script!');
    const script = document.createElement('script');
    script.id = 'ytApi';
    script.src = 'https://www.youtube.com/player_api';
    document.body.appendChild(script);
  }

  window.onYouTubePlayerAPIReady = onYouTubePlayerAPIReady;
}

yt_video_init();
// export default init;

function clickPlay(videoId){
  var vidUniuqeId = $('.youtube-video').attr("data-video");
  $("#" +vidUniuqeId).show();
}