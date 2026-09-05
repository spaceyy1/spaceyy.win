// if your gonna skid this, plz credit me - spaceyy1 (aka. frost)
let titleText = "frost.one";
let opacity = 0;
let fadeIn = true;
let delay = 0.003;
const audio = document.getElementById("enter-sound");
const fade = document.getElementById("lowtaperfade");
const progressBar = document.getElementById("progress-bar");
const progressContainer = document.getElementById("progress-container");
const bootPanel = document.querySelector('.boot-panel');
const bootLines = Array.from(document.querySelectorAll('.boot-lines > div'));
const music = {
  "tracks": [
    {
      "title": "Special Place",
      "audio": "/stuff/other/songs/specialplace.mp3",
      "artist": "Bladee",
      "id": 0,
      "cover": "/stuff/other/tracks/photos/specialplace.jpg"
    },
    {
      "title": "BIRDBRAIN",
      "audio": "/stuff/other/songs/birdbrain.mp3",
      "artist": "Kasane Teto, OK Glass, Jamie Paige",
      "volume": .3,
      "id": 1,
      "cover": "/stuff/other/tracks/photos/birdbrain.jpg"
    },
    {
      "title": "misery.",
      "audio": "/stuff/other/songs/misery.mp3",
      "artist": "Pupsies",
      "id": 2,
      "cover": "/stuff/other/tracks/photos/misery.jpg"
    },
    {
      "title": "so bitter",
      "audio": "/stuff/other/songs/sobitter.mp3",
      "artist": "Stxlkin",
      "id": 3,
      "cover": "/stuff/other/tracks/photos/sobitter.jpg"
    },
    {
      "title": "Soul Tie",
      "audio": "/stuff/other/songs/soultie.mp3",
      "artist": "jalenrekt, QKReign",
      "id": 4,
      "cover": "/stuff/other/tracks/photos/soultie.jpg"
    },
    {
      "title": "Tek It",
      "audio": "/stuff/other/songs/tekit.mp3",
      "artist": "Cafuné",
      "id": 5,
      "cover": "/stuff/other/tracks/photos/tekit.jpg"
    },
    {
      "title": "IN MY HEAD",
      "audio": "/stuff/other/songs/inmyhead.mp3",
      "artist": "SUPXR",
      "id": 6,
      "cover": "https://frogiee.one/stuff/tracks/inmyhead.png"
    },
    {
      "title": "shoutout skeleton for this mel",
      "audio": "/stuff/other/songs/ssfrtm.mp3",
      "artist": "up!r",
      "id": 6,
      "cover": "/stuff/other/tracks/photos/ssfrtm.jpg"
    }
  ]
}
let enterSound = document.getElementById('enter-sound');
const songid = Math.floor(Math.random() * music.tracks.length)
const title = document.getElementById("songtitle");
const artist = document.getElementById("songartist");
const cover = document.getElementById("albumcover");
title.innerText = music.tracks[songid].title;
artist.innerText = music.tracks[songid].artist;
cover.src = music.tracks[songid].cover;
if (music.tracks[songid].volume){
  enterSound.volume = music.tracks[songid].volume;
}
else {
  enterSound.volume = .8;
}
enterSound.src = music.tracks[songid].audio;

function getTrackFromAudio() {
  const src = audio.currentSrc || audio.src;
  return music.tracks.find(track =>
    src.endsWith(track.audio)
  ) || null;
}

function getPlayPauseIcon(isPlaying) {
    if (isPlaying) {
        return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3v14H7zm7 0h3v14h-3z" fill="currentColor"/></svg>';
    }
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5l11 7-11 7V5z" fill="currentColor"/></svg>';
}

