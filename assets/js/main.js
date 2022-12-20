const music = document.getElementById("song");
const songs = [
  {
    name: `<h4>OK</h4>
     <p>Binz</p>`,
    imgaes: "./assets/images/img1.png",
    song: "assets/music/OK.mp3",
  },

  {
    name: `<h4>Waiting For You</h4>
    <p>Avicii</p>`,
    imgaes: "./assets/images/img2.png",
    song: "assets/music/Waiting_For_Love.mp3",
  },

  {
    name: `<h4>Monsters</h4>
    <p>Katie Sky</p>`,
    imgaes: "./assets/images/img3.png",
    song: "assets/music/Monsters.mp3",
  },

  {
    name: `<h4>Unstoppable</h4>
      <p>Sia</p>`,
    imgaes: "./assets/images/img4.png",
    song: "assets/music/Unstoppable.mp3",
  },

  {
    name: `<h4>Despacito</h4>
    <p>Luis Fonsi</p>`,
    imgaes: "./assets/images/img5.png",
    song: "assets/music/Despacito.mp3",
  },

  {
    name: `<h4>Natural</h4>
    <p>Imagine Dragons</p>`,
    imgaes: "./assets/images/img6.png",
    song: "assets/music/Natural.mp3",
  },

  {
    name: `<h4>Believer</h4>
    <p>Imagine Dragons</p>`,
    imgaes: "./assets/images/img7.png",
    song: "assets/music/Believer.mp3",
  },

  {
    name: `<h4>See You Again</h4>
    <p>Wiz Khlifa</p>`,
    imgaes: "./assets/images/img8.png",
    song: "assets/music/See_You_Again.mp3",
  },

  {
    name: `<h4>Faded</h4>
    <p>Alan Walker</p>`,
    imgaes: "./assets/images/img9.png",
    song: "assets/music/Faded.mp3",
  },

  {
    name: `<h4>Don't Let Me Down</h4>
    <p>The Chainsmokers</p>`,
    imgaes: "./assets/images/img10.png",
    song: "assets/music/Dont.mp3",
  },
];
const play = document.querySelector(".play");
const next = document.querySelector(".play-next");
const prev = document.querySelector(".play-back");
const durationTime = document.querySelector(".duration");
const remainingTime = document.querySelector(".remaining");
const progress = document.querySelector("#progress-bar");
const range = document.querySelector(".range");
displayTimer();
const timer = setInterval(displayTimer, 500);
const nameSong = document.querySelectorAll(".item .name-song");
const mix = document.querySelector(".mix");
const repeat = document.querySelector(".repeat");
const volumeMusic = document.querySelector("#volume-music");
const volumeText = document.querySelector(".volume-text");
const progressBar = document.querySelector("#progress");
const itemImg = document.querySelectorAll(".item");

let indexSong = 0;
let iSplaying = true;
let repeated = false;
let iSMix = false;
// Play
play.addEventListener("click", playPause);
function playPause() {
  if (iSplaying) {
    music.play();
    iSplaying = false;
    play.innerHTML = `<span class="material-symbols-outlined">pause</span>`;
    setInterval(displayTimer, 500);
  } else {
    music.pause();
    iSplaying = true;
    play.innerHTML = `<span class="material-symbols-outlined ">play_arrow</span>`;
    clearInterval(timer);
  }
}
// Repeat
repeat.addEventListener("click", Repeats);
function Repeats() {
  if (repeated) {
    repeated = false;
    repeat.style.color = "#000000";
    repeat.style.opacity = ".5";
  } else {
    repeated = true;
    repeat.style.color = "#27AE60";
    repeat.style.opacity = "1";
  }
}
//Mix
mix.addEventListener("click", function () {
  if (iSMix) {
    iSMix = false;
    mix.style.color = "#000000";
    mix.style.opacity = ".5";
  } else {
    iSMix = true;
    mix.style.color = "#27AE60";
    mix.style.opacity = "1";
  }
});
music.addEventListener("ended", function () {
  if (repeated) {
    iSplaying = true;
    playPause();
  } else if (iSMix) {
    indexSong = Math.floor(Math.random() * 10) + 1;
    music.setAttribute("src", `${songs[indexSong].song}`);
    document.getElementById("name").innerHTML = `${songs[indexSong].name}`;
    document
      .querySelector(".music-img")
      .setAttribute("src", `${songs[indexSong].imgaes}`);
    music.play();
  } else {
    // Auto Next song
    changeSong(1);
  }
});

// Next-Prev
next.addEventListener("click", function () {
  changeSong(1);
});
prev.addEventListener("click", function () {
  changeSong(-1);
});
music.setAttribute("src", `${songs[indexSong].song}`);
function changeSong(dir) {
  iSplaying = true;
  if (dir == 1) {
    indexSong++;
    if (indexSong > songs.length - 1) {
      indexSong = 0;
    }
  } else if (dir == -1) {
    indexSong--;
    if (indexSong < 0) {
      indexSong = songs.length - 1;
    }
  }
  music.setAttribute("src", `${songs[indexSong].song}`);
  document.getElementById("name").innerHTML = `${songs[indexSong].name}`;
  document
    .querySelector(".music-img")
    .setAttribute("src", `${songs[indexSong].imgaes}`);
  playPause();
}
//Timer
function displayTimer() {
  const { duration, currentTime } = music;
  range.max = duration;
  range.value = currentTime;
  remainingTime.textContent = formatTimer(currentTime);
  if (!duration) {
    durationTime.textContent = "00:00";
  } else {
    durationTime.textContent = formatTimer(duration);
  }
}

function formatTimer(number) {
  const minutes = Math.floor(number / 60);
  const seconds = Math.floor(number - minutes * 60);
  return `${minutes < 10 ? "0" + minutes : minutes}:
    ${seconds < 10 ? "0" + seconds : seconds}`;
}
//Range
range.oninput = function () {
  progress.max = range.max;
  setInterval(() => {
    progress.value = range.value;
  }, 500);
};
range.addEventListener("change", function () {
  music.currentTime = range.value;
});
//Volume
volumeMusic.oninput = function () {
  progressBar.value = volumeMusic.value;
};
//changeVolum
volumeMusic.addEventListener("change", function () {
  volumeText.innerHTML = ` ${volumeMusic.value} %`;
  music.volume = volumeMusic.value / 100;
});
//Choose song
for (let i = 0; i < itemImg.length; i++) {
  itemImg[i].setAttribute("onclick", "change(this)");
}
function change(element) {
  let getId = element.getAttribute("id");
  indexSong = getId;
  iSplaying = true;
  music.setAttribute("src", `${songs[indexSong].song}`);
  document.getElementById("name").innerHTML = `${songs[indexSong].name}`;
  document
    .querySelector(".music-img")
    .setAttribute("src", `${songs[indexSong].imgaes}`);
  playPause();
}
