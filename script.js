const music = new Audio("audio/Nikko Culture-If Your Love.mp3");

//music.play();

const songs = [
  {
    id: "1",
    songname: `If Your Love <br>
    <div class='subtitle'>Nikko Culture</div>`,
    poster: "img/2.jpg",
  },
  {
    id: "2",
    songname: `Let me <br>
    <div class='subtitle'>Nikko Culture</div>`,
    poster: "img/4.jpg",
  },
  {
    id: "3",
    songname: `Somethings gone <br>
    <div class='subtitle'>Nikko Culture</div>`,
    poster: "img/5.jpg",
  },
  {
    id: "4",
    songname: `Live in the Moment <br>
    <div class='subtitle'>Nikko Culture</div>`,
    poster: "img/3.jpg",
  },
  {
    id: "5",
    songname: `Sunset Vibes <br>
    <div class='subtitle'>Dimitris Athanasiou</div>`,
    poster: "img/7.jpg",
  },
  {
    id: "6",
    songname: `A beautiful girl <br>
    <div class='subtitle'>Dimitris Athanasiou</div>`,
    poster: "img/9.jpg",
  },
  {
    id: "7",
    songname: `Into the light <br>
    <div class='subtitle'>Dimitris Athanasiou</div>`,
    poster: "img/8.jpg",
  },
];

Array.from(document.getElementsByClassName("songItem")).forEach(
  (element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].poster;
    element.getElementsByTagName("h5")[0].innerHTML = songs[i].songname;
  }
);

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementsByClassName("wave")[0];

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active2");
  } else {
    music.pause();
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
    wave.classList.remove("active2");
  }
});
