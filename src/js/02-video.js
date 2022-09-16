import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iFrameRef = document.querySelector('#vimeo-player');
const player = new Player(iFrameRef);
const STORAGE_KEY = 'videoplayer-current-time';
const time = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (time) {
  player.setCurrentTime(time.seconds);
}

player.on(
  'timeupdate',
  throttle(function (seconds) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seconds));
    console.log(JSON.stringify(seconds));
  }, 1000)
);
