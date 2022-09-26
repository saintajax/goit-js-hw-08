import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iFrameRef = document.querySelector('#vimeo-player');
const player = new Player(iFrameRef);
const STORAGE_KEY = 'videoplayer-current-time';
const time = localStorage.getItem(STORAGE_KEY);

if (time) {
  player.setCurrentTime(time);
}

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem(STORAGE_KEY, seconds);
    console.log(seconds);
  }, 1000)
);
