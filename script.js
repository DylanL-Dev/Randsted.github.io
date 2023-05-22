// Nav barre annimation
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
// End Nav barre annimation

// lanceur video au clik

const videos = document.querySelectorAll('.myVideo');

videos.forEach(function(video) {
  video.addEventListener('click', function() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});
