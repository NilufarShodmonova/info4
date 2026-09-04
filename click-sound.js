/* Click sound for every button — plays click.mp3 at 60% volume.
   Keep click-sound.js and click.mp3 next to index.html. */
(function () {
  var CLICK_VOLUME = 0.6;
  var CLICK_SRC = 'click.mp3';
  var CLICKABLE = 'button, .lang-btn, .home-btn, .lightbox-close, .tl-card, [onclick]';

  var clickSound = new Audio(CLICK_SRC);
  clickSound.volume = CLICK_VOLUME;
  clickSound.preload = 'auto';

  function playClick() {
    try {
      var s = clickSound.cloneNode();
      s.volume = CLICK_VOLUME;
      var p = s.play();
      if (p && p.catch) p.catch(function () {});
    } catch (e) {}
  }

  document.addEventListener('pointerdown', function (e) {
    if (e.target && e.target.closest && e.target.closest(CLICKABLE)) playClick();
  }, true);

  window.playClick = playClick;
})();
