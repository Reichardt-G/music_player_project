// Variáveis de HTML
const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

// Músicas
const songs = ["hey", "summer", "ukulele"];

// Rastrear músicas
let songIndex = 2;

// Inicialmente carregar detalhes da música
loadSong(songs[songIndex]);

// Carregar música
function loadSong(song) {
    title.innerText = song;
    audio.src = "music/" + song + ".mp3";
    cover.src = "images/" + song + ".jpg";
}

// Tocar música
function playSong() {
    musicContainer.classList.add("play");
    playBtn.querySelector("i.fas").classList.remove("fa-play");
    playBtn.querySelector("i.fas").classList.add("fa-pause");
    audio.play();
}

// Pausar música
function pauseSong() {
    musicContainer.classList.remove("play");
    playBtn.querySelector("i.fas").classList.add("fa-play");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");
    audio.pause();
}

// Função que alterna entre play e pause no botão central da tela
function playOrPause() {
    const isPlaying = musicContainer.classList.contains("play");

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

// Botão 'música anterior' prevBtn
function prevSong() {
    if (songIndex > 0) {
        songIndex--;
    } else {
        // Se estiver na primeira música do array, o botão 'previous' levará para a última
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);
    playSong();
}

// Botão 'próxima música' nextBtn
function nextSong() {
    if (songIndex < songs.length - 1) {
        songIndex++;
    } else {
        // Se estiver na última música do array, o botão 'next' levará para a primeira
        songIndex = 0;
    }

    loadSong(songs[songIndex]);
    playSong();
}

// Event Lisneters
playBtn.addEventListener("click",playOrPause);
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);