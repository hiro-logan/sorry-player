let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: 'fRh_vgS2dFE', // Justin Bieber - Sorry
    playerVars: {
      autoplay: 0,
      controls: 0
    },
    events: {
      onReady: function () {
        document.getElementById('playButton').disabled = false;
        setVolumeFromSlider(); // Set initial volume
      }
    }
  });
}

function playSorry() {
  player.playVideo();
}

function setVolumeFromSlider() {
  const volumeSlider = document.getElementById("volumeSlider");
  const volume = volumeSlider.value;
  // YouTube player expects volume as 0–100
  if (player && player.setVolume) {
    player.setVolume(volume);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("volumeSlider").addEventListener("input", setVolumeFromSlider);
});
