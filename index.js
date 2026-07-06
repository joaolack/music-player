const songName = document.getElementById("song-name");
const artistName = document.getElementById("artist-name");
const cover = document.getElementById("cover");
const song = document.getElementById("audio");
const like = document.getElementById("like");
const play = document.getElementById("play");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const progressContainer = document.getElementById("progress-container");
const currentProgress = document.getElementById("current-progress");

let isPlaying = false;
let isLiked = false;

const slideAway = {
    song: 'Slide Away - Remastered',
    artist: 'Oasis',
    cover: 'oasis-capa-definitely-maybe',
    audio: 'slide-away'
}

const attitude = {
    song: 'Attitude',
    artist: 'Sepultura',
    cover: 'roots',
    audio: 'attitude'
}

const cafe = {
    song: 'Cafe',
    artist: 'BIGBANG',
    cover: 'cafe',
    audio: 'cafe'
}

const mrMr = {
    song: 'Mr.Mr.',
    artist: 'Girls\' Generation',
    cover: 'mrmrjpeg',
    audio: 'mrmr'
}

const playlist = [slideAway, attitude, cafe, mrMr];
let index = 0;

function playSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}

function pauseSong(){
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    song.pause();
    isPlaying = false;
}

function playPauseDecider(){
    if ( isPlaying === true){
        pauseSong();
    }
    else {
        playSong();
    }
}

function likeSong(){
    like.querySelector('.bi').classList.remove('bi-heart');
    like.querySelector('.bi').classList.add('bi-heart-fill');
    isLiked = true;
}

function dislikeSong(){
    like.querySelector('.bi').classList.remove('bi-heart-fill');
    like.querySelector('.bi').classList.add('bi-heart');
    isLiked = false;
}

function likedDecider(){
    if (isLiked === true){
        dislikeSong();
    } else {
        likeSong();
    }
}

function initializeSong() {
    cover.src = `images/${playlist[index].cover}.jpg`;
    song.src = `audios/${playlist[index].audio}.mp3`;
    songName.innerHTML = playlist[index].song;
    artistName.innerHTML = playlist[index].artist;
}

function previousSong() {
    if (index === 0) {
        index = playlist.length - 1;
    } else {
        index -= 1;
    }
    initializeSong();
    playSong();
}

function nextSong() {
    if (index === playlist.length - 1) {
        index = 0;
    } else {
        index += 1;
    }
    initializeSong();
    playSong();
}

function updateProgressBar() {
    const barWidth = (song.currentTime/song.duration) * 100;
    currentProgress.style.setProperty('--progress', `${barWidth}%`); 
}

function jumpTo(event) {
    const width = progressContainer.clientWidth;
    const clickPosition = event.offsetX;
    const jumpToTime = (clickPosition/width) * song.duration;
    song.currentTime = jumpToTime;
}

initializeSong();

play.addEventListener('click', playPauseDecider);
like.addEventListener('click', likedDecider);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);
song.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', jumpTo);
