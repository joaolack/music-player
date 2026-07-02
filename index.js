const songName = document.getElementById("song-name");
const artistName = document.getElementById("artist-name");
const cover = document.getElementById("cover");
const song = document.getElementById("audio");
const like = document.getElementById("like");
const play = document.getElementById("play");
let isPlaying = false;
let isLiked = false;

songName.innerText = "Slide Away - Remastered";
artistName.innerText = "Oasis";

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

play.addEventListener('click', playPauseDecider);
like.addEventListener('click', likedDecider);