function switchmusic(id){
    const musicelement = document.getElementById("enter-sound");
    const title = document.getElementById("songtitle");
    const artist = document.getElementById("songartist");
    const cover = document.getElementById("albumcover");
    const button = document.getElementsByClassName("play")[0];
    title.innerText = music.tracks[id].title;
    artist.innerText = music.tracks[id].artist;
    cover.src = music.tracks[id].cover;
    musicelement.src = music.tracks[id].audio;
    if (music.tracks[id].volume){
      musicelement.volume = music.tracks[id].volume;
    }
    else {
      musicelement.volume = .8;
    }
    musicelement.play();
    button.innerHTML = getPlayPauseIcon(true);
    button.setAttribute('aria-label', 'Pause music');
}
function forward(){
    const musicelement = document.getElementById("enter-sound");
    const title = document.getElementById("songtitle");
    const artist = document.getElementById("songartist");
    const cover = document.getElementById("albumcover");
    const currentsong = getTrackFromAudio()
    if (currentsong.id === 14){
      title.innerText = music.tracks[0].title;
      artist.innerText = music.tracks[0].artist;
      cover.src = music.tracks[0].cover;
      musicelement.src = music.tracks[0].audio;
      musicelement.volume = .8;
      musicelement.play();
    }
    else{
      title.innerText = music.tracks[currentsong.id + 1].title;
      artist.innerText = music.tracks[currentsong.id + 1].artist;
      cover.src = music.tracks[currentsong.id + 1].cover;
      musicelement.src = music.tracks[currentsong.id + 1].audio;
      if (music.tracks[currentsong.id + 1].volume){
        musicelement.volume = music.tracks[currentsong.id + 1].volume;
      }
      else {
        musicelement.volume = .8;
      }
      musicelement.play();
    }
}
function rewind(){
    const musicelement = document.getElementById("enter-sound");
    const title = document.getElementById("songtitle");
    const artist = document.getElementById("songartist");
    const cover = document.getElementById("albumcover");
    const currentsong = getTrackFromAudio()
    if (currentsong.id === 13){
      title.innerText = music.tracks[7].title;
      artist.innerText = music.tracks[7].artist;
      cover.src = music.tracks[7].cover;
      musicelement.src = music.tracks[7].audio;
      musicelement.volume = .8;
      musicelement.play();
    }
    else{
      title.innerText = music.tracks[currentsong.id - 1].title;
      artist.innerText = music.tracks[currentsong.id - 1].artist;
      cover.src = music.tracks[currentsong.id - 1].cover;
      musicelement.src = music.tracks[currentsong.id - 1].audio;
      if (music.tracks[currentsong.id - 1].volume){
        musicelement.volume = music.tracks[currentsong.id - 1].volume;
      }
      else {
        musicelement.volume = .8;
      }
      musicelement.play();
    }
}
function togglePlay() {
  const music = document.getElementById("enter-sound");
  const button = document.getElementsByClassName("play")[0];
  if (music.paused) {
    music.play();
    button.innerHTML = getPlayPauseIcon(true);
    button.setAttribute('aria-label', 'Pause music');
  } else {
    music.pause();
    button.innerHTML = getPlayPauseIcon(false);
    button.setAttribute('aria-label', 'Play music');
  }
}
function updateTitle() {
    let displayText = titleText.charAt(0) + titleText.slice(1, Math.floor(opacity * (titleText.length - 1)) + 1);
    document.title = displayText;

    if (fadeIn) {
        opacity += delay;
        if (opacity >= 1) {
            fadeIn = false;
        }
    } else {
        opacity -= delay;
        if (opacity <= 0) {
            fadeIn = true;
        }
    }

    requestAnimationFrame(updateTitle);
}

audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;

  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;
});
progressContainer.addEventListener("click", (e) => {
  const rect = progressContainer.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const percent = Math.max(0, Math.min(1, x / rect.width));

  audio.currentTime = percent * audio.duration;
});
const entersoundrizz = document.getElementById("enter-sound");
            const context = new AudioContext();
            var src = context.createMediaElementSource(entersoundrizz);
            var analyser = context.createAnalyser();
        
            var canvas = document.getElementById("canvas");
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            var ctx = canvas.getContext("2d");
        
            src.connect(analyser);
            analyser.connect(context.destination);
            analyser.fftSize = 256;
        
            var bufferLength = analyser.frequencyBinCount;
            console.log(bufferLength);
        
            var dataArray = new Uint8Array(bufferLength);
        
            var WIDTH = canvas.width;
            var HEIGHT = canvas.height;
        
            var barWidth = (WIDTH / bufferLength) * 1.5;
            var barHeight;
            var x = 0;
        
            function renderFrame() {
              requestAnimationFrame(renderFrame);
              x = 0;
              analyser.getByteFrequencyData(dataArray);
              ctx.clearRect(0, 0, WIDTH, HEIGHT);
              for (var i = 0; i < bufferLength; i++) {
                barHeight = dataArray[i] * 1.5;
                const brightness = Math.min(255, 110 + barHeight * 1.2);
                ctx.fillStyle = "rgb(" + brightness + "," + brightness + "," + brightness + ")";
                ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
                x += barWidth + 1;
              }
            }
            renderFrame();
const dataArray2 = new Uint8Array(analyser.frequencyBinCount);
const BASS_BINS = 20;
const MAX_OPACITY = 0.7;
const MIN_OPACITY = 0.0;
function updateOpacity() {
  analyser.getByteFrequencyData(dataArray);
  let sum = 0;
  for (let i = 0; i < BASS_BINS; i++) {
    sum += dataArray[i];
  }
  let bass = (sum / BASS_BINS) / 255;
  bass = Math.min(1, bass);
  bass = Math.pow(bass, 1.6);
  const opacity = MAX_OPACITY - bass * (MAX_OPACITY - MIN_OPACITY);

  fade.style.opacity = opacity.toFixed(3);
}
setInterval(updateOpacity, 8); 
function runBootSequence() {
  bootLines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add('is-visible');
      if (index === bootLines.length - 1) {
        setTimeout(() => {
          bootPanel.classList.add('ready');
        }, 700);
      }
    }, 400 + index * 550);
  });
}

function enter() {
    let enterPopup = document.getElementById('enter-popup');
    context.resume();
    enterSound.play();
    enterPopup.style.transition = 'all 0.3s ease';
    enterPopup.style.opacity = '0';
    setTimeout(() => {
        enterPopup.style.display = 'none';
    }, 500); 

    requestAnimationFrame(updateTitle);
};

runBootSequence();
// page things

fetch("https://api.frogiee1.com/api/frogiesarcade")
  .then(res => res.json())
  .then(data => {
    const userCount = document.getElementById("frogiesarcadeusercount");
    if (!userCount) return;

    if (data.online) {
      userCount.innerText = `users online: ${data.online}`
    } else {
      userCount.innerText = `couldn't get user count`
    }
});

fetch("https://api.frogiee1.com/api/xenamc")
  .then(res => res.json())
  .then(data => {
    const playerCount = document.getElementById("xenaplayercount");
    if (!playerCount) return;

    if (data.online) {
      playerCount.innerText = `players online: ${data.players}/1000`
    } else {
      playerCount.innerText = `couldn't get player count`
    }
});
